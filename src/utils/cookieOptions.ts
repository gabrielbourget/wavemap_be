import { REFRESH_TOKEN_ROUTE } from "../constants";
import type { CookieOptions } from "express"

const { NODE_ENV } = process.env;

export const cookieOptions: Partial<CookieOptions> = {
  httpOnly: true,
  sameSite: 'none',
  // sameSite: false,
  secure: (NODE_ENV === 'development') ? false : true,
  path: REFRESH_TOKEN_ROUTE,
};
