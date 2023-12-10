import { relations } from "drizzle-orm";
import { text, pgTable, uuid } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";

export const Cities = pgTable('Cities', {
  ID: uuid('ID').primaryKey(),
  name: text('name').notNull(),
  countryID: uuid('countryID').references(() => Countries.ID)
});

export const insertCitiesSchema = createInsertSchema(Cities);
export const selectCitiesSchema = createSelectSchema(Cities);

export const citiesRelations = relations(Cities, ({ one }) => ({
  country: one(Countries, {
    fields: [Cities.countryID],
    references: [Countries.ID]
  })
}));

export const Countries = pgTable('Countries', {
  ID: uuid('ID').primaryKey(),
  name: text('name').notNull()
});

export const insertCountriesSchema = createInsertSchema(Countries);
export const selectCountriesSchema = createSelectSchema(Countries);

export const Roles = pgTable('Roles', {
  ID: uuid('ID').primaryKey(),
  name: text('name').notNull()
});

export const insertRolesSchema = createInsertSchema(Roles);
export const selectRolesSchema = createSelectSchema(Roles);
