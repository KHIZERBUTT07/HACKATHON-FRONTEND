import React from "react";

const BeneficiaryHistoryModal = ({ isOpen, onClose, history }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 max-w-lg w-full">
        <h2 className="text-2xl font-bold mb-4">Beneficiary History</h2>
        {history.length === 0 ? (
          <p>No history available for this beneficiary.</p>
        ) : (
          <ul className="space-y-4">
            {history.map((entry, index) => (
              <li key={index} className="bg-gray-100 p-4 rounded">
                <p>
                  <strong>Date:</strong>{" "}
                  {new Date(entry.date).toLocaleDateString()}
                </p>
                <p>
                  <strong>Purpose:</strong> {entry.purpose}
                </p>
                <p>
                  <strong>Status:</strong> {entry.status}
                </p>
                <p>
                  <strong>Department:</strong> {entry.department}
                </p>
                <p>
                  <strong>Remarks:</strong> {entry.remarks}
                </p>
              </li>
            ))}
          </ul>
        )}
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default BeneficiaryHistoryModal;
