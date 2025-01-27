// Mock API for handling submissions and predefined beneficiaries

const mockSubmissions = [
  {
    id: "1",
    name: "Mr Ahsan",
    cnic: "12345-6789012-3",
    phone: "+92 300 1234567",
    address: {
      street: "123 Main St",
      city: "Lahore",
      province: "Punjab",
    },
    purpose: "Education Application",
    status: "Completed",
    submissionDate: "2023-06-01T10:00:00Z",
  },
  {
    id: "2",
    name: "Mr Abdullah",
    cnic: "12345-6789012-1",
    phone: "+92 300 1234567",
    address: {
      street: "123 Main St",
      city: "Karachi",
      province: "Sindh",
    },
    purpose: "Job Application",
    status: "In Progress",
    submissionDate: "2023-06-01T10:00:00Z",
  },
  {
    id: "3",
    name: "Mr Sufyan",
    cnic: "12345-6789012-2",
    phone: "+92 300 1234567",
    address: {
      street: "123 Main St",
      city: "Karachi",
      province: "Sindh",
    },
    purpose: "Fund Application",
    status: "Pending",
    submissionDate: "2023-06-01T10:00:00Z",
  },
];

const mockBeneficiaries = [
  {
    id: "test-id-1",
    name: "John Doe",
    cnic: "12345-6789012-3",
    phone: "+92 300 1234567",
    address: "123 Main Street, Lahore",
    purpose: "Financial Aid",
    token: "TOKEN-12345",
    status: "Pending",
    history: [
      {
        date: "2023-06-01T10:00:00Z",
        purpose: "Financial Aid",
        status: "Completed",
        department: "Finance",
        remarks: "Aid provided successfully.",
      },
      {
        date: "2023-05-01T09:00:00Z",
        purpose: "Education Support",
        status: "Completed",
        department: "Education",
        remarks: "Books and fees covered.",
      },
    ],
  },
  {
    id: "test-id-2",
    name: "Jane Smith",
    cnic: "54321-0987654-3",
    phone: "+92 300 7654321",
    address: "456 Another St, Karachi",
    purpose: "Medical Assistance",
    token: "TOKEN-54321",
    status: "In Progress",
    history: [
      {
        date: "2023-07-01T10:00:00Z",
        purpose: "Medical Assistance",
        status: "In Progress",
        department: "Health",
        remarks: "Waiting for doctor approval.",
      },
    ],
  },
];

// Fetch all submissions
export async function fetchSubmissions() {
  await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate API delay
  return mockSubmissions;
}

// Update submission status
export async function updateSubmissionStatus(id, status) {
  await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate API delay
  const submission = mockSubmissions.find((sub) => sub.id === id);
  if (submission) {
    submission.status = status;
  }
}

// Fetch all beneficiaries
export async function fetchBeneficiaries() {
  await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate API delay
  return mockBeneficiaries;
}

// Fetch a single beneficiary's history by ID
export async function fetchBeneficiaryHistory(id) {
  await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate API delay
  const beneficiary = mockBeneficiaries.find((b) => b.id === id);
  return beneficiary ? beneficiary.history : [];
}

// Register a new beneficiary
export async function registerBeneficiary(beneficiary) {
  await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate API delay
  mockBeneficiaries.push(beneficiary);
}
