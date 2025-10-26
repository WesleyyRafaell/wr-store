import { Logo } from "@/components/atoms";
import { LoginForm, RegisterForm } from "@/components/molecules";
import Link from "next/link";

const AuthPage = () => {
  return (
    <div className="flex h-auto md:h-screen flex-col md:flex-row">
      <div className="w-full md:w-1/2 h-[700px] md:h-full bg-primary flex justify-center">
        <div className="h-full w-3/5 relative flex items-center">
          <div className="absolute top-5">
            <Link href="/home">
              <Logo />
            </Link>
          </div>

          <div className="w-full text-center md:text-start">
            <h1 className="text-3xl font-bold text-secondary">Cadastro</h1>
            <RegisterForm />
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 h-full flex justify-center items-center">
        <div className="w-2/4 py-7 md:py-0">
          <h1 className="text-3xl font-bold text-primary">Login</h1>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
