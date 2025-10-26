"use client";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { registerAction } from "@/features/auth/action";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { signUpSchema, signUpTypeSchema } from "./schema";
import { useState } from "react";
import { Spinner } from "@/components/ui/spinner";

export const RegisterForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<signUpTypeSchema>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (data: signUpTypeSchema) => {
    setLoading(true);
    const result = await registerAction(data);
    setLoading(false);

    if (!result.success) {
      toast.error(result?.error);
      return;
    }

    toast.success("Cadastro realizado com sucesso");
    router.push("/home");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="pt-5">
      <FieldGroup>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Field>
            <FieldLabel className="text-white" htmlFor="checkout-7j9-card-name-43j">
              Nome
            </FieldLabel>
            <Input {...register("name")} variant="secondary" id="checkout-7j9-card-name-43j" />
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
            {errors.email && <p className="text-xs text-orange-500">{errors.email.message}</p>}
          </Field>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
          <Button
            disabled={loading}
            type="submit"
            variant="secondary"
            className="w-full cursor-pointer"
          >
            {loading ? <Spinner /> : null}
            {!loading ? "Cadastrar" : null}
          </Button>
        </Field>
      </FieldGroup>
    </form>
  );
};
