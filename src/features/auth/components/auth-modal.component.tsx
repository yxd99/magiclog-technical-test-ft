import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import LoginForm from './login-form';
import SignUpForm from './sign-up-form';

const TYPE_FORM = {
  LOGIN: LoginForm,
  REGISTER: SignUpForm,
};

type TypeForm = keyof typeof TYPE_FORM;

export function AuthModal() {
  const [form, setForm] = useState<TypeForm>('LOGIN');
  const [open, setOpen] = useState(false);

  const handleSetForm = (type: TypeForm) => {
    setForm(type);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const FormComponent = TYPE_FORM[form];

  const MESSAGES = {
    LOGIN: (
      <>
        Please enter your credentials, are you a new user?{' '}
        <a className='underline' href='#' onClick={() => handleSetForm('REGISTER')}>
          Register a new account
        </a>
      </>
    ),
    REGISTER: (
      <>
        Have you an account?{' '}
        <a className='underline' href='#' onClick={() => handleSetForm('LOGIN')}>
          Login
        </a>
      </>
    ),
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button onClick={() => setOpen(true)}>Login</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[625px]'>
        <DialogHeader>
          <DialogTitle>{form}</DialogTitle>
          <DialogDescription>{MESSAGES[form]}</DialogDescription>
        </DialogHeader>
        <FormComponent onCloseModal={handleCloseModal} />
        <DialogFooter>
          <DialogClose asChild>
            <Button type='button' variant='secondary' className='w-full'>
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
