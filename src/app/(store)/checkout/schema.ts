import { onlyDigits } from "@/utils/masks";
import { z } from "zod";

export const checkoutSchema = z
  .object({
    name: z.string().min(2, "Nome obrigatório"),
    lastname: z.string().min(2, "Sobrenome obrigatório"),
    cpf: z
      .string()
      .min(11, "CPF inválido")
      .regex(/^\d{11}$|^\d{3}\.\d{3}\.\d{3}-\d{2}$/, "CPF inválido")
      .transform((val) => onlyDigits(val)),
    phone: z
      .string()
      .min(8, "Celular obrigatório")
      .regex(/^[0-9()+\-\s]+$/, "Celular inválido")
      .transform((val) => onlyDigits(val)),

    cep: z
      .string()
      .min(8, "CEP inválido")
      .regex(/^\d{5}-?\d{3}$/, "CEP inválido")
      .transform((val) => onlyDigits(val)),
    address: z.string().min(3, "Endereço obrigatório"),
    number: z.string().min(1, "Número obrigatório"),
    neighborhood: z.string().min(2, "Bairro obrigatório"),
    complement: z.string().optional(),
    deliveryMethod: z.enum(["default", "comfortable"] as const, {
      error: "Selecione uma forma de entrega",
    }),

    paymentMethod: z.enum(["creditcard", "pix", "ticket"] as const, {
      error: "Selecione um método de pagamento",
    }),

    // Campos do cartão (podem ser opcionais)
    cardNumber: z.string().optional(),
    installments: z.string().optional(),
    cardName: z.string().optional(),
    cardMonth: z.string().optional(),
    cardYear: z.string().optional(),
    cardCvv: z.string().optional(),
    cardCpf: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.paymentMethod === "creditcard") {
      if (!data.cardNumber || onlyDigits(data.cardNumber).length < 16) {
        ctx.addIssue({
          code: "custom",
          path: ["cardNumber"],
          message: "Número do cartão inválido",
        });
      }
      if (!data.cardName || data.cardName.trim().length < 3) {
        ctx.addIssue({
          code: "custom",
          path: ["cardName"],
          message: "Nome no cartão obrigatório",
        });
      }
      if (!data.cardMonth) {
        ctx.addIssue({
          code: "custom",
          path: ["cardMonth"],
          message: "Mês de validade obrigatório",
        });
      }
      if (!data.cardYear) {
        ctx.addIssue({
          code: "custom",
          path: ["cardYear"],
          message: "Ano de validade obrigatório",
        });
      }
      if (!data.cardCvv || data.cardCvv.trim().length < 3) {
        ctx.addIssue({
          code: "custom",
          path: ["cardCvv"],
          message: "CVV inválido",
        });
      }
      if (!data.cardCpf || !/^\d{11}$|^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(data.cardCpf)) {
        ctx.addIssue({
          code: "custom",
          path: ["cardCpf"],
          message: "CPF do titular inválido",
        });
      }
    }
  });

export type checkoutTypeSchema = z.infer<typeof checkoutSchema>;
