"use client";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { loginAction } from "@/features/auth/action";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { signInSchema, signInTypeSchema } from "./schema";

export const LoginForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<signInTypeSchema>({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = async (data: signInTypeSchema) => {
    const result = await loginAction(data);

    if (!result.success) {
      toast.error(result?.error);
      return;
    }

    toast.success("Login realizado com sucesso");
    router.push("/home");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="pt-5">
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="checkout-7j9-card-name-43j-email">Email</FieldLabel>
          <Input type="email" {...register("email")} id="checkout-7j9-card-name-43j-email" />
          {errors.email && <p className="text-xs text-orange-500">{errors.email.message}</p>}
        </Field>

        <Field>
          <FieldLabel htmlFor="checkout-7j9-card-name-43j-pass">Senha</FieldLabel>
          <Input {...register("password")} type="password" id="checkout-7j9-card-name-43j-pass" />
          {errors.password && <p className="text-xs text-orange-500">{errors.password.message}</p>}
        </Field>

        <Field orientation="horizontal">
          <Button type="submit" className="w-full cursor-pointer">
            Logar
          </Button>
        </Field>
      </FieldGroup>
    </form>
  );
};
