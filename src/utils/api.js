// This is a mock API. In a real application, you would replace these
// with actual API calls to your backend.

const mockSubmissions = [
    {
      id: "1",
      name: "John Doe",
      cnic: "12345-6789012-3",
      phone: "+92 300 1234567",
      address: {
        street: "123 Main St",
        city: "Lahore",
        province: "Punjab",
      },
      purpose: "Passport Application",
      status: "Pending",
      submissionDate: "2023-06-01T10:00:00Z",
    },
    // Add more mock submissions here...
  ];
  
  export async function fetchSubmissions() {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500));
    return mockSubmissions;
  }
  
  export async function updateSubmissionStatus(id, status) {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500));
    const submission = mockSubmissions.find((sub) => sub.id === id);
    if (submission) {
      submission.status = status;
    }
  }
  