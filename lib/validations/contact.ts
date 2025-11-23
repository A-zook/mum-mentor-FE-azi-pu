import { z } from "zod";

export const contactSchema = z.object({
  firstName: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name is too long"),
  lastName: z.string().max(50, "Last name is too long").optional(),
  email: z.string().email("Please enter a valid email address").toLowerCase(),
  phone: z
    .string()
    .regex(
      /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/,
      "Invalid phone number"
    )
    .optional()
    .or(z.literal("")),
  subject: z
    .string()
    .min(3, "Subject must be at least 3 characters")
    .max(100, "Subject is too long"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message is too long"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
