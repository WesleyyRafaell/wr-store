import { UserModel } from "./model";
import { AuthRepository } from "./repository";

export async function loginWithEmailAndPasswordAction(props: UserModel) {
  const result = await AuthRepository.signUp(props);

  if (!result.success) {
    return { success: false, error: result.error };
  }

  return result;
}
