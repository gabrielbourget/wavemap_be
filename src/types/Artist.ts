import { ObjectId } from "mongodb";
import { Person } from "./Person";
import { InferModel } from "drizzle-orm";
import { Artists } from "@src/Database/schema";

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
  _id: ObjectId;
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
  imageToUpload?: any;
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
  imageToUpload?: any;
}

export interface IDeleteArtistInput {
  id: string;
}
