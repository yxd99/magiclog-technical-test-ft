import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

import { LoginForm } from "./login-form";
import { SignUpForm } from "./sign-up-form";

const TYPE_FORM = {
  LOGIN: LoginForm,
  REGISTER: SignUpForm,
};

type TypeForm = keyof typeof TYPE_FORM;

interface AuthModalProps {
  className?: string;
  variant?:
    | "secondary"
    | "destructive"
    | "link"
    | "default"
    | "outline"
    | "ghost"
    | null
    | undefined;
}

export function AuthModal({
  className = "",
  variant = "secondary",
}: AuthModalProps) {
  const [form, setForm] = useState<TypeForm>("LOGIN");
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
        Por favor ingresa tus credenciales, ¿No tienes una cuenta?{" "}
        <Button
          className="underline"
          variant="ghost"
          onClick={() => handleSetForm("REGISTER")}
        >
          Registrarse
        </Button>
      </>
    ),
    REGISTER: (
      <>
        ¿Ya tienes una cuenta?{" "}
        <Button
          className="underline"
          variant="ghost"
          onClick={() => handleSetForm("LOGIN")}
        >
          Iniciar sesión
        </Button>
      </>
    ),
  };

  const TITLES = {
    LOGIN: "Iniciar sesión",
    REGISTER: "Registrarse",
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          className={cn(className)}
          variant={variant}
          onClick={() => setOpen(true)}
        >
          Iniciar sesión
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle>{TITLES[form]}</DialogTitle>
          <DialogDescription>{MESSAGES[form]}</DialogDescription>
        </DialogHeader>
        <FormComponent onCloseModal={handleCloseModal} />
        <DialogFooter>
          <DialogClose asChild>
            <Button className="w-full" type="button" variant="secondary">
              Cerrar
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
