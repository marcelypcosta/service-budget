import { StatusEnum } from "@/enum/budget";
import * as z from "zod";

const Service = z.object({
  title: z.string().min(1, "O título é obrigatório"),
  description: z.string().min(1, "A descrição é obrigatória"),
  price: z
    .number()
    .int()
    .positive("O preço deve ser um número inteiro positivo"),
  quantity: z
    .number()
    .int()
    .min(1, "Deve existir ao menos uma unidade")
    .positive("A quantidade deve ser um número inteiro positivo"),
});

const Budget = z.object({
  title: z.string().min(1, "O título é obrigatório"),
  client: z.string().min(1, "O cliente é obrigatório"),
  status: z.enum([
    StatusEnum.DRAFT,
    StatusEnum.APPROVED,
    StatusEnum.SUBMITTED,
    StatusEnum.REJECTED,
  ]),
  services: z.array(Service),
  discountPct: z
    .number()
    .int()
    .min(0, "O percentual de desconto deve ser um número inteiro positivo")
    .max(100, "O percentual de desconto não pode exceder 100%")
    .optional(),
});
