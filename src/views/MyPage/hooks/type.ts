export interface defaultResponse {
  code: number;
  message: string;
}

export interface UserProps {
  id: number;
  profileImgUrl: string;
  name: string;
  role: string;
}

export interface UserResponse {
  code: number;
  message: string;
  data: UserProps;
}
