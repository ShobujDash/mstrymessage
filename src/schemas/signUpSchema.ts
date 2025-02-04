import { z } from "zod";

export const usernameValidation = z
  .string()
  .min(2, "Username must be atlest 2 charecters")
  .max(20, "User must be no more than 20 characters")
  .regex(/^[a-zA-Z0-9]+$/, "Username must not contain special character");

export const signUpSchema = z.object({
  username: usernameValidation,
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "password must be at least 5 charcters" }),
});
