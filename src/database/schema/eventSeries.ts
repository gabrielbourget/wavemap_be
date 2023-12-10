import { relations } from "drizzle-orm";
import {
  text, timestamp, pgTable, uuid, index, uniqueIndex,
} from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";

import { EventLinkDestinations, EventTicketLinkDestinations, EventsEventSeries, Users } from "./index.ts";

export const EventSeries = pgTable('EventSeries', {
  ID: uuid('ID').primaryKey(),
  name: text('name').notNull(),
  description: text('description'),
  imageURL: text('imageURL'),
  eventSeriesTypeID: uuid('eventSeriesTypeID').references(() => EventSeriesTypes.ID),
  createdOn: timestamp('createdOn', { withTimezone: true }),
  createdByID: uuid('createdByID').references(() => Users.ID),
  lastModifiedOn: timestamp('lastModifiedOn', { withTimezone: true }),
  lastModifiedByID: uuid('lastModifiedByID').references(() => Users.ID)
}, (EventSeries) => {
  return {
    IDIndex: uniqueIndex("IDIndex").on(EventSeries.ID),
    nameIndex: index("nameIndex").on(EventSeries.name)
  };
});

export const insertEventSeriesSchema = createInsertSchema(EventSeries);
export const selectEventSeriesSchema = createSelectSchema(EventSeries);

export const eventSeriesRelations = relations(EventSeries, ({ one, many }) => ({
  eventSeriesType: one(EventSeriesTypes, {
    fields: [EventSeries.eventSeriesTypeID],
    references: [EventSeriesTypes.ID]
  }),
  events: many(EventsEventSeries),
  images: many(EventSeriesImages),
  links:  many(EventSeriesLinks),
}));

export const EventSeriesLinks = pgTable('EventSeriesLinks', {
  ID: uuid('ID').primaryKey(),
  eventSeriesID: uuid('eventSeriesID').references(() => EventSeries.ID),
  eventLinkDestinationID: uuid('eventLinkDestinationID').references(() => EventLinkDestinations.ID),
  linkURL: text('linkURL').notNull()
});

export const insertEventSeriesLinksSchema = createInsertSchema(EventSeriesLinks);
export const selectEventSeriesLinksSchema = createSelectSchema(EventSeriesLinks);

export const eventSeriesLinksRelations = relations(EventSeriesLinks, ({ one }) => ({
  eventSeries: one(EventSeries, {
    fields: [EventSeriesLinks.eventSeriesID],
    references: [EventSeries.ID]
  }),
  eventLinkDestinations: one(EventLinkDestinations, {
    fields: [EventSeriesLinks.eventLinkDestinationID],
    references: [EventLinkDestinations.ID]
  })
}));

export const EventSeriesTicketLinks = pgTable('EventSeriesTicketLinks', {
  ID: uuid('ID').primaryKey(),
  eventSeriesID: uuid('eventSeriesID').references(() => EventSeries.ID),
  eventSeriesTicketLinkDestinationID: uuid ('eventSeriesTicketLinkDestinationID')
    .references(() => EventTicketLinkDestinations.ID),
  linkURL: text('linkURL').notNull()
});

export const insertEventSeriesTicketLinksSchema = createInsertSchema(EventSeriesTicketLinks);
export const selectEventSeriesTicketLinksSchema = createSelectSchema(EventSeriesTicketLinks);

export const eventSeriesTicketLinksRelations = relations(EventSeriesTicketLinks, ({ one }) => ({
  eventSeries: one(EventSeries, {
    fields: [EventSeriesTicketLinks.eventSeriesID],
    references: [EventSeries.ID]
  }),
  eventSeriesTicketLinkDestination: one(EventTicketLinkDestinations, {
    fields: [EventSeriesTicketLinks.eventSeriesTicketLinkDestinationID],
    references: [EventTicketLinkDestinations.ID]
  })
}));

export const EventSeriesTypes = pgTable('EventSeriesTypes', {
  ID: uuid('ID').primaryKey(),
  name: text('name').notNull()
});

export const insertEventSeriesTypesSchema = createInsertSchema(EventSeriesTypes);
export const selectEventSeriesTypesSchema = createSelectSchema(EventSeriesTypes);

export const EventSeriesImages = pgTable('EventSeriesImages', {
  ID: uuid('ID').primaryKey(),
  eventSeriesID: uuid('eventSeriesID').references(() => EventSeries.ID),
  imageURL: text('imageURL').notNull()
});

export const insertEventSeriesImagesSchema = createInsertSchema(EventSeriesImages);
export const selectEventSeriesImagesSchema = createSelectSchema(EventSeriesImages);

export const eventSeriesImagesRelations = relations(EventSeriesImages, ({ one }) => ({
  eventSeries: one(EventSeries, {
    fields: [EventSeriesImages.eventSeriesID],
    references: [EventSeries.ID]
  })
}));
