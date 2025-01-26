export default function SubmissionDetails({ submission, isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Submission Details</h2>
        <div className="space-y-2">
          <p>
            <strong>Name:</strong> {submission.name}
          </p>
          <p>
            <strong>CNIC:</strong> {submission.cnic}
          </p>
          <p>
            <strong>Phone:</strong> {submission.phone}
          </p>
          <p>
            <strong>Address:</strong> {submission.address.street},{" "}
            {submission.address.city}, {submission.address.province}
          </p>
          <p>
            <strong>Purpose:</strong> {submission.purpose}
          </p>
          <p>
            <strong>Status:</strong> {submission.status}
          </p>
          <p>
            <strong>Submission Date:</strong>{" "}
            {new Date(submission.submissionDate).toLocaleDateString()}
          </p>
        </div>
        <button
          onClick={onClose}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Close
        </button>
      </div>
    </div>
  );
}
