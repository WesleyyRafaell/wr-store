export interface UserModel {
  email: string;
  password: string;
  name: string;
}

export type LoginModel = Omit<UserModel, "name">;
