import { createInsertSchema, createSelectSchema } from 'drizzle-zod';
import { customers } from '@/db/schema';

export const insertCustomerSchema = createInsertSchema(customers, {
    firstname: (schema) => schema.firstname.min(1, 'First name is required'),
    lastname: (schema) => schema.lastname.min(1, 'Last name is required'),
    address1: (schema) => schema.address1.min(5, 'Address is required'),
    city: (schema) => schema.city.min(1, 'City is required'),
    state: (schema) => schema.state.length(2, 'State must be 2 characters'),
    email: (schema) => schema.email.email('Invalid email address').min(1, 'Email is required'),
    zip: (schema) => schema.zip.regex(/^\d{5}(-\d{4})?$/, "Invalid zip code. Use 5 digits or 5+4 digits format (e.g., 12345 or 12345-6789)").min(1, 'Zip code is required'),
    phone: (schema) => schema.phone.regex(/^\d{10}$/, "Invalid phone number. Use 10 digits format (e.g., 1234567890)").min(1, 'Phone number is required'),
});

export const selectCustomerSchema = createSelectSchema(customers);

export type insertCustomerSchemaType = typeof insertCustomerSchema._type;
export type selectCustomerSchemaType = typeof selectCustomerSchema._type;