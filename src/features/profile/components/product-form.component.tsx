import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

import {
  type CreateProduct,
  createProductSchema,
} from "../schemas/create-product.schema";

interface ProductFormProps {
  className?: string;
  onHandleSubmit: (values: CreateProduct) => void;
  initialValues: CreateProduct;
  isPending: boolean;
}

export function ProductForm({
  className,
  onHandleSubmit,
  initialValues,
  isPending,
}: ProductFormProps) {
  const form = useForm<CreateProduct>({
    resolver: zodResolver(createProductSchema),
    defaultValues: initialValues,
  });

  const handleSubmit = (values: CreateProduct) => {
    onHandleSubmit(values);
  };

  return (
    <Form {...form}>
      <form
        className={cn(className)}
        onSubmit={form.handleSubmit(handleSubmit)}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre de Producto</FormLabel>
              <FormControl>
                <Input placeholder="Producto" type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="sku"
          render={({ field }) => (
            <FormItem>
              <FormLabel>SKU</FormLabel>
              <FormControl>
                <Input placeholder="123abc" type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Precio</FormLabel>
              <FormControl>
                <Input placeholder="Precio" type="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="stock"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Stock</FormLabel>
              <FormControl>
                <Input placeholder="Stock" type="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="mt-4 w-full" disabled={isPending}>
          Guardar
        </Button>
      </form>
    </Form>
  );
}
