import { Collection } from "mongodb";
import { Venue } from "./Venue";
import { Event } from "./Event";
import { IUser } from "./User";
import { IRegistrationCode } from "./RegistrationCode";
import { Artist } from "./Artist";
import { ArtistAction, EventAction, VenueAction } from "./UserAction";

export interface IDatabase {
  venues: Collection<Venue>;
  events: Collection<Event>;
  users: Collection<IUser>;
  artists: Collection<Artist>;
  registrationCodes: Collection<IRegistrationCode>;
  userActions: Collection<ArtistAction | EventAction | VenueAction>
}
