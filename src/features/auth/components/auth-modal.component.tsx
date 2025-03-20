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
import { cn } from '@/lib/utils';

const TYPE_FORM = {
  LOGIN: LoginForm,
  REGISTER: SignUpForm,
};

type TypeForm = keyof typeof TYPE_FORM;

interface AuthModalProps {
  className?: string;
  variant?: "secondary" | "destructive" | "link" | "default" | "outline" | "ghost" | null | undefined;
}

export function AuthModal({ className = '', variant = 'secondary' }: AuthModalProps) {
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
        Por favor ingresa tus credenciales, ¿No tienes una cuenta?{' '}
        <a className='underline' href='#' onClick={() => handleSetForm('REGISTER')}>
          Registrarse
        </a>
      </>
    ),
    REGISTER: (
      <>
        ¿Ya tienes una cuenta?{' '}
        <a className='underline' href='#' onClick={() => handleSetForm('LOGIN')}>
          Iniciar sesión
        </a>
      </>
    ),
  };

  const TITLES = {
    LOGIN: 'Iniciar sesión',
    REGISTER: 'Registrarse',
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button onClick={() => setOpen(true)} variant={variant} className={cn(className)}>Iniciar sesión</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[625px]'>
        <DialogHeader>
          <DialogTitle>{TITLES[form]}</DialogTitle>
          <DialogDescription>{MESSAGES[form]}</DialogDescription>
        </DialogHeader>
        <FormComponent onCloseModal={handleCloseModal} />
        <DialogFooter>
          <DialogClose asChild>
            <Button type='button' variant='secondary' className='w-full'>
              Cerrar
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
