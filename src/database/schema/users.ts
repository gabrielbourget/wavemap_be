import { relations } from "drizzle-orm";
import {
  text, timestamp, pgTable, uuid, boolean, integer, uniqueIndex,
} from "drizzle-orm/pg-core";

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


export const UserMetadata = pgTable('UserMetadata', {
  ID: uuid('ID').primaryKey(),
  createdOn: timestamp('createdOn', { withTimezone: true }),
  lastModifiedOn: timestamp('lastModifiedOn', { withTimezone: true }),
  accountDisabled: boolean('accountDisabled').notNull().default(false)
});
