import { z } from "zod";

export const signUpSchema = z.object({ 
  name: z.string().min(2).max(25),
  email: z.string().email(),
  password: z.string().min(8).max(25),
  confirmPassword: z.string().min(8).max(25),
});

export type SignUp = z.infer<typeof signUpSchema>;