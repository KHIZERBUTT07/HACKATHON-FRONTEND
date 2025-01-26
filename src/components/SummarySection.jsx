import React from "react";
export default function SummarySection({ data }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-2">Total Submissions</h2>
        <p className="text-3xl font-bold">{data.total}</p>
      </div>
      <div className="bg-green-100 p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-2">Accepted</h2>
        <p className="text-3xl font-bold text-green-600">{data.accepted}</p>
      </div>
      <div className="bg-red-100 p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-2">Rejected</h2>
        <p className="text-3xl font-bold text-red-600">{data.rejected}</p>
      </div>
      <div className="bg-yellow-100 p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-2">Pending</h2>
        <p className="text-3xl font-bold text-yellow-600">{data.pending}</p>
      </div>
    </div>
  );
}
