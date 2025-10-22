import { generateToken, getUser, saveAuthToken, saveUser } from "@/utils/storage";
import { LoginModel, UserModel } from "./model";

export interface IAuthRepository {
  signUp({
    email,
    name,
    password,
  }: UserModel): Promise<{ success: true } | { success: false; error: string }>;
  signIn({
    email,
    password,
  }: LoginModel): Promise<{ success: true } | { success: false; error: string }>;
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

      saveUser(userData);
      saveAuthToken(token);

      return { success: true };
    } catch (error) {
      return { success: false, error: "Failed to sign up" };
    }
  },
  async signIn({ email, password }: LoginModel) {
    try {
      const response = await new Promise<{ user: LoginModel | null }>((resolve) =>
        setTimeout(() => resolve({ user: { email, password } }), 1000)
      );

      if (!response.user) return { success: false, error: "No user returned" };

      const userFromStorage = getUser();

      if (email !== userFromStorage?.email || password !== userFromStorage?.password) {
        return { success: false, error: "Invalid credentials" };
      }

      const token = generateToken();

      saveAuthToken(token);

      return { success: true };
    } catch (error) {
      return { success: false, error: "Failed to sign up" };
    }
  },
};
