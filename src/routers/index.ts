import { Router } from "express";

import artists from "./artistRouter.ts";
import events from "./eventRouter.ts";
import eventSeries from "./eventSeriesRouter.ts";
import venues from "./venueRouter.ts";
import users from "./userRouter.ts";
import auth from "./authRouter.ts";

const appRouter = Router();

export default (): Router => {
  artists(appRouter);
  events(appRouter);
  eventSeries(appRouter);
  venues(appRouter);
  users(appRouter);
  auth(appRouter);

  return appRouter;
};
