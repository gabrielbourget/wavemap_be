import type { Request, Response, NextFunction } from "express";
import { AUTH_HEADER_KEY } from "../constants/index.ts";
import { connectDB } from "../database/database.ts";

// const db = await connectDB();

export const isAuthenticated = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // - DEV NOTE -> This assumes that the header value will be of the format `Bearer <JWT Token>`
    let accessToken: string | undefined = undefined;
    const authHeader = (req.headers[AUTH_HEADER_KEY] as string);
    if (authHeader) accessToken = authHeader.split(" ")[1];

    if (!accessToken) res.sendStatus(403);
    
    // -> Check for user from access token

    // -> If user exists, use lodash merge or Object.assign() to put user object on request

    next();
  } catch (err) {
    console.error(`isAuthenticated() middleware error encountered: ${err}`);
  }
}
