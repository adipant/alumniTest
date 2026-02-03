// Alumni member type definition
export interface AlumniMember {
  id: string;
  fullName: string;
  batchYear: string;
  briefProfile: string;
  practiceArea: string;
  linkedinUrl?: string;
  email?: string;
  phone?: string;
  imageUrl: string;
  registeredAt: string;
  status: 'pending' | 'approved' | 'rejected';
}

// Registration form data type
export interface RegistrationData {
  fullName: string;
  batchYear: string;
  briefProfile: string;
  practiceArea: string;
  linkedinUrl?: string;
  email?: string;
  phone?: string;
}

// API Response types
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}
