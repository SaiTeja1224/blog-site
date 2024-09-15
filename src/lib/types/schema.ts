import { z } from "zod";

export const contactFormSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(5, "Please enter at least 5 characters"),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
