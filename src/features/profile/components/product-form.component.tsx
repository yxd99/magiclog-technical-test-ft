import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { CreateProduct, createProductSchema } from "../schemas/create-product.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ProductFormProps {
  className?: string;
  onHandleSubmit: (values: CreateProduct) => Promise<void>;
  initialValues: CreateProduct;
  isPending: boolean;
}

export function ProductForm({ className, onHandleSubmit, initialValues, isPending }: ProductFormProps) {
  
  const form = useForm<CreateProduct>({
    resolver: zodResolver(createProductSchema),
    defaultValues: initialValues,
  });

  const handleSubmit = async (values: CreateProduct) => {
    await onHandleSubmit(values);
  }

  return (<Form {...form}>
    <form className={cn(className)} onSubmit={form.handleSubmit(handleSubmit)}>
    <FormField
        control={form.control}
        name='name'
        render={({ field }) => (
          <FormItem>
            <FormLabel>Nombre de Producto</FormLabel>
            <FormControl>
              <Input placeholder='Producto' type='text' {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name='sku'
        render={({ field }) => (
          <FormItem>
            <FormLabel>SKU</FormLabel>
            <FormControl>
              <Input placeholder='123abc' type='text' {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name='price'
        render={({ field }) => (
          <FormItem>
            <FormLabel>Precio</FormLabel>
            <FormControl>
              <Input placeholder='Precio' type='number' {...field} /> 
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name='stock'
        render={({ field }) => (
          <FormItem>
            <FormLabel>Stock</FormLabel>
            <FormControl>
              <Input placeholder='Stock' type='number' {...field} /> 
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <Button className="w-full mt-4" disabled={isPending}>
        Guardar
      </Button>
    </form>
  </Form>)
}
