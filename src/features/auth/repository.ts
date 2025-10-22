import { generateToken } from "@/utils/storage";
import { UserModel } from "./model";
import Cookies from "js-cookie";

export interface IAuthRepository {
  signUp({
    email,
    name,
    password,
  }: UserModel): Promise<
    { success: true; user: UserModel | null } | { success: false; error: string }
  >;
}

export const AuthRepository: IAuthRepository = {
  async signUp({ email, name, password }: UserModel) {
    try {
      const response = await new Promise<{ user: UserModel | null }>((resolve) =>
        setTimeout(() => resolve({ user: { email, password, name } }), 1000)
      );

      if (!response.user) return { success: false, error: "No user returned" };

      const userData = response.user;

      const token = generateToken();

      Cookies.set("user_data", JSON.stringify(userData), { expires: 7 });
      Cookies.set("auth_token", token, { expires: 7 });

      return { success: true, user: response.user };
    } catch (error) {
      return { success: false, error: "Failed to sign up" };
    }
  },
};
