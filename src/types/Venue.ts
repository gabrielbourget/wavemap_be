import { InferModel } from "drizzle-orm";
import { Venues } from "../database/schema/index.ts";

export type DB_Venue = InferModel<typeof Venues>;

export interface ICoordinatePair {
  lat: number; lng: number;
}

export type VenueStatus = "Operational" | "On Hiatus" | "Permanently Closed";

export interface VenueLinks {
  vk?: string;
  youTube?: string;
  website?: string;
  instagram?: string;
  facebook?: string;
  twitter?: string;
  soundCloud?: string;
  spotify?: string;
}

export interface VenueMetadata {
  createdOn: number; // -> ms since epoch
  lastModifiedOn: number; // -> ms since epoch
  actions?: string[];
}

export interface Venue {
  id: string;
  name: string;
  description?: string;
  imageURL?: string;
  capacity?: number;
  venueStatus: VenueStatus;
  coordinates: ICoordinatePair;
  address: string;
  city: string;
  country: string;
  phoneNumber?: string;
  email?: string;
  links?: VenueLinks;
  events?: string[]; // -> Event IDs
  metadata: VenueMetadata;
  // - TODO: -> Add to backend version of object activeManipulation status
}

export interface VenueLinks {
  vk?: string;
  youTube?: string;
  googleDrive?: string;
  website?: string;
  instagram?: string;
  facebook?: string;
  twitter?: string;
  soundCloud?: string;
  spotify?: string;
}

export interface IGetVenueInput {
  id: string;
}

export interface ICreateVenueInput {
  id: string;
  name: string;
  description?: string;
  imageURL?: string;
  capacity?: number;
  venueStatus: VenueStatus;
  coordinates: ICoordinatePair;
  address: string;
  city: string;
  country: string;
  phoneNumber?: string;
  email?: string;
  links?: VenueLinks;
  events?: string[]; // -> Event IDs
}

export interface ICreateVenueArgs {
  venueDetails: ICreateVenueInput;
  imageToUpload?: unknown;
}

export interface IEditVenueInput {
  id: string;
  name?: string;
  description?: string;
  imageURL?: string;
  capacity?: number;
  venueStatus?: VenueStatus;
  coordinates?: ICoordinatePair;
  address?: string;
  city: string;
  country: string;
  phoneNumber?: string;
  email?: string;
  links?: VenueLinks;
  events?: string[]; // -> Event IDs
}

export interface IEditVenueArgs {
  venueDetails: IEditVenueInput;
  imageToUpload?: unknown;
}

export interface IDeleteVenueInput {
  id: string;
}
