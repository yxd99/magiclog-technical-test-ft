import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { LogIn } from 'lucide-react';
import { SignUp, signUpSchema } from '../schemas/sign-up.schema';

interface UserFormProps {
  className?: string;
  initialValues?: {
    email: string;
    password: string;
    confirmPassword: string;
    name: string;
  };
}

export default function SignUpForm({
  className = '',
  initialValues,
}: UserFormProps) {
  const form = useForm<SignUp>({
    resolver: zodResolver(signUpSchema),
    defaultValues: initialValues,
  });

  const handleSubmit = async (values: SignUp) => {
    console.log(values)
  };

  return (
    <Form {...form}>
      <form
        className={cn(className)}
        onSubmit={form.handleSubmit(handleSubmit)}
      >
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder='John Doe' type='text' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder='john@doe.com' type='email' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder='********' type='password' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='confirmPassword'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input placeholder='********' type='password' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className='w-full mt-4' type='submit'>
          <LogIn />
          Sign Up
        </Button>
      </form>
    </Form>
  );
}