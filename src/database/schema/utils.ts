import { relations } from "drizzle-orm";
import { text, pgTable, uuid } from "drizzle-orm/pg-core";

export const Cities = pgTable('Cities', {
  ID: uuid('ID').primaryKey(),
  name: text('name').notNull(),
  countryID: uuid('countryID').references(() => Countries.ID)
});

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

export const Roles = pgTable('Roles', {
  ID: uuid('ID').primaryKey(),
  name: text('name').notNull()
});
