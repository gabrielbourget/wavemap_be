import { sign } from "jsonwebtoken";
import { REFRESH_JWT_LIFETIME } from "../constants";
import { IUser } from "../types";

const { REFRESH_JWT_SECRET } = process.env;

export const createRefreshToken = (user: IUser) => {
  return sign(
    {
      userId: user.id,
      refreshTokenVersion: user.metadata.refreshTokenVersion
    },
    `${REFRESH_JWT_SECRET}`,
    { expiresIn: REFRESH_JWT_LIFETIME }
  );
};
