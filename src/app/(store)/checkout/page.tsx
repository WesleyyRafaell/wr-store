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

const Checkout = () => {
  const user = getUser();
  return (
    <div className="pt-7">
      <h1 className="text-lg font-bold text-primary">Finalizar a compra</h1>
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
              <div className="flex items-center gap-2 cursor-pointer">
                <FaRegEdit className="text-primary text-lg" />
                <p className="text-primary text-sm font-bold">Editar</p>
              </div>
            </div>
            <div className="py-6">
              <form action="">
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
                      <Input type="text" id="checkout-7j9-card-name-43j-name" />
                    </Field>
                    <Field>
                      <FieldLabel htmlFor="checkout-7j9-card-name-lastname">Sobrenome</FieldLabel>
                      <Input type="text" id="checkout-7j9-card-name-lastname" />
                    </Field>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <Field>
                      <FieldLabel htmlFor="checkout-7j9-card-name-43j-cpf">Cpf</FieldLabel>
                      <Input type="text" id="checkout-7j9-card-name-43j-cpf" />
                    </Field>
                    <Field>
                      <FieldLabel htmlFor="checkout-7j9-card-name-cell">Celular</FieldLabel>
                      <Input type="text" id="checkout-7j9-card-name-cell" />
                    </Field>
                  </div>
                  <div>
                    <Button className="w-full cursor-pointer">Continuar para endereço</Button>
                  </div>
                </FieldGroup>
              </form>
            </div>
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
              <div className="flex items-center gap-2 cursor-pointer">
                <FaRegEdit className="text-primary text-lg" />
                <p className="text-primary text-sm font-bold">Editar</p>
              </div>
            </div>
            <div className="py-6">
              <form action="">
                <FieldGroup>
                  <div className="grid grid-cols-2 gap-4">
                    <Field>
                      <FieldLabel htmlFor="checkout-7j9-card-name-43j-cep">Cep</FieldLabel>
                      <Input type="text" id="checkout-7j9-card-name-43j-cep" />
                    </Field>
                    <Field>
                      <FieldLabel htmlFor="checkout-7j9-card-name-address">Endereço</FieldLabel>
                      <Input type="text" id="checkout-7j9-card-name-address" />
                    </Field>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <Field>
                      <FieldLabel htmlFor="checkout-7j9-card-name-43j-house-number">
                        Número
                      </FieldLabel>
                      <Input type="text" id="checkout-7j9-card-name-43j-house-number" />
                    </Field>
                    <Field>
                      <FieldLabel htmlFor="checkout-7j9-card-name-neighborhood">Bairro</FieldLabel>
                      <Input type="text" id="checkout-7j9-card-name-neighborhood" />
                    </Field>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <Field>
                      <FieldLabel htmlFor="checkout-7j9-card-name-43j-complement">
                        Complemento
                      </FieldLabel>
                      <Input type="text" id="checkout-7j9-card-name-43j-complement" />
                    </Field>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <RadioGroup defaultValue="comfortable">
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
                  </div>
                  <div>
                    <Button className="w-full cursor-pointer">Continuar para pagamento</Button>
                  </div>
                </FieldGroup>
              </form>
            </div>
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
              <div className="flex items-center gap-2 cursor-pointer">
                <FaRegEdit className="text-primary text-lg" />
                <p className="text-primary text-sm font-bold">Editar</p>
              </div>
            </div>
            <div className="py-6">
              <div className="grid grid-cols-2 gap-4">
                <RadioGroup defaultValue="pix">
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
              </div>
              <div className="mt-6 border rounded-md p-2">
                {/* <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="card-number">número do cartão</FieldLabel>
                    <Input type="text" id="card-number" placeholder="0000 0000 0000 0000" />
                  </Field>

                  <Field>
                    <FieldLabel htmlFor="installments">número de parcelas</FieldLabel>
                    <Select>
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
                  </Field>

                  <Field>
                    <FieldLabel htmlFor="card-name">nome impresso no cartão</FieldLabel>
                    <Input type="text" id="card-name" placeholder="Como está no cartão" />
                  </Field>

                  <div className="grid grid-cols-2 gap-4">
                    <Field>
                      <FieldLabel htmlFor="card-month">validade</FieldLabel>
                      <Select>
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
                    </Field>
                    <Field>
                      <FieldLabel htmlFor="card-year">&nbsp;</FieldLabel>
                      <Select>
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
                    </Field>
                  </div>

                  <Field>
                    <FieldLabel htmlFor="card-cvv">código de segurança</FieldLabel>
                    <Input type="text" id="card-cvv" placeholder="123" />
                  </Field>

                  <Field>
                    <FieldLabel htmlFor="card-cpf">cpf do titular</FieldLabel>
                    <Input type="text" id="card-cpf" placeholder="999.999.999-99" />
                  </Field>
                </FieldGroup> */}
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
              </div>
            </div>
          </div>
        </div>
        <div className="w-2/5">oi</div>
      </div>
    </div>
  );
};

export default Checkout;
