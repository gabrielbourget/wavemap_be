import { Router } from "express";

import artists from "./artistRouter.ts";
import events from "./eventRouter.ts";
import eventSeries from "./eventSeriesRouter.ts";
import venues from "./venueRouter.ts";
import users from "./userRouter.ts";
import auth from "./authRouter.ts";

const router = Router();

export default (): Router => {
  // artists(router);

  return router;
}