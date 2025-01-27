import React, { useState, useEffect } from "react";
import SummarySection from "../../components/SummarySection";
import BeneficiaryHistoryModal from "../../components/BeneficiaryHistoryModal";
import { fetchSubmissions, fetchBeneficiaryHistory } from "../../utils/api";

const Dashboard = () => {
  const [submissions, setSubmissions] = useState([]);
  const [filteredSubmissions, setFilteredSubmissions] = useState([]);
  const [filters, setFilters] = useState({ search: "", status: "" });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedHistory, setSelectedHistory] = useState([]);

  useEffect(() => {
    const loadSubmissions = async () => {
      const data = await fetchSubmissions();
      setSubmissions(data);
      setFilteredSubmissions(data);
    };
    loadSubmissions();
  }, []);

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleViewHistory = async (id) => {
    const history = await fetchBeneficiaryHistory(id);
    setSelectedHistory(history);
    setIsModalOpen(true);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Admin Dashboard</h1>

      {/* Summary Section */}
      <SummarySection data={{ total: submissions.length }} />

      {/* Search Filters */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Search Beneficiaries</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="search"
            placeholder="Search by name, CNIC, or phone"
            className="px-4 py-2 border rounded-md"
            value={filters.search}
            onChange={handleFilterChange}
          />
          <select
            name="status"
            className="px-4 py-2 border rounded-md"
            value={filters.status}
            onChange={handleFilterChange}
          >
            <option value="">All Statuses</option>
            <option value="New">New</option>
            <option value="Returning">Returning</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
      </div>

      {/* Logs Table */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Logs</h2>
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2">Name</th>
              <th className="p-2">CNIC</th>
              <th className="p-2">Phone</th>
              <th className="p-2">Status</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredSubmissions.map((submission) => (
              <tr key={submission.id} className="border-t">
                <td className="p-2">{submission.name}</td>
                <td className="p-2">{submission.cnic}</td>
                <td className="p-2">{submission.phone}</td>
                <td className="p-2">{submission.status}</td>
                <td className="p-2">
                  <button
                    onClick={() => handleViewHistory(submission.id)}
                    className="text-blue-600 hover:underline"
                  >
                    View History
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* History Modal */}
      <BeneficiaryHistoryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        history={selectedHistory}
      />
    </div>
  );
};

export default Dashboard;
