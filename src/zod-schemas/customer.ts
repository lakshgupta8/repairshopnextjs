import { createInsertSchema, createSelectSchema } from 'drizzle-zod';
import { customers } from '@/db/schema';
import { z } from 'zod';

export const insertCustomerSchema = createInsertSchema(customers, {
    firstname: (schema) => schema.min(1, 'First name is required'),
    lastname: (schema) => schema.min(1, 'Last name is required'),
    address1: (schema) => schema.min(5, 'Address is required'),
    city: (schema) => schema.min(1, 'City is required'),
    state: (schema) => schema.length(2, 'State must be 2 characters'),
    email: (schema) => schema.min(1, 'Email is required').pipe(z.email('Invalid email address')),
    zip: (schema) => schema.min(1, 'Zip code is required').regex(/^\d{5}(-\d{4})?$/, "Invalid zip code. Use 5 digits or 5+4 digits format (e.g., 12345 or 12345-6789)"),
    phone: (schema) => schema.min(1, 'Phone number is required').regex(/^\d{10}$/, "Invalid phone number. Use 10 digits format (e.g., 1234567890)"),
});

export const selectCustomerSchema = createSelectSchema(customers);

export type insertCustomerSchemaType = z.infer<typeof insertCustomerSchema>;
export type selectCustomerSchemaType = z.infer<typeof selectCustomerSchema>;
