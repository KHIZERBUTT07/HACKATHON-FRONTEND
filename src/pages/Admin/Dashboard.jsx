import React from "react";
import { useState, useEffect } from "react";
import SummarySection from "../../components/SummarySection";
import UserSubmissionsTable from "../../components/UserSubmissionsTable";
import SubmissionDetails from "../../components/SubmissionDetails";
import ConfirmationDialog from "../../components/ConfirmationDialog";
import { fetchSubmissions, updateSubmissionStatus } from "../../utils/api";

export default function Dashboard() {
  const [submissions, setSubmissions] = useState([]);
  const [filteredSubmissions, setFilteredSubmissions] = useState([]);
  const [selectedSubmission, setSelectedSubmission] = useState(null);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [isConfirmDialogOpen, setIsConfirmDialogOpen] = useState(false);
  const [confirmAction, setConfirmAction] = useState({ type: "", id: "" });
  const [summaryData, setSummaryData] = useState({
    total: 0,
    accepted: 0,
    rejected: 0,
    pending: 0,
  });
  const [filters, setFilters] = useState({
    status: "",
    search: "",
  });

  useEffect(() => {
    fetchSubmissions().then((data) => {
      setSubmissions(data);
      setFilteredSubmissions(data);
      updateSummary(data);
    });
  }, []);

  useEffect(() => {
    const filtered = submissions.filter((sub) => {
      const matchesStatus = filters.status
        ? sub.status === filters.status
        : true;
      const matchesSearch = filters.search
        ? sub.name.toLowerCase().includes(filters.search.toLowerCase()) ||
          sub.cnic.includes(filters.search) ||
          sub.purpose.toLowerCase().includes(filters.search.toLowerCase())
        : true;
      return matchesStatus && matchesSearch;
    });
    setFilteredSubmissions(filtered);
  }, [filters, submissions]);

  const updateSummary = (data) => {
    const summary = data.reduce(
      (acc, sub) => {
        acc.total++;
        acc[sub.status.toLowerCase()]++;
        return acc;
      },
      { total: 0, accepted: 0, rejected: 0, pending: 0 }
    );
    setSummaryData(summary);
  };

  const handleStatusChange = async (id, newStatus) => {
    setConfirmAction({ type: newStatus, id });
    setIsConfirmDialogOpen(true);
  };

  const confirmStatusChange = async () => {
    const { type, id } = confirmAction;
    try {
      await updateSubmissionStatus(id, type);
      const updatedSubmissions = submissions.map((sub) =>
        sub.id === id ? { ...sub, status: type } : sub
      );
      setSubmissions(updatedSubmissions);
      updateSummary(updatedSubmissions);
      setIsConfirmDialogOpen(false);
    } catch (error) {
      console.error("Failed to update status:", error);
    }
  };

  const handleDetailsClick = (submission) => {
    setSelectedSubmission(submission);
    setIsDetailsModalOpen(true);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <SummarySection data={summaryData} />
      <UserSubmissionsTable
        submissions={filteredSubmissions}
        onStatusChange={handleStatusChange}
        onDetailsClick={handleDetailsClick}
        filters={filters}
        setFilters={setFilters}
      />
      {selectedSubmission && (
        <SubmissionDetails
          submission={selectedSubmission}
          isOpen={isDetailsModalOpen}
          onClose={() => setIsDetailsModalOpen(false)}
        />
      )}
      <ConfirmationDialog
        isOpen={isConfirmDialogOpen}
        onClose={() => setIsConfirmDialogOpen(false)}
        onConfirm={confirmStatusChange}
        action={confirmAction.type}
      />
    </div>
  );
}
