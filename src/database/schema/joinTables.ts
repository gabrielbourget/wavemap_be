import { relations } from "drizzle-orm";
import {
  text, timestamp, pgTable, uuid, boolean, integer,
  index, uniqueIndex, real,
} from "drizzle-orm/pg-core";
import { Artists, EventSeries, Events, Roles, Users, Venues } from ".";

export const ArtistsEvents = pgTable('ArtistsEvents', {
  ID: uuid('ID').primaryKey(),
  artistID: uuid('artistID').references(() => Artists.ID),
  eventID: uuid('eventID').references(() => Events.ID)
});

export const artistEventsRelations = relations(ArtistsEvents, ({ one }) => ({
  artist: one(Artists, {
    fields: [ArtistsEvents.artistID],
    references: [Artists.ID]
  }),
  event: one(Events, {
    fields: [ArtistsEvents.eventID],
    references: [Events.ID]
  })
}));

export const EventsVenues = pgTable('EventsVenues', {
  ID: uuid('ID').primaryKey(),
  eventID: uuid('eventID').references(() => Events.ID),
  venueID: uuid('venueId').references(() => Venues.ID)
});

export const eventVenuesRelations = relations(EventsVenues, ({ one }) => ({
  event: one(Events, {
    fields: [EventsVenues.eventID],
    references: [Events.ID],
  }),
  venue: one(Venues, {
    fields: [EventsVenues.venueID],
    references: [Venues.ID]
  })
}));

export const EventsEventSeries = pgTable('EventsEventSeries', {
  ID: uuid('ID').primaryKey(),
  eventID: uuid('eventID').references(() => Events.ID),
  eventSeriesID: uuid('eventSeriesID').references(() => EventSeries.ID),
});

export const eventsEventSeriesRelations = relations(EventsEventSeries, ({ one }) => ({
  event: one(Events, {
    fields: [EventsEventSeries.eventID],
    references: [Events.ID]
  }),
  eventSeries: one(EventSeries, {
    fields: [EventsEventSeries.eventSeriesID],
    references: [EventSeries.ID]
  })
}));

export const UsersRoles = pgTable('UsersRoles', {
  ID: uuid('ID').primaryKey(),
  userID: uuid('userID').references(() => Users.ID),
  roleID: uuid('roleID').references(() => Roles.ID)
});

export const usersRolesRelations = relations(UsersRoles, ({ one }) => ({
  user: one(Users, {
    fields: [UsersRoles.userID],
    references: [Users.ID]
  }),
  role: one(Roles, {
    fields: [UsersRoles.roleID],
    references: [Roles.ID]
  })
}));