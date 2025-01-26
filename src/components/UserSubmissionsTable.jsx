import React from "react"
import { useState } from "react"

export default function UserSubmissionsTable({
  submissions,
  onStatusChange,
  onDetailsClick,
  filters,
  setFilters,
}) {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value })
    setCurrentPage(1)
  }

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = submissions.slice(indexOfFirstItem, indexOfLastItem)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-4 flex flex-wrap items-center justify-between gap-4">
        <select name="status" value={filters.status} onChange={handleFilterChange} className="p-2 border rounded">
          <option value="">All Statuses</option>
          <option value="Pending">Pending</option>
          <option value="Accepted">Accepted</option>
          <option value="Rejected">Rejected</option>
        </select>
        <input
          type="text"
          name="search"
          value={filters.search}
          onChange={handleFilterChange}
          placeholder="Search by name, CNIC, or purpose"
          className="p-2 border rounded w-full md:w-auto"
        />
      </div>
      <table className="w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 text-left">Name</th>
            <th className="p-2 text-left">CNIC</th>
            <th className="p-2 text-left">Phone</th>
            <th className="p-2 text-left">Purpose</th>
            <th className="p-2 text-left">Status</th>
            <th className="p-2 text-left">Date</th>
            <th className="p-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((submission) => (
            <tr key={submission.id} className="border-t">
              <td className="p-2">{submission.name}</td>
              <td className="p-2">{submission.cnic}</td>
              <td className="p-2">{submission.phone}</td>
              <td className="p-2">{submission.purpose}</td>
              <td className="p-2">
                <span
                  className={`px-2 py-1 rounded text-sm ${
                    submission.status === "Accepted"
                      ? "bg-green-200 text-green-800"
                      : submission.status === "Rejected"
                        ? "bg-red-200 text-red-800"
                        : "bg-yellow-200 text-yellow-800"
                  }`}
                >
                  {submission.status}
                </span>
              </td>
              <td className="p-2">{new Date(submission.submissionDate).toLocaleDateString()}</td>
              <td className="p-2">
                <button
                  onClick={() => onDetailsClick(submission)}
                  className="warning text-white px-2 py-1 rounded mr-2 text-sm"
                >
                  Details
                </button>
                {submission.status === "Pending" && (
                  <>
                    <span
                      onClick={() => onStatusChange(submission.id, "Accepted")}
                      className="success bg-green-500 text-white px-2 py-1 rounded mr-2 text-md"
                    >
                      Accept
                    </span>
                    <span
                      onClick={() => onStatusChange(submission.id, "Rejected")}
                      className="danger bg-red-500 text-white px-2 py-1 rounded text-sm"
                    >
                      Reject
                    </span>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="p-4 flex justify-center">
        {Array.from({ length: Math.ceil(submissions.length / itemsPerPage) }).map((_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={`mx-1 px-3 py-1 rounded ${currentPage === index + 1 ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  )
}

