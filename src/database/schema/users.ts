import { relations } from "drizzle-orm";
import {
  text, timestamp, pgTable, uuid, boolean, integer, uniqueIndex,
} from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";

// - TODO: -> Apply unique constraints to username and email once it is implemented in Drizzle ORM
export const Users = pgTable('Users', {
  ID: uuid('ID').primaryKey(),
  username: text('username').notNull(),
  imageURL: text('imageURL'),
  email: text('email').notNull(),
  name1: text('name1'),
  name2: text('name2'),
  phoneNumber: text('phoneNumber'),
  userSettingsID: uuid('userSettingsID').references(() => UserSettings.ID),
  userMetadataID: uuid('userMetadataID').references(() => UserMetadata.ID)
}, (Users) => {
  return {
    IDIndex: uniqueIndex("IDIndex").on(Users.ID),
    usernameIndex: uniqueIndex("usernameIndex").on(Users.username),
    emailIndex: uniqueIndex("emailIndex").on(Users.email)
  };
});

export const insertUsersSchema = createInsertSchema(Users);
export const selectUsersSchema = createSelectSchema(Users);

export const usersRelations = relations(Users, ({one}) => ({
  settings: one(UserSettings, {
    fields: [Users.userSettingsID],
    references: [UserSettings.ID]
  }),
  metadata: one(UserMetadata, {
    fields: [Users.userMetadataID],
    references: [UserMetadata.ID]
  })
}));

export const UserSettings = pgTable('UserSettings', {
  ID: uuid('ID').primaryKey(),
  defaultTheme: text('defaultTheme').notNull().default('light'),
  defaultDisplayMode: text('defaultDisplayMode').notNull().default('list'),
  defaultLanguage: text('defaultLanguage').notNull().default('en'),
  setLanguageUsingBrowserSetting: boolean('setLanguageUsingBrowserSetting').notNull().default(true),
  itemsPerPage: integer('itemsPerPage').notNull().default(100)
});

export const insertUserSettingsSchema = createInsertSchema(UserSettings);
export const selectUserSettingsSchema = createSelectSchema(UserSettings);

export const UserMetadata = pgTable('UserMetadata', {
  ID: uuid('ID').primaryKey(),
  createdOn: timestamp('createdOn', { withTimezone: true }),
  lastModifiedOn: timestamp('lastModifiedOn', { withTimezone: true }),
  accountDisabled: boolean('accountDisabled').notNull().default(false),
  artistsCreated: integer('artistsCreated').notNull().default(0),
  artistsModified: integer('artistsModified').notNull().default(0),
  eventsCreated: integer('eventsCreated').notNull().default(0),
  eventsModified: integer('eventsModified').notNull().default(0),
  eventSeriesCreated: integer('eventSeriesCreated').notNull().default(0),
  eventSeriesModified: integer('eventSeriesModified').notNull().default(0),
  venuesCreated: integer('venuesCreated').notNull().default(0),
  venuesModified: integer('venuesModified').notNull().default(0)
});

export const insertUserMetadataSchema = createInsertSchema(UserMetadata);
export const selectUserMetadataSchema = createSelectSchema(UserMetadata);
