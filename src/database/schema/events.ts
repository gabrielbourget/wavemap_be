import { relations } from "drizzle-orm";
import {
  text, timestamp, pgTable, uuid, boolean, index, uniqueIndex,
} from "drizzle-orm/pg-core";
import { ArtistsEvents, Cities, Countries, EventsVenues, Users } from "./index.ts";

export const Events = pgTable('Events', {
  ID: uuid('ID').primaryKey(),
  name: text('name').notNull(),
  eventTypeID: uuid('eventTypeID').references(() => EventTypes.ID),
  cancelled: boolean('cancelled').default(false).notNull(),
  description: text('description'),
  imageURL: text('imageURL'),
  startDateTime: timestamp('startDateTime', { withTimezone: true }),
  endDateTime: timestamp('endDateTime', { withTimezone: true }),
  startTimeProvided: boolean('startTimeProvided').notNull(),
  endTimeProvided: boolean('endTimeProvided').notNull(),
  createdOn: timestamp('createdOn', { withTimezone: true }),
  createdByID: uuid('createdByID').references(() => Users.ID),
  lastModifiedOn: timestamp('lastModifiedOn', { withTimezone: true }),
  lastModifiedByID: uuid('lastModifiedByID').references(() => Users.ID)
}, (Events) => {
  return {
    IDIndex: uniqueIndex("IDIndex").on(Events.ID),
    nameIndex: index("nameIndex").on(Events.name)
  };
});

export const eventsRelations = relations(Events, ({ one, many }) => ({
  eventType: one(EventTypes, {
    fields: [Events.eventTypeID],
    references: [EventTypes.ID]
  }),
  artists: many(ArtistsEvents),
  venues: many(EventsVenues),
  links: many(EventLinks),
  ticketLinks: many(EventTicketLinks),
  images: many(EventImages),
  physicalLocations: many(PhysicalEventLocations),
  digitalLocations: many(DigitalEventLocations)
}));

export const EventLinks = pgTable('EventLinks', {
  ID: uuid('ID').primaryKey(),
  eventID: uuid('eventID').references(() => Events.ID),
  linkDestinationID: uuid('linkDestinationID').references(() => EventLinkDestinations.ID),
  linkURL: text('linkURL').notNull()
});

export const eventLinksRelations = relations(EventLinks, ({ one }) => ({
  event: one(Events, {
    fields: [EventLinks.eventID],
    references: [Events.ID]
  }),
  linkDestination: one(EventLinkDestinations, {
    fields: [EventLinks.linkDestinationID],
    references: [EventLinkDestinations.ID]
  })
}));

export const EventTicketLinks = pgTable('EventTicketLinks', {
  ID: uuid('ID').primaryKey(),
  eventID: uuid('eventID').references(() => Events.ID),
  linkDestinationID: uuid('linkDestinationID').references(() => EventTicketLinkDestinations.ID),
  linkURL: text('linkURL').notNull()
});

export const eventTicketLinksRelations = relations(EventTicketLinks, ({ one, many }) => ({
  events: one(Events, {
    fields: [EventTicketLinks.eventID],
    references: [Events.ID]
  }),
  linkDestination: one(EventTicketLinkDestinations, {
    fields: [EventTicketLinks.linkDestinationID],
    references: [EventTicketLinkDestinations.ID]
  })
}));

export const EventImages = pgTable('EventImages', {
  ID: uuid('ID').primaryKey(),
  eventID: uuid('eventID').references(() => Events.ID),
  imageURL: text('imageURL').notNull()
});

export const eventImagesRelations = relations(EventImages, ({ one }) => ({
  event: one(Events, {
    fields: [EventImages.eventID],
    references: [Events.ID]
  })
}));

export const PhysicalEventLocations = pgTable('PhysicalEventLocations', {
  ID: uuid('ID').primaryKey(),
  eventID: uuid('eventID').references(() => Events.ID),
  cityID: uuid('cityID').references(() => Cities.ID),
  countryID: uuid('countryId').references(() => Countries.ID)
});

export const physicalEventLocationsRelations = relations(PhysicalEventLocations, ({ one }) => ({
  event: one(Events, {
    fields: [PhysicalEventLocations.eventID],
    references: [Events.ID],
  }),
  city: one(Cities, {
    fields: [PhysicalEventLocations.cityID],
    references: [Cities.ID]
  }),
  country: one(Countries, {
    fields: [PhysicalEventLocations.countryID],
    references: [Countries.ID]
  })
}));

export const DigitalEventLocations = pgTable('DigitalEventLocations', {
  ID: uuid('ID').primaryKey(),
  eventID: uuid('eventID').references(() => Events.ID),
  linkDestinationID: uuid('linkDestinationID').references(() => DigitalEventLinkDestinations.ID),
  linkURL: text('linkURL').notNull()
});

export const digitalEventLocationsRelations = relations(DigitalEventLocations, ({ one }) => ({
  event: one(Events, {
    fields: [DigitalEventLocations.eventID],
    references: [Events.ID]
  }),
  linkDestination: one(DigitalEventLinkDestinations, {
    fields: [DigitalEventLocations.linkDestinationID],
    references: [DigitalEventLinkDestinations.ID]
  })
}));

export const DigitalEventLinkDestinations = pgTable('DigitalEventLinkDestinations', {
  ID: uuid('ID').primaryKey(),
  name: text('name').notNull()
});

export const EventTypes = pgTable('EventTypes', {
  ID: uuid('ID').primaryKey(),
  name: text('name').notNull()
});

export const EventLinkDestinations = pgTable('EventLinkDestinations', {
  ID: uuid('ID').primaryKey(),
  name: text('name').notNull()
});

export const EventTicketLinkDestinations = pgTable('EventTicketLinkDestinations', {
  ID: uuid('ID').primaryKey(),
  name: text('name').notNull()
});
