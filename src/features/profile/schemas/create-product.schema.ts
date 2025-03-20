import { z } from "zod";

export const createProductSchema = z.object({
  name: z.string().min(2),
  sku: z.string().min(2),
  stock: z.coerce.number().min(1),
  price: z.coerce.number().min(1),
});

export type CreateProduct = z.infer<typeof createProductSchema>;
