import { createResolver } from "apollo-resolvers";
import { AuthenticationError } from "apollo-server-express";
import { createError, isInstance } from 'apollo-errors';
import { verify } from "jsonwebtoken";
import { IContext } from "../types";
import { AUTH_HEADER_KEY } from "../constants";
// import { createResolver } from "./createResolver";

const { ACCESS_JWT_SECRET } = process.env;

const UnknownError = createError('UnknownError', {
  message: 'An unknown error has occurred!  Please try again later'
});

// - DEV NOTE -> Archived example from potential implementation with type-graphql before
// export const isAuthenticated: MiddlewareFn<IContext> = ({ context }, next) => {
//   const authenticationHeader = context.req.headers[AUTH_HEADER_KEY] as string;

//   if (!authenticationHeader) throw new Error("It is not possible to complete an unauthenticated request");

//   try {
//     // - DEV NOTE -> This assumes that the header value will be of the format `Bearer <JWT Token>`
//     const accessToken = authenticationHeader.split(" ")[1];
//     const tokenPayload = verify(accessToken, ACCESS_JWT_SECRET!);
//     context.accessJWTPayload = tokenPayload as any;
//   } catch (err: any) {
//     throw new Error(err);
//   }

//   return next();
// }

export const baseResolver = createResolver(
  null,
  // Only mask outgoing errors that aren't already apollo-errors, such as ORM errors
  (root, args, context, error) => isInstance(error) ? error : new UnknownError()
);

export const isAuthenticated = createResolver((
  _root: undefined,
  _args: undefined,
  { accessToken }: any,
  _info: undefined
) => {
  if (!accessToken) {
    throw new AuthenticationError("It is not possible to complete an unauthenticated request.");
  }
});
