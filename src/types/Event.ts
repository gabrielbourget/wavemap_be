import { ObjectId } from "mongodb";
import { IUser } from "./User";
import { Either } from "./utilTypes";
import { InferModel } from "drizzle-orm";
import { Events } from "@src/Database/schema";

export type DB_Event = InferModel<typeof Events>;

export interface EventLinks {
  facebook?: string;
  dice?: string;
  eventBrite?: string;
  website?: string;
}

export interface EventTicketLinks {
  eventBrite?: string;
  dice?: string;
  website?: string;
}

export type EventType = "Online" | "In Person" | "Hybrid";
export type EventStatus = "Upcoming" | "Ongoing" | "Historical";

export type EventLocation = Either<PhysicalEventLocation, DigitalEventLocation>;
export type DigitalEventLocation = { eventURL: string };
export type PhysicalEventLocation = { city: string, country: string };

export interface EventMetadata {
  createdOn: number; // -> ms since epoch
  lastModifiedOn: number; // -> ms since epoch
  actions: string[];
}

export type Event = {
  _id: ObjectId;
  id: string;
  name: string;
  type: EventType;
  cancelled?: boolean;
  description?: string;
  imageURL?: string,
  startDateTime: number; // -> ms since epoch
  endDateTime?: number; // -> stored in minutes
  startTimeProvided?: boolean;
  endTimeProvided?: boolean;
  venues?: string[]; // -> Venue ID
  artists?: string[]; // -> Artist IDs
  physicalLocations?: PhysicalEventLocation[];
  digitalLocations?: DigitalEventLocation[];
  links?: EventLinks;
  ticketLinks?: EventTicketLinks;
  metadata: EventMetadata;
}

export interface ICreateEventInput {
  id: string;
  name: string;
  type: EventType;
  cancelled?: boolean;
  description?: string;
  imageURL?: string,
  startDateTime: number; // -> ms since epoch
  endDateTime?: number; // -> stored in minutes
  startTimeProvided?: boolean;
  endTimeProvided?: boolean;
  venues?: string[]; // -> Venue ID
  artists?: string[]; // -> Artist IDs
  locations?: EventLocation[];
  links?: EventLinks;
  ticketLinks?: EventTicketLinks;
}

export interface ICreateEventArgs {
  eventDetails: ICreateEventInput;
  imageToUpload?: any;
}

export interface IEditEventInput {
  id: string;
  name?: string;
  type?: EventType;
  cancelled?: boolean;
  description?: string;
  imageURL?: string,
  startDateTime?: number; // -> ms since epoch
  endDateTime?: number; // -> stored in minutes
  startTimeProvided?: boolean;
  endTimeProvided?: boolean;
  venues?: string[]; // -> Venue ID
  artists?: string[]; // -> Artist IDs
  locations?: EventLocation[];
  links?: EventLinks;
  ticketLinks?: EventTicketLinks;
}

export interface IEditEventArgs {
  eventDetails: IEditEventInput;
  imageToUpload?: any;
}

export interface IDeleteEventInput {
  id: string;
}