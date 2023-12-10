CREATE TABLE IF NOT EXISTS "ArtistImages" (
	"ID" uuid PRIMARY KEY NOT NULL,
	"artistID" uuid,
	"imageURL" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "ArtistLinkDestinations" (
	"ID" uuid PRIMARY KEY NOT NULL,
	"name" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "ArtistLinks" (
	"ID" uuid PRIMARY KEY NOT NULL,
	"artistID" uuid,
	"linkDestinationID" uuid,
	"linkURL" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Artists" (
	"ID" uuid PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"imageURL" text,
	"description" text,
	"createdOn" timestamp with time zone,
	"createdByID" uuid,
	"lastModifiedOn" timestamp with time zone,
	"lastModifiedByID" uuid
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "DigitalEventLinkDestinations" (
	"ID" uuid PRIMARY KEY NOT NULL,
	"name" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "DigitalEventLocations" (
	"ID" uuid PRIMARY KEY NOT NULL,
	"eventID" uuid,
	"linkDestinationID" uuid,
	"linkURL" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "EventImages" (
	"ID" uuid PRIMARY KEY NOT NULL,
	"eventID" uuid,
	"imageURL" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "EventLinkDestinations" (
	"ID" uuid PRIMARY KEY NOT NULL,
	"name" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "EventLinks" (
	"ID" uuid PRIMARY KEY NOT NULL,
	"eventID" uuid,
	"linkDestinationID" uuid,
	"linkURL" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "EventTicketLinkDestinations" (
	"ID" uuid PRIMARY KEY NOT NULL,
	"name" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "EventTicketLinks" (
	"ID" uuid PRIMARY KEY NOT NULL,
	"eventID" uuid,
	"linkDestinationID" uuid,
	"linkURL" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "EventTypes" (
	"ID" uuid PRIMARY KEY NOT NULL,
	"name" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Events" (
	"ID" uuid PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"eventTypeID" uuid,
	"cancelled" boolean DEFAULT false NOT NULL,
	"description" text,
	"imageURL" text,
	"startDateTime" timestamp with time zone,
	"endDateTime" timestamp with time zone,
	"startTimeProvided" boolean NOT NULL,
	"endTimeProvided" boolean NOT NULL,
	"createdOn" timestamp with time zone,
	"createdByID" uuid,
	"lastModifiedOn" timestamp with time zone,
	"lastModifiedByID" uuid
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "PhysicalEventLocations" (
	"ID" uuid PRIMARY KEY NOT NULL,
	"eventID" uuid,
	"cityID" uuid,
	"countryId" uuid
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "EventSeries" (
	"ID" uuid PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"description" text,
	"imageURL" text,
	"eventSeriesTypeID" uuid,
	"createdOn" timestamp with time zone,
	"createdByID" uuid,
	"lastModifiedOn" timestamp with time zone,
	"lastModifiedByID" uuid
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "EventSeriesImages" (
	"ID" uuid PRIMARY KEY NOT NULL,
	"eventSeriesID" uuid,
	"imageURL" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "EventSeriesLinks" (
	"ID" uuid PRIMARY KEY NOT NULL,
	"eventSeriesID" uuid,
	"eventLinkDestinationID" uuid,
	"linkURL" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "EventSeriesTicketLinks" (
	"ID" uuid PRIMARY KEY NOT NULL,
	"eventSeriesID" uuid,
	"eventSeriesTicketLinkDestinationID" uuid,
	"linkURL" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "EventSeriesTypes" (
	"ID" uuid PRIMARY KEY NOT NULL,
	"name" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "VenueImages" (
	"ID" uuid PRIMARY KEY NOT NULL,
	"venueID" uuid,
	"imageURL" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "VenueLinkDestinations" (
	"ID" uuid PRIMARY KEY NOT NULL,
	"name" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "VenueLinks" (
	"ID" uuid PRIMARY KEY NOT NULL,
	"venueId" uuid,
	"linkDestinationID" uuid,
	"linkURL" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "VenueLocations" (
	"ID" uuid PRIMARY KEY NOT NULL,
	"venueID" uuid,
	"cityID" uuid,
	"countryId" uuid
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "VenueStatuses" (
	"ID" uuid PRIMARY KEY NOT NULL,
	"name" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Venues" (
	"ID" uuid PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"description" text,
	"imageURL" text,
	"capacity" integer,
	"venueStatusID" uuid,
	"latitude" real NOT NULL,
	"longitude" real NOT NULL,
	"address" text NOT NULL,
	"phoneNumber" text,
	"email" text,
	"createdOn" timestamp with time zone,
	"createdByID" uuid,
	"lastModifiedOn" timestamp with time zone,
	"lastModifiedByID" uuid
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "UserMetadata" (
	"ID" uuid PRIMARY KEY NOT NULL,
	"createdOn" timestamp with time zone,
	"lastModifiedOn" timestamp with time zone,
	"accountDisabled" boolean DEFAULT false NOT NULL,
	"artistsCreated" integer DEFAULT 0 NOT NULL,
	"artistsModified" integer DEFAULT 0 NOT NULL,
	"eventsCreated" integer DEFAULT 0 NOT NULL,
	"eventsModified" integer DEFAULT 0 NOT NULL,
	"eventSeriesCreated" integer DEFAULT 0 NOT NULL,
	"eventSeriesModified" integer DEFAULT 0 NOT NULL,
	"venuesCreated" integer DEFAULT 0 NOT NULL,
	"venuesModified" integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "UserSettings" (
	"ID" uuid PRIMARY KEY NOT NULL,
	"defaultTheme" text DEFAULT 'light' NOT NULL,
	"defaultDisplayMode" text DEFAULT 'list' NOT NULL,
	"defaultLanguage" text DEFAULT 'en' NOT NULL,
	"setLanguageUsingBrowserSetting" boolean DEFAULT true NOT NULL,
	"itemsPerPage" integer DEFAULT 100 NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Users" (
	"ID" uuid PRIMARY KEY NOT NULL,
	"username" text NOT NULL,
	"imageURL" text,
	"email" text NOT NULL,
	"name1" text,
	"name2" text,
	"phoneNumber" text,
	"userSettingsID" uuid,
	"userMetadataID" uuid
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Cities" (
	"ID" uuid PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"countryID" uuid
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Countries" (
	"ID" uuid PRIMARY KEY NOT NULL,
	"name" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Roles" (
	"ID" uuid PRIMARY KEY NOT NULL,
	"name" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "ArtistsEvents" (
	"ID" uuid PRIMARY KEY NOT NULL,
	"artistID" uuid,
	"eventID" uuid
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "EventsEventSeries" (
	"ID" uuid PRIMARY KEY NOT NULL,
	"eventID" uuid,
	"eventSeriesID" uuid
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "EventsVenues" (
	"ID" uuid PRIMARY KEY NOT NULL,
	"eventID" uuid,
	"venueId" uuid
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "UsersRoles" (
	"ID" uuid PRIMARY KEY NOT NULL,
	"userID" uuid,
	"roleID" uuid
);
--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "IDIndex" ON "Artists" ("ID");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "nameIndex" ON "Artists" ("name");--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "IDIndex" ON "Events" ("ID");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "nameIndex" ON "Events" ("name");--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "IDIndex" ON "EventSeries" ("ID");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "nameIndex" ON "EventSeries" ("name");--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "IDIndex" ON "Venues" ("ID");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "nameIndex" ON "Venues" ("name");--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "IDIndex" ON "Users" ("ID");--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "usernameIndex" ON "Users" ("username");--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "emailIndex" ON "Users" ("email");--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "ArtistImages" ADD CONSTRAINT "ArtistImages_artistID_Artists_ID_fk" FOREIGN KEY ("artistID") REFERENCES "Artists"("ID") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "ArtistLinks" ADD CONSTRAINT "ArtistLinks_artistID_Artists_ID_fk" FOREIGN KEY ("artistID") REFERENCES "Artists"("ID") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "ArtistLinks" ADD CONSTRAINT "ArtistLinks_linkDestinationID_ArtistLinkDestinations_ID_fk" FOREIGN KEY ("linkDestinationID") REFERENCES "ArtistLinkDestinations"("ID") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "Artists" ADD CONSTRAINT "Artists_createdByID_Users_ID_fk" FOREIGN KEY ("createdByID") REFERENCES "Users"("ID") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "Artists" ADD CONSTRAINT "Artists_lastModifiedByID_Users_ID_fk" FOREIGN KEY ("lastModifiedByID") REFERENCES "Users"("ID") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "DigitalEventLocations" ADD CONSTRAINT "DigitalEventLocations_eventID_Events_ID_fk" FOREIGN KEY ("eventID") REFERENCES "Events"("ID") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "DigitalEventLocations" ADD CONSTRAINT "DigitalEventLocations_linkDestinationID_DigitalEventLinkDestinations_ID_fk" FOREIGN KEY ("linkDestinationID") REFERENCES "DigitalEventLinkDestinations"("ID") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "EventImages" ADD CONSTRAINT "EventImages_eventID_Events_ID_fk" FOREIGN KEY ("eventID") REFERENCES "Events"("ID") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "EventLinks" ADD CONSTRAINT "EventLinks_eventID_Events_ID_fk" FOREIGN KEY ("eventID") REFERENCES "Events"("ID") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "EventLinks" ADD CONSTRAINT "EventLinks_linkDestinationID_EventLinkDestinations_ID_fk" FOREIGN KEY ("linkDestinationID") REFERENCES "EventLinkDestinations"("ID") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "EventTicketLinks" ADD CONSTRAINT "EventTicketLinks_eventID_Events_ID_fk" FOREIGN KEY ("eventID") REFERENCES "Events"("ID") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "EventTicketLinks" ADD CONSTRAINT "EventTicketLinks_linkDestinationID_EventTicketLinkDestinations_ID_fk" FOREIGN KEY ("linkDestinationID") REFERENCES "EventTicketLinkDestinations"("ID") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "Events" ADD CONSTRAINT "Events_eventTypeID_EventTypes_ID_fk" FOREIGN KEY ("eventTypeID") REFERENCES "EventTypes"("ID") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "Events" ADD CONSTRAINT "Events_createdByID_Users_ID_fk" FOREIGN KEY ("createdByID") REFERENCES "Users"("ID") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "Events" ADD CONSTRAINT "Events_lastModifiedByID_Users_ID_fk" FOREIGN KEY ("lastModifiedByID") REFERENCES "Users"("ID") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "PhysicalEventLocations" ADD CONSTRAINT "PhysicalEventLocations_eventID_Events_ID_fk" FOREIGN KEY ("eventID") REFERENCES "Events"("ID") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "PhysicalEventLocations" ADD CONSTRAINT "PhysicalEventLocations_cityID_Cities_ID_fk" FOREIGN KEY ("cityID") REFERENCES "Cities"("ID") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "PhysicalEventLocations" ADD CONSTRAINT "PhysicalEventLocations_countryId_Countries_ID_fk" FOREIGN KEY ("countryId") REFERENCES "Countries"("ID") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "EventSeries" ADD CONSTRAINT "EventSeries_eventSeriesTypeID_EventSeriesTypes_ID_fk" FOREIGN KEY ("eventSeriesTypeID") REFERENCES "EventSeriesTypes"("ID") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "EventSeries" ADD CONSTRAINT "EventSeries_createdByID_Users_ID_fk" FOREIGN KEY ("createdByID") REFERENCES "Users"("ID") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "EventSeries" ADD CONSTRAINT "EventSeries_lastModifiedByID_Users_ID_fk" FOREIGN KEY ("lastModifiedByID") REFERENCES "Users"("ID") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "EventSeriesImages" ADD CONSTRAINT "EventSeriesImages_eventSeriesID_EventSeries_ID_fk" FOREIGN KEY ("eventSeriesID") REFERENCES "EventSeries"("ID") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "EventSeriesLinks" ADD CONSTRAINT "EventSeriesLinks_eventSeriesID_EventSeries_ID_fk" FOREIGN KEY ("eventSeriesID") REFERENCES "EventSeries"("ID") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "EventSeriesLinks" ADD CONSTRAINT "EventSeriesLinks_eventLinkDestinationID_EventLinkDestinations_ID_fk" FOREIGN KEY ("eventLinkDestinationID") REFERENCES "EventLinkDestinations"("ID") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "EventSeriesTicketLinks" ADD CONSTRAINT "EventSeriesTicketLinks_eventSeriesID_EventSeries_ID_fk" FOREIGN KEY ("eventSeriesID") REFERENCES "EventSeries"("ID") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "EventSeriesTicketLinks" ADD CONSTRAINT "EventSeriesTicketLinks_eventSeriesTicketLinkDestinationID_EventTicketLinkDestinations_ID_fk" FOREIGN KEY ("eventSeriesTicketLinkDestinationID") REFERENCES "EventTicketLinkDestinations"("ID") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "VenueImages" ADD CONSTRAINT "VenueImages_venueID_Venues_ID_fk" FOREIGN KEY ("venueID") REFERENCES "Venues"("ID") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "VenueLinks" ADD CONSTRAINT "VenueLinks_venueId_Venues_ID_fk" FOREIGN KEY ("venueId") REFERENCES "Venues"("ID") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "VenueLinks" ADD CONSTRAINT "VenueLinks_linkDestinationID_VenueLinkDestinations_ID_fk" FOREIGN KEY ("linkDestinationID") REFERENCES "VenueLinkDestinations"("ID") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "VenueLocations" ADD CONSTRAINT "VenueLocations_venueID_Venues_ID_fk" FOREIGN KEY ("venueID") REFERENCES "Venues"("ID") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "VenueLocations" ADD CONSTRAINT "VenueLocations_cityID_Cities_ID_fk" FOREIGN KEY ("cityID") REFERENCES "Cities"("ID") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "VenueLocations" ADD CONSTRAINT "VenueLocations_countryId_Countries_ID_fk" FOREIGN KEY ("countryId") REFERENCES "Countries"("ID") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "Venues" ADD CONSTRAINT "Venues_venueStatusID_VenueStatuses_ID_fk" FOREIGN KEY ("venueStatusID") REFERENCES "VenueStatuses"("ID") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "Venues" ADD CONSTRAINT "Venues_createdByID_Users_ID_fk" FOREIGN KEY ("createdByID") REFERENCES "Users"("ID") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "Venues" ADD CONSTRAINT "Venues_lastModifiedByID_Users_ID_fk" FOREIGN KEY ("lastModifiedByID") REFERENCES "Users"("ID") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "Users" ADD CONSTRAINT "Users_userSettingsID_UserSettings_ID_fk" FOREIGN KEY ("userSettingsID") REFERENCES "UserSettings"("ID") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "Users" ADD CONSTRAINT "Users_userMetadataID_UserMetadata_ID_fk" FOREIGN KEY ("userMetadataID") REFERENCES "UserMetadata"("ID") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "Cities" ADD CONSTRAINT "Cities_countryID_Countries_ID_fk" FOREIGN KEY ("countryID") REFERENCES "Countries"("ID") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "ArtistsEvents" ADD CONSTRAINT "ArtistsEvents_artistID_Artists_ID_fk" FOREIGN KEY ("artistID") REFERENCES "Artists"("ID") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "ArtistsEvents" ADD CONSTRAINT "ArtistsEvents_eventID_Events_ID_fk" FOREIGN KEY ("eventID") REFERENCES "Events"("ID") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "EventsEventSeries" ADD CONSTRAINT "EventsEventSeries_eventID_Events_ID_fk" FOREIGN KEY ("eventID") REFERENCES "Events"("ID") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "EventsEventSeries" ADD CONSTRAINT "EventsEventSeries_eventSeriesID_EventSeries_ID_fk" FOREIGN KEY ("eventSeriesID") REFERENCES "EventSeries"("ID") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "EventsVenues" ADD CONSTRAINT "EventsVenues_eventID_Events_ID_fk" FOREIGN KEY ("eventID") REFERENCES "Events"("ID") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "EventsVenues" ADD CONSTRAINT "EventsVenues_venueId_Venues_ID_fk" FOREIGN KEY ("venueId") REFERENCES "Venues"("ID") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "UsersRoles" ADD CONSTRAINT "UsersRoles_userID_Users_ID_fk" FOREIGN KEY ("userID") REFERENCES "Users"("ID") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "UsersRoles" ADD CONSTRAINT "UsersRoles_roleID_Roles_ID_fk" FOREIGN KEY ("roleID") REFERENCES "Roles"("ID") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
