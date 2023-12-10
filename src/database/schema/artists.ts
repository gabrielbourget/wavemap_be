import { relations } from "drizzle-orm";
import {
  text, timestamp, pgTable, uuid, index, uniqueIndex,
} from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { ArtistsEvents, Users } from "./index.ts";

export const Artists = pgTable("Artists", {
  ID: uuid('ID').primaryKey(),
  name: text('name').notNull(),
  imageURL: text('imageURL'),
  description: text('description'),
  createdOn: timestamp('createdOn', { withTimezone: true }),
  createdByID: uuid('createdByID').references(() => Users.ID),
  lastModifiedOn: timestamp('lastModifiedOn', { withTimezone: true }),
  lastModifiedByID: uuid('lastModifiedByID').references(() => Users.ID)
}, (Artists) => {
  return {
    IDIndex: uniqueIndex("IDIndex").on(Artists.ID),
    nameIndex: index("nameIndex").on(Artists.name)
  };
});

export const insertArtistSchema = createInsertSchema(Artists);
export const selectArtistSchema = createSelectSchema(Artists);

export const artistsRelations = relations(Artists, ({ many }) => ({
  links: many(ArtistLinks),
  images: many(ArtistImages),
  events: many(ArtistsEvents)
}));

export const ArtistLinks = pgTable("ArtistLinks", {
  ID: uuid('ID').primaryKey(),
  artistID: uuid('artistID').references(() => Artists.ID),
  linkDestinationID: uuid('linkDestinationID').references(() => ArtistLinkDestinations.ID),
  linkURL: text('linkURL').notNull()
});

export const insertArtistLinksSchema = createInsertSchema(ArtistLinks);
export const selectArtistLinksSchema = createSelectSchema(ArtistLinks);

export const artistLinksRelations = relations(ArtistLinks, ({ one }) => ({
  artist: one(Artists, {
    fields: [ArtistLinks.artistID],
    references: [Artists.ID]
  }),
  linkDestination: one(ArtistLinkDestinations, {
    fields: [ArtistLinks.linkDestinationID],
    references: [ArtistLinkDestinations.ID]
  })
}));

export const ArtistLinkDestinations = pgTable('ArtistLinkDestinations', {
  ID: uuid('ID').primaryKey(),
  name: text('name').notNull()
});

export const insertArtistLinkDestinationsSchema = createInsertSchema(ArtistLinkDestinations);
export const selectArtistLinkDestinationsSchema = createSelectSchema(ArtistLinkDestinations);

export const ArtistImages = pgTable('ArtistImages', {
  ID: uuid('ID').primaryKey(),
  artistID: uuid('artistID').references(() => Artists.ID),
  imageURL: text('imageURL').notNull()
});

export const insertArtistImagesSchema = createInsertSchema(ArtistImages);
export const selectArtistImagesSchema = createSelectSchema(ArtistImages);

export const artistImagesRelations = relations(ArtistImages, ({ one }) => ({
  artist: one(Artists, {
    fields: [ArtistImages.artistID],
    references: [Artists.ID]
  })
}));
