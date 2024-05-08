import { z } from "zod"

export const loginFormSchema = z.object({
   email: z.string().nonempty("Email is required").email("Provide a valid email"),
   password: z
      .string()
      .nonempty("Password is required")
      .min(8, "At least eight characters required.")
      .regex(/(?=.*?[A-Z])/, "At least one uppercase letter required")
      .regex(/(?=.*?[a-z])/, "At least one lowercase letter required")
      .regex(/(?=.*?[0-9])/, "At least one number required."),
})
