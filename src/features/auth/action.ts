import { LoginModel, UserModel } from "./model";
import { AuthRepository } from "./repository";

export async function registerAction(props: UserModel) {
  const result = await AuthRepository.signUp(props);

  if (!result.success) {
    return { success: false, error: result.error };
  }

  return result;
}

export async function loginAction(props: LoginModel) {
  const result = await AuthRepository.signIn(props);

  if (!result.success) {
    return { success: false, error: result.error };
  }

  return result;
}
