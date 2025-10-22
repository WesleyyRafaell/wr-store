import { LoginForm, RegisterForm } from "@/components/molecules";

const AuthPage = () => {
  return (
    <div className="flex h-screen">
      <div className="w-1/2 h-full bg-primary flex justify-center items-center">
        <div className="w-3/4">
          <h1 className="text-3xl font-bold text-secondary">Cadastro</h1>
          <RegisterForm />
        </div>
      </div>
      <div className="w-1/2 h-full flex justify-center items-center">
        <div className="w-2/4">
          <h1 className="text-3xl font-bold text-primary">Login</h1>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
