import { pgTable, serial, text, timestamp, integer, boolean, varchar} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

export const customers = pgTable("customers",{
    id:serial("id").primaryKey(),
    firstname:varchar("firstname",{length:100}).notNull(),
    lastname:varchar("lastname",{length:100}).notNull(),
    email:varchar("email",{length:255}).notNull().unique(),
    phone:varchar("phone",{length:20}).notNull(),
    address1:text("address1").notNull(),
    address2:text("address2"),
    city:varchar("city",{length:100}).notNull(),
    state:varchar("state",{length:100}).notNull(),
    zip:varchar("zip",{length:10}).notNull(),
    notes:text("notes"),
    active:boolean("active").default(true).notNull(),
    createdAt:timestamp("created_at").defaultNow(),
    updatedAt:timestamp("updated_at").defaultNow().$onUpdate(() => new Date())
})

export const tickets = pgTable("tickets",{
    id:serial("id").primaryKey(),
    customerId:integer("customer_id").notNull().references(() => customers.id),
    title:varchar("title",{length:255}).notNull(),
    description:text("description"),
    completed:boolean("completed").default(false).notNull(),
    technician:varchar("technician",{length:100}).default("Unassigned").notNull(),
    createdAt:timestamp("created_at").defaultNow(),
    updatedAt:timestamp("updated_at").defaultNow().$onUpdate(() => new Date())
})

export const customersRelations = relations(customers,({ many }) => ({
    tickets: many(tickets)
}))

export const ticketsRelations = relations(tickets,({ one }) => ({
    customer: one(customers,{fields:[tickets.customerId],references:[customers.id]})
}))