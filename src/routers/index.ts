import { Router } from "express";

import artists from "./artistRouter.ts";
import events from "./eventRouter.ts";
import eventSeries from "./eventSeriesRouter.ts";
import venues from "./venueRouter.ts";
import users from "./userRouter.ts";
import auth from "./authRouter.ts";

const mainRouter = Router();

export default (): Router => {
  artists(mainRouter);
  events(mainRouter);
  eventSeries(mainRouter);
  venues(mainRouter);
  users(mainRouter);
  auth(mainRouter);

  return mainRouter;
};
