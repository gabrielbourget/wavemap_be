import { Response } from "express"
import { REFRESH_TOKEN_COOKIE_KEY, REFRESH_TOKEN_ROUTE } from "../constants";
import { cookieOptions } from "../utils";

export const setRefreshTokenCookie = (res: Response, token: string) => {
  res.cookie(
    `${REFRESH_TOKEN_COOKIE_KEY}`,
    token,
    // @ts-ignore
    cookieOptions
  );
}