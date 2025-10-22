"use client";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";

import { Input } from "@/components/ui/input";
import { loginWithEmailAndPasswordAction } from "@/features/auth/action";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import z from "zod";

const AuthPage = () => {
  const router = useRouter();
  const signUpSchema = z
    .object({
      email: z.email({ message: "E-mail inválido" }),
      name: z.string(),
      password: z.string().min(6, { message: "A senha deve ter no mínimo 6 caracteres" }),
      confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
      path: ["confirmPassword"],
      message: "As senhas não coincidem",
    });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (data: z.infer<typeof signUpSchema>) => {
    const result = await loginWithEmailAndPasswordAction(data);

    if (!result.success) {
      toast.error(result?.error);
      return;
    }

    toast.success("Cadastro realizado com sucesso");
    router.push("/home");
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/2 h-full bg-primary flex justify-center items-center">
        <div className="w-3/4">
          <h1 className="text-3xl font-bold text-secondary">Cadastro</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="pt-5">
            <FieldGroup>
              <div className="grid grid-cols-2 gap-4">
                <Field>
                  <FieldLabel className="text-white" htmlFor="checkout-7j9-card-name-43j">
                    Nome
                  </FieldLabel>
                  <Input
                    {...register("name")}
                    variant="secondary"
                    id="checkout-7j9-card-name-43j"
                  />
                </Field>

                <Field>
                  <FieldLabel className="text-white" htmlFor="checkout-7j9-card-name-43j-email">
                    Email
                  </FieldLabel>
                  <Input
                    type="email"
                    {...register("email")}
                    variant="secondary"
                    id="checkout-7j9-card-name-43j-email"
                  />
                  {errors.email && (
                    <p className="text-xs text-orange-500">{errors.email.message}</p>
                  )}
                </Field>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Field>
                  <FieldLabel className="text-white" htmlFor="checkout-7j9-card-name-43j-senha">
                    Senha
                  </FieldLabel>
                  <Input
                    {...register("password")}
                    type="password"
                    variant="secondary"
                    id="checkout-7j9-card-name-43j-senha"
                  />
                  {errors.password && (
                    <p className="text-xs text-orange-500">{errors.password.message}</p>
                  )}
                </Field>

                <Field>
                  <FieldLabel className="text-white" htmlFor="checkout-7j9-card-name-43j-senha">
                    Repetir senha
                  </FieldLabel>
                  <Input
                    {...register("confirmPassword")}
                    type="password"
                    variant="secondary"
                    id="checkout-7j9-card-name-43j-senha"
                  />
                  {errors.confirmPassword && (
                    <p className="text-xs text-orange-500">{errors.confirmPassword.message}</p>
                  )}
                </Field>
              </div>

              <Field orientation="horizontal">
                <Button type="submit" variant="secondary" className="w-full cursor-pointer">
                  Cadastrar
                </Button>
              </Field>
            </FieldGroup>
          </form>
        </div>
      </div>
      <div className="w-1/2 h-full flex justify-center items-center">
        <div className="w-2/4">
          <h1 className="text-3xl font-bold text-primary">Login</h1>
          <form className="pt-5">
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="checkout-7j9-card-name-43j">Email</FieldLabel>
                <Input id="checkout-7j9-card-name-43j" required />
              </Field>

              <Field>
                <FieldLabel htmlFor="checkout-7j9-card-name-43j">Senha</FieldLabel>
                <Input type="password" id="checkout-7j9-card-name-43j" required />
              </Field>

              <Field orientation="horizontal">
                <Button type="submit" className="w-full cursor-pointer">
                  Logar
                </Button>
              </Field>
            </FieldGroup>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
