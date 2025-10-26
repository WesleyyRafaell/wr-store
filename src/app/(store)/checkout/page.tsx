"use client";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import getUser from "@/hooks/getUser";
import { FaRegEdit } from "react-icons/fa";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { RenderCondition } from "@/components/atoms";
import { Controller, useForm } from "react-hook-form";
import { checkoutSchema, checkoutTypeSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { TotalPriceCard } from "@/components/molecules";

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
  };

  return (
    <div className="pt-7">
      <h1 className="text-lg font-bold text-primary">Finalizar a compra</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-between pt-6">
          <div className="w-1/2 flex flex-col gap-6">
            <div className="border px-3 rounded-md">
              <div className="p-3 border-b flex items-center justify-between">
                <div className="flex gap-3">
                  <div className="bg-primary w-6 h-6 rounded-full flex items-center justify-center">
                    <p className="text-white">1</p>
                  </div>
                  <div>
                    <p className="font-bold text-primary">Dados pessoais</p>
                  </div>
                </div>
                <RenderCondition condition={tabs !== 1}>
                  <div
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={() => changeTabs(1)}
                  >
                    <FaRegEdit className="text-primary text-lg" />
                    <p className="text-primary text-sm font-bold">Editar</p>
                  </div>
                </RenderCondition>
              </div>
              <RenderCondition condition={tabs === 1}>
                <div className="py-6">
                  <FieldGroup>
                    <div className="grid grid-cols-2 gap-4">
                      <Field>
                        <FieldLabel htmlFor="checkout-7j9-card-name-43j-email">Email</FieldLabel>
                        <p>{user?.email}</p>
                      </Field>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <Field>
                        <FieldLabel htmlFor="checkout-7j9-card-name-43j-name">Nome</FieldLabel>
                        <Input
                          {...register("name")}
                          type="text"
                          id="checkout-7j9-card-name-43j-name"
                        />
                        {errors.name && (
                          <p className="text-xs text-orange-500">{errors.name.message}</p>
                        )}
                      </Field>
                      <Field>
                        <FieldLabel htmlFor="checkout-7j9-card-name-lastname">Sobrenome</FieldLabel>
                        <Input
                          {...register("lastname")}
                          type="text"
                          id="checkout-7j9-card-name-lastname"
                        />
                        {errors.lastname && (
                          <p className="text-xs text-orange-500">{errors.lastname.message}</p>
                        )}
                      </Field>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <Field>
                        <FieldLabel htmlFor="checkout-7j9-card-name-43j-cpf">CPF</FieldLabel>
                        <Input
                          {...register("cpf")}
                          type="text"
                          id="checkout-7j9-card-name-43j-cpf"
                        />
                        {errors.cpf && (
                          <p className="text-xs text-orange-500">{errors.cpf.message}</p>
                        )}
                      </Field>
                      <Field>
                        <FieldLabel htmlFor="checkout-7j9-card-name-cell">Celular</FieldLabel>
                        <Input
                          {...register("phone")}
                          type="text"
                          id="checkout-7j9-card-name-cell"
                        />
                        {errors.phone && (
                          <p className="text-xs text-orange-500">{errors.phone.message}</p>
                        )}
                      </Field>
                    </div>
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
            </div>

            <div className="border px-3 rounded-md">
              <div className="p-3 border-b flex items-center justify-between">
                <div className="flex gap-3">
                  <div className="bg-primary w-6 h-6 rounded-full flex items-center justify-center">
                    <p className="text-white">2</p>
                  </div>
                  <div>
                    <p className="font-bold text-primary">Entrega</p>
                  </div>
                </div>
                <RenderCondition condition={tabs !== 2}>
                  <div
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={() => changeTabs(2)}
                  >
                    <FaRegEdit className="text-primary text-lg" />
                    <p className="text-primary text-sm font-bold">Editar</p>
                  </div>
                </RenderCondition>
              </div>
              <RenderCondition condition={tabs === 2}>
                <div className="py-6">
                  <FieldGroup>
                    <div className="grid grid-cols-2 gap-4">
                      <Field>
                        <FieldLabel htmlFor="checkout-7j9-card-name-43j-cep">Cep</FieldLabel>
                        <Input
                          {...register("cep")}
                          type="text"
                          id="checkout-7j9-card-name-43j-cep"
                        />
                        {errors.cep && (
                          <p className="text-xs text-orange-500">{errors.cep.message}</p>
                        )}
                      </Field>
                      <Field>
                        <FieldLabel htmlFor="checkout-7j9-card-name-address">Endereço</FieldLabel>
                        <Input
                          {...register("address")}
                          type="text"
                          id="checkout-7j9-card-name-address"
                        />
                        {errors.address && (
                          <p className="text-xs text-orange-500">{errors.address.message}</p>
                        )}
                      </Field>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <Field>
                        <FieldLabel htmlFor="checkout-7j9-card-name-43j-house-number">
                          Número
                        </FieldLabel>
                        <Input
                          {...register("number")}
                          type="text"
                          id="checkout-7j9-card-name-43j-house-number"
                        />
                        {errors.number && (
                          <p className="text-xs text-orange-500">{errors.number.message}</p>
                        )}
                      </Field>
                      <Field>
                        <FieldLabel htmlFor="checkout-7j9-card-name-neighborhood">
                          Bairro
                        </FieldLabel>
                        <Input
                          {...register("neighborhood")}
                          type="text"
                          id="checkout-7j9-card-name-neighborhood"
                        />
                        {errors.neighborhood && (
                          <p className="text-xs text-orange-500">{errors.neighborhood.message}</p>
                        )}
                      </Field>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <Field>
                        <FieldLabel htmlFor="checkout-7j9-card-name-43j-complement">
                          Complemento (opcional)
                        </FieldLabel>
                        <Input
                          {...register("complement")}
                          type="text"
                          id="checkout-7j9-card-name-43j-complement"
                        />
                      </Field>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <Controller
                        name="deliveryMethod"
                        control={control}
                        render={({ field }) => (
                          <RadioGroup
                            onValueChange={field.onChange}
                            value={field.value}
                            defaultValue="comfortable"
                          >
                            <p>Forma de entrega</p>
                            <div className="flex items-center gap-3">
                              <RadioGroupItem value="default" id="r1" />
                              <Label htmlFor="r1">Em até 13 dias úteis - R$ 34,90</Label>
                            </div>
                            <div className="flex items-center gap-3">
                              <RadioGroupItem value="comfortable" id="r2" />
                              <Label htmlFor="r2">Em até 30 dias úteis - R$ 00,00</Label>
                            </div>
                          </RadioGroup>
                        )}
                      />
                    </div>
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
            </div>

            <div className="border px-3 rounded-md">
              <div className="p-3 border-b flex items-center justify-between">
                <div className="flex gap-3">
                  <div className="bg-primary w-6 h-6 rounded-full flex items-center justify-center">
                    <p className="text-white">3</p>
                  </div>
                  <div>
                    <p className="font-bold text-primary">Pagamento</p>
                  </div>
                </div>
                <RenderCondition condition={tabs !== 3}>
                  <div
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={() => changeTabs(3)}
                  >
                    <FaRegEdit className="text-primary text-lg" />
                    <p className="text-primary text-sm font-bold">Editar</p>
                  </div>
                </RenderCondition>
              </div>
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
                        <Field>
                          <FieldLabel htmlFor="card-number">número do cartão</FieldLabel>
                          <Input
                            {...register("cardNumber")}
                            type="text"
                            id="card-number"
                            placeholder="0000 0000 0000 0000"
                          />
                          {errors.cardNumber && (
                            <p className="text-xs text-orange-500">{errors.cardNumber.message}</p>
                          )}
                        </Field>

                        <Field>
                          <FieldLabel htmlFor="installments">número de parcelas</FieldLabel>
                          <Controller
                            name="installments"
                            control={control}
                            render={({ field }) => (
                              <Select onValueChange={field.onChange} value={field.value}>
                                <SelectTrigger id="installments">
                                  <SelectValue placeholder="Em quantas parcelas deseja pagar?" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="1">1x sem juros</SelectItem>
                                  <SelectItem value="2">2x sem juros</SelectItem>
                                  <SelectItem value="3">3x sem juros</SelectItem>
                                  <SelectItem value="4">4x sem juros</SelectItem>
                                  <SelectItem value="5">5x sem juros</SelectItem>
                                </SelectContent>
                              </Select>
                            )}
                          />
                        </Field>

                        <Field>
                          <FieldLabel htmlFor="card-name">nome impresso no cartão</FieldLabel>
                          <Input
                            {...register("cardName")}
                            type="text"
                            id="card-name"
                            placeholder="Como está no cartão"
                          />
                          {errors.cardName && (
                            <p className="text-xs text-orange-500">{errors.cardName.message}</p>
                          )}
                        </Field>

                        <div className="grid grid-cols-2 gap-4">
                          <Field>
                            <FieldLabel htmlFor="card-month">validade</FieldLabel>
                            <Controller
                              name="cardMonth"
                              control={control}
                              render={({ field }) => (
                                <Select onValueChange={field.onChange} value={field.value}>
                                  <SelectTrigger id="card-month">
                                    <SelectValue placeholder="mês" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    {[...Array(12)].map((_, i) => (
                                      <SelectItem key={i} value={`${i + 1}`}>
                                        {String(i + 1).padStart(2, "0")}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                              )}
                            />
                            {errors.cardMonth && (
                              <p className="text-xs text-orange-500">{errors.cardMonth.message}</p>
                            )}
                          </Field>
                          <Field>
                            <FieldLabel htmlFor="card-year">&nbsp;</FieldLabel>
                            <Controller
                              name="cardYear"
                              control={control}
                              render={({ field }) => (
                                <Select onValueChange={field.onChange} value={field.value}>
                                  <SelectTrigger id="card-year">
                                    <SelectValue placeholder="ano" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    {Array.from({ length: 10 }, (_, i) => (
                                      <SelectItem key={i} value={`${2025 + i}`}>
                                        {2025 + i}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                              )}
                            />
                            {errors.cardYear && (
                              <p className="text-xs text-orange-500">{errors.cardYear.message}</p>
                            )}
                          </Field>
                        </div>

                        <Field>
                          <FieldLabel htmlFor="card-cvv">código de segurança</FieldLabel>
                          <Input
                            {...register("cardCvv")}
                            type="text"
                            id="card-cvv"
                            placeholder="123"
                          />
                          {errors.cardCvv && (
                            <p className="text-xs text-orange-500">{errors.cardCvv.message}</p>
                          )}
                        </Field>

                        <Field>
                          <FieldLabel htmlFor="card-cpf">cpf do titular</FieldLabel>
                          <Input
                            {...register("cardCpf")}
                            type="text"
                            id="card-cpf"
                            placeholder="999.999.999-99"
                          />
                          {errors.cardCpf && (
                            <p className="text-xs text-orange-500">{errors.cardCpf.message}</p>
                          )}
                        </Field>
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
            </div>
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
