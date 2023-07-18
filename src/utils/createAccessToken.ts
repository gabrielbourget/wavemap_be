import { sign } from "jsonwebtoken";
import { ACCESS_JWT_LIFETIME } from "../constants";
import { IUser } from "../types";

const { ACCESS_JWT_SECRET } = process.env;

export const createAccessToken = (user: IUser): string => (
  sign(
    {
      userId: user.id,
      roles: user.metadata.roles,
      email: user.email,
      refreshTokenVersion: user.metadata.refreshTokenVersion,
      expiryDateTime: Date.now() + (15 * 60 * 1000),
      // expiryDateTime: Date.now(),
    },
    `${ACCESS_JWT_SECRET}`,
    { expiresIn: ACCESS_JWT_LIFETIME }
  )
);
