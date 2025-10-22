import z from "zod";

export const signInSchema = z.object({
  email: z.email({ message: "E-mail inválido" }),
  password: z.string().min(6, { message: "A senha deve ter no mínimo 6 caracteres" }),
});

export type signInTypeSchema = z.infer<typeof signInSchema>;
