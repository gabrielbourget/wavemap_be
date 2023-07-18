import { Artist, Event, Venue } from "./index";
import { ObjectId } from "mongodb";

export type UserActionType = "CREATE" | "EDIT" | "DELETE";
export type UserActionTargetType = "ARTIST" | "EVENT" | "VENUE";

export interface IUserInfo {
  userID: string;
  username: string;
  imageURL?: string;
}

export type IUserAction = {
  _id: ObjectId;
  actionID: string;
  actionType: UserActionType;
  actionTargetType: UserActionTargetType;
  dateTime: number;
  userInfo: IUserInfo;
  comments?: string;
}

export type ArtistAction = IUserAction & {
  previousInfoState?: Artist;
  newInfoState?: Artist;
}

export type VenueAction = IUserAction & {
  previousInfoState?: Venue;
  newInfoState?: Venue;
}

export type EventAction = IUserAction & {
  previousInfoState?: Event;
  newInfoState?: Event;
}

export interface IGetUserActionInput {
  id: string;
}
