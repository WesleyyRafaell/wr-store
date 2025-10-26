"use client";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";

import getUser from "@/hooks/getUser";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import { RenderCondition } from "@/components/atoms";
import { Controller, useForm } from "react-hook-form";
import { checkoutSchema, checkoutTypeSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { BoxWithTitle, FormBuilder, TotalPriceCard } from "@/components/molecules";
import { redirect } from "next/navigation";
import { isObjectNotEmpty } from "@/utils/object";
import { toast } from "react-toastify";

const Checkout = () => {
  const user = getUser();

  const [tabs, setTabs] = useState(1);

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<checkoutTypeSchema>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      address: "",
      cardCpf: "",
      cardCvv: "",
      cardMonth: "",
      cardName: "",
      cardNumber: "",
      cardYear: "",
      cep: "",
      complement: "",
      cpf: "",
      deliveryMethod: "default",
      lastname: "",
      installments: "",
      name: "",
      neighborhood: "",
      number: "",
      phone: "",
      paymentMethod: "pix",
    },
  });

  const changeTabs = (tabNumber: number) => {
    setTabs(tabNumber);
  };

  const onSubmit = (data: checkoutTypeSchema) => {
    console.log("data:", data);
    // realizar manipulação com dados coletados aqui

    redirect(`/payment?payment_type=${watch("paymentMethod")}`);
  };

  useEffect(() => {
    if (isObjectNotEmpty(errors)) {
      toast.error("Existem erros a serem corrigidos");
    }
  }, [errors]);

  return (
    <div className="pt-7">
      <h1 className="text-lg font-bold text-primary">Finalizar a compra</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-between pt-6">
          <div className="w-1/2 flex flex-col gap-6">
            <BoxWithTitle
              hasEdit={tabs !== 1}
              pressEdit={() => changeTabs(1)}
              title="Dados pessoais"
              index={1}
            >
              <RenderCondition condition={tabs === 1}>
                <div className="py-6">
                  <FieldGroup>
                    <div className="grid grid-cols-2 gap-4">
                      <Field>
                        <FieldLabel htmlFor="checkout-7j9-card-name-43j-email">Email</FieldLabel>
                        <p>{user?.email}</p>
                      </Field>
                    </div>

                    <FormBuilder
                      fields={[
                        {
                          name: "name",
                          label: "Nome",
                          type: "input",
                          placeholder: "Seu nome completo",
                          width: "half",
                        },
                        { name: "lastname", label: "Sobrenome", type: "input", width: "half" },
                        { name: "cpf", label: "CPF", type: "input", width: "half" },
                        { name: "phone", label: "Celular", type: "input", width: "half" },
                      ]}
                      control={control}
                      register={register}
                      errors={errors}
                    />
                    <div>
                      <Button
                        type="button"
                        onClick={() => changeTabs(2)}
                        className="w-full cursor-pointer"
                      >
                        Continuar para endereço
                      </Button>
                    </div>
                  </FieldGroup>
                </div>
              </RenderCondition>
            </BoxWithTitle>

            <BoxWithTitle
              index={2}
              title="Entrega"
              hasEdit={tabs !== 2}
              pressEdit={() => changeTabs(2)}
            >
              <RenderCondition condition={tabs === 2}>
                <div className="py-6">
                  <FieldGroup>
                    <FormBuilder
                      fields={[
                        {
                          name: "cep",
                          label: "Cep",
                          type: "input",
                          width: "half",
                        },
                        { name: "address", label: "Endereço", type: "input", width: "half" },
                        { name: "number", label: "Número", type: "input", width: "half" },
                        { name: "neighborhood", label: "Bairro", type: "input", width: "half" },
                        {
                          name: "complement",
                          label: "Complemento (opcional)",
                          type: "input",
                        },
                        {
                          name: "deliveryMethod",
                          label: "Forma de entrega",
                          type: "radio",
                          options: [
                            { label: "Em até 13 dias úteis - R$ 34,90", value: "default" },
                            { label: "Em até 30 dias úteis - R$ 00,00", value: "free" },
                          ],
                        },
                      ]}
                      control={control}
                      register={register}
                      errors={errors}
                    />

                    <div>
                      <Button
                        type="button"
                        onClick={() => changeTabs(3)}
                        className="w-full cursor-pointer"
                      >
                        Continuar para pagamento
                      </Button>
                    </div>
                  </FieldGroup>
                </div>
              </RenderCondition>
            </BoxWithTitle>

            <BoxWithTitle
              index={3}
              title="Pagamento"
              hasEdit={tabs !== 3}
              pressEdit={() => changeTabs(3)}
            >
              <RenderCondition condition={tabs === 3}>
                <div className="py-6">
                  <div className="grid grid-cols-2 gap-4">
                    <Controller
                      name="paymentMethod"
                      control={control}
                      render={({ field }) => (
                        <RadioGroup
                          onValueChange={field.onChange}
                          value={field.value}
                          defaultValue="pix"
                        >
                          <div className="flex items-center gap-3">
                            <RadioGroupItem value="creditcard" id="r4" />
                            <Label htmlFor="r4">Cartão de crédito</Label>
                          </div>
                          <div className="flex items-center gap-3">
                            <RadioGroupItem value="pix" id="r5" />
                            <Label htmlFor="r5">Pix</Label>
                          </div>
                          <div className="flex items-center gap-3">
                            <RadioGroupItem value="ticket" id="r6" />
                            <Label htmlFor="r6">Boleto</Label>
                          </div>
                        </RadioGroup>
                      )}
                    />
                  </div>
                  <div className="mt-6 border rounded-md p-2">
                    <RenderCondition condition={watch("paymentMethod") === "creditcard"}>
                      <FieldGroup>
                        <FormBuilder
                          fields={[
                            {
                              name: "cardNumber",
                              label: "Número do cartão",
                              type: "input",
                            },
                            {
                              name: "installments",
                              label: "Parcelas",
                              type: "select",
                              options: [
                                { label: "1x sem juros", value: "1" },
                                { label: "2x sem juros", value: "2" },
                                { label: "3x sem juros", value: "3" },
                              ],
                            },
                            { name: "cardName", label: "nome impresso no cartão", type: "input" },
                            {
                              name: "cardMonth",
                              label: "mês validade",
                              type: "input",
                              width: "half",
                            },
                            {
                              name: "cardYear",
                              label: "Ano validade",
                              type: "input",
                              width: "half",
                            },
                            {
                              name: "cardCvv",
                              label: "Código de segurança",
                              type: "input",
                              width: "half",
                            },
                            {
                              name: "cardCpf",
                              label: "CPF do titular",
                              type: "input",
                              width: "half",
                            },
                          ]}
                          control={control}
                          register={register}
                          errors={errors}
                        />
                      </FieldGroup>
                    </RenderCondition>

                    <RenderCondition condition={watch("paymentMethod") === "pix"}>
                      <div className="flex flex-col items-center gap-6">
                        <Image src="/pixlogo.png" alt="logo pix" width={200} height={90} />
                        <div className="flex flex-col gap-1.5">
                          <div className="flex items-center gap-2">
                            <Badge>1</Badge>
                            <p>Aperte em Finalizar compra para gerar o código QR</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge>2</Badge>
                            <p>Confira os dados e realize o pagamento pelo app do seu banco</p>
                          </div>
                        </div>
                      </div>
                    </RenderCondition>

                    <RenderCondition condition={watch("paymentMethod") === "ticket"}>
                      <div className="flex flex-col items-center gap-6">
                        <Image src="/boletologo.png" alt="logo boleto" width={200} height={90} />
                        <div className="flex flex-col gap-1.5">
                          <div className="flex items-center gap-2">
                            <Badge>1</Badge>
                            <p>Aperte em Finalizar compra para gerar o código QR</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge>2</Badge>
                            <p>Confira os dados e realize o pagamento pelo app do seu banco</p>
                          </div>
                        </div>
                      </div>
                    </RenderCondition>
                  </div>
                </div>
              </RenderCondition>
            </BoxWithTitle>
          </div>
          <div className="w-2/5">
            <TotalPriceCard>
              <Button type="submit" className="cursor-pointer w-full">
                Continuar
              </Button>
            </TotalPriceCard>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
