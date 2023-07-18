import { ObjectId } from "mongodb";

export interface IRegistrationCode {
  _id: ObjectId;
  code: string;
  wasUsed: boolean;
  wasIssued?: boolean;
}
