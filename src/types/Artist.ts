import { Person } from "./Person.ts";
import { InferModel } from "drizzle-orm";
import { Artists } from "../database/schema/index.ts";

export type DB_Artist = InferModel<typeof Artists>;

export interface ArtistLinks {
  bandCamp?: string;
  soundCloud?: string;
  spotify?: string;
  appleMusic?: string;
  tidal?: string;
  deezer?: string;
  beatPort?: string;
  vk?: string;
  youTube?: string;
  googleDrive?: string;
  website?: string;
  instagram?: string;
  facebook?: string;
  twitter?: string;
}

export interface ArtistMetadata {
  createdOn: number; // -> ms since epoch
  lastModifiedOn: number; // -> ms since epoch
  actions: string[];
}

export type Artist = {
  id: string;
  name: string;
  imageURL?: string;
  description?: string;
  people?: Person[]; // -> Person or people behind the art project
  links?: ArtistLinks;
  events?: string[]; // -> List of Event IDs at which this person performed
  metadata: ArtistMetadata,
}

export interface ICreateArtistInput {
  id: string;
  name: string;
  imageURL?: string;
  description?: string;
  people?: Person[]; // -> Person or people behind the art project
  links?: ArtistLinks;
  events?: string[]; // -> List of Event IDs at which this person performed
}

export interface ICreateArtistArgs {
  artistDetails: ICreateArtistInput;
  imageToUpload?: unknown;
}

export interface IEditArtistInput {
  id: string;
  name: string;
  imageURL?: string;
  description?: string;
  people?: Person[]; // -> Person or people behind the art project
  links?: ArtistLinks;
  events?: string[]; // -> List of Event IDs at which this person performed
}

export interface IEditArtistArgs {
  artistDetails: IEditArtistInput;
  imageToUpload?: unknown;
}

export interface IDeleteArtistInput {
  id: string;
}
