import { relations } from "drizzle-orm";
import {
  text, timestamp, pgTable, uuid, integer, index, uniqueIndex, real,
} from "drizzle-orm/pg-core";
import { Cities, Countries, EventsVenues, Users } from "./index.ts";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";

export const Venues = pgTable('Venues', {
  ID: uuid('ID').primaryKey(),
  name: text('name').notNull(),
  description: text('description'),
  imageURL: text('imageURL'),
  capacity: integer('capacity'),
  venueStatusID: uuid('venueStatusID').references(() => VenueStatuses.ID),
  latitude: real('latitude').notNull(),
  longitude: real('longitude').notNull(),
  address: text('address').notNull(),
  phoneNumber: text('phoneNumber'),
  email: text('email'),
  createdOn: timestamp('createdOn', { withTimezone: true }),
  createdByID: uuid('createdByID').references(() => Users.ID),
  lastModifiedOn: timestamp('lastModifiedOn', { withTimezone: true }),
  lastModifiedByID: uuid('lastModifiedByID').references(() => Users.ID)
}, (Venues) => {
  return {
    IDIndex: uniqueIndex("IDIndex").on(Venues.ID),
    nameIndex: index("nameIndex").on(Venues.name)
  };
});

export const insertVenuesSchema = createInsertSchema(Venues);
export const selectVenuesSchema = createSelectSchema(Venues);

export const venuesRelations = relations(Venues, ({ one, many }) => ({
  events: many(EventsVenues),
  links: many(VenueLinks),
  venueStatus: one(VenueStatuses, {
    fields: [Venues.venueStatusID],
    references: [VenueStatuses.ID]
  })
}));

export const VenueLinks = pgTable('VenueLinks', {
  ID: uuid('ID').primaryKey(),
  venueID: uuid('venueId').references(() => Venues.ID),
  linkDestinationID: uuid('linkDestinationID').references(() => VenueLinkDestinations.ID),
  linkURL: text('linkURL')
});

export const insertVenueLinksSchema = createInsertSchema(VenueLinks);
export const selectVenueLinksSchema = createSelectSchema(VenueLinks);

export const venuesLinksRelations = relations(VenueLinks, ({ one }) => ({
  venue: one(Venues, {
    fields: [VenueLinks.venueID],
    references: [Venues.ID]
  }),
  linkDestination: one(VenueLinkDestinations, {
    fields: [VenueLinks.linkDestinationID],
    references: [VenueLinkDestinations.ID]
  })
}));

export const VenueLocations = pgTable('VenueLocations', {
  ID: uuid('ID').primaryKey(),
  venueID: uuid('venueID').references(() => Venues.ID),
  cityID: uuid('cityID').references(() => Cities.ID),
  countryID: uuid('countryId').references(() => Countries.ID)
});

export const insertVenueLocationsSchema = createInsertSchema(VenueLocations);
export const selectVenueLocationsSchema = createSelectSchema(VenueLocations);

export const venueLocationsRelations = relations(VenueLocations, ({ one }) => ({
  venue: one(Venues, {
    fields: [VenueLocations.venueID],
    references: [Venues.ID]
  }),
  city: one(Cities, {
    fields: [VenueLocations.cityID],
    references: [Cities.ID]
  }),
  country: one(Countries, {
    fields: [VenueLocations.countryID],
    references: [Countries.ID]
  })
}));

export const VenueStatuses = pgTable('VenueStatuses', {
  ID: uuid('ID').primaryKey(),
  name: text('name').notNull()
});

export const insertVenueStatusesSchema = createInsertSchema(VenueStatuses);
export const selectVenueStatusesSchema = createSelectSchema(VenueStatuses);

export const VenueLinkDestinations = pgTable('VenueLinkDestinations', {
  ID: uuid('ID').primaryKey(),
  name: text('name').notNull()
});

export const insertVenueLinkDestinationsSchema = createInsertSchema(VenueLinkDestinations);
export const selectVenueLinkDestinationsSchema = createSelectSchema(VenueLinkDestinations);

export const VenueImages = pgTable('VenueImages', {
  ID: uuid('ID').primaryKey(),
  venueID: uuid('venueID').references(() => Venues.ID),
  imageURL: text('imageURL').notNull()
});

export const insertVenueImagesSchema = createInsertSchema(VenueImages);
export const selectVenueImagesSchema = createSelectSchema(VenueImages);

export const venueImagesRelations = relations(VenueImages, ({ one }) => ({
  venue: one(Venues, {
    fields: [VenueImages.venueID],
    references: [Venues.ID]
  })
}));
