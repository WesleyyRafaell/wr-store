import { UserModel } from "@/features/auth/model";
import Cookies from "js-cookie";

const AUTH_TOKEN_KEY = "auth_token";
const USER_DATA_KEY = "user_data";

export const generateToken = () => {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
};

export const saveUser = ({ name, email, password }: UserModel) => {
  const userData = { name, email, password };
  localStorage.setItem(USER_DATA_KEY, JSON.stringify(userData));
};

export const getUser = () => {
  const data = localStorage.getItem(USER_DATA_KEY);

  return data ? JSON.parse(data) : null;
};

export const saveAuthToken = (token: string) => {
  Cookies.set(AUTH_TOKEN_KEY, token, {
    expires: 7,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
  });
};

export const removeAuthToken = () => {
  Cookies.remove(AUTH_TOKEN_KEY);
};
