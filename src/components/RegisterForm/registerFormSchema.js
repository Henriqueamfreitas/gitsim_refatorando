import { z } from "zod"

export const registerFormSchema = z.object({
   name: z.string().nonempty("Name is required"),
   email: z.string().nonempty("Email is required").email("Provide a valid email"),
   password: z
      .string()
      .nonempty("Password is required")
      .min(8, "At least eight characters required.")
      .regex(/(?=.*?[A-Z])/, "At least one uppercase letter required")
      .regex(/(?=.*?[a-z])/, "At least one lowercase letter required")
      .regex(/(?=.*?[0-9])/, "At least one number required."),
   confirmPassword: z.string().nonempty("Confirm password is required"),
   bio: z.string().nonempty("Bio is required"),
   contact: z.string().nonempty("Contact is required"),
   course: z.string().nonempty("Course is required"),
}).refine(({password, confirmPassword}) => password === confirmPassword, {
   message: "Passwords don't match.",
   path: ["confirmPassword"],
})
