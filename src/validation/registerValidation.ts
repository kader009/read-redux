import { z } from 'zod';

export const registrationSchema = z.object({
  name: z.string().min(10, "Name must be at least 10 characters"),
  email: z.string().email("Invalid email format"),
  password: z.string()
    .min(8, "Password must be at least 8 characters")
});
