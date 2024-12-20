import * as z from "zod";

export const formSchema = z.object({
  parentName: z.string().min(2, "Parent name must be at least 2 characters"),
  childName: z.string().min(2, "Child name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  childAge: z.string(),
  message: z.string().optional(),
});