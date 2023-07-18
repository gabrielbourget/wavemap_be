import { ObjectId } from "mongodb";
import { MFAType } from "./MFATypes";
import { InferModel } from "drizzle-orm";
import { Users } from "@src/Database/schema";

export type DB_User = InferModel<typeof Users>;

export interface IUserSettings {
  MFAEnabled?: boolean;
  MFAType?: MFAType;
  defaultTheme: AvailableThemesType;
  defaultDisplayMode: "Grid" | "List";
  defaultLanguage: AvailableLanguagesType;
  setLanguageUsingBrowserSetting?: boolean;
  itemsPerPage: number;
}

export type AvailableLanguagesType = "English" | "French";
export type AvailableThemesType = "Light" | "Dark";

export enum UserRolesEnum {
  ADMIN,
  ROOT
}

export interface IUserMetadata {
  refreshTokenVersion: number;
  accountConfirmed: boolean;
  createdOn: number; // -> ms since epoch
  lastModifiedOn: number; // -> ms since epoch
  accountDisabled: boolean;
  actions: string[];
  roles: UserRolesEnum[];
}

export interface IUser {
  _id: ObjectId;
  id: string;
  username: string;
  imageURL?: string;
  email: string;
  name1: string;
  name2?: string;
  phoneNumber?: string;
  password: string; // -> Representation which is hashed with a salt
  settings: IUserSettings;
  metadata?: IUserMetadata;
}

export interface IGetUserInput {
  id: string;
}

export interface IUpdateUserInput {
  id: string;
  username?: string;
  email?: string;
  imageURL?: string;
  name1: string;
  name2?: string;
  phoneNumber?: string;
  settings: IUserSettings;
  metadata?: IUserMetadata;
}

export interface IUpdateUserArgs {
  userDetails: IUpdateUserInput;
  imageToUpload?: any;
}
