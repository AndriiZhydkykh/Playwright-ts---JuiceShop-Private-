export interface UserCreateRequest {
  email: string;
  password: string;
  passwordRepeat: string;
  securityAnswer: string;
  securityQuestion: {
    id: number;
    question: string;
  }
}

export interface UserCreatedResponse {
  status: string;
  data: {
    username: string;
    role: string;
    deluxeToken: string;
    lastLoginIp: string;
    profileImage: string;
    isActive: boolean;
    id: number;
    email: string;
    updatedAt: string;
    createdAt: string;
    deletedAt: null;
  }
}
