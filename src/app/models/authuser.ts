export interface Duplicate {
  username: string;
  status: boolean;
  message: string;
}

export interface AuthUser {
  username: string;
  roles: string[];
  access_token: string;
}
