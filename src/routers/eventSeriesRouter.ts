import { Router, Request, Response } from "express";

import { EVENT_SERIES } from "src/constants/routes.ts";

const eventSeriesRouter = Router();

eventSeriesRouter.route(EVENT_SERIES).get(async (req: Request, res: Response) => {

});

// - TODO: -> How to distinguish route for many event series rather than just one?
// eventSeriesRouter.route(EVENT_SERIES).get(async (req: Request, res: Response) => {
  
// });

eventSeriesRouter.route(EVENT_SERIES).post(async (req: Request, res: Response) => {

});

eventSeriesRouter.route(EVENT_SERIES).put(async (req: Request, res: Response) => {

});

eventSeriesRouter.route(EVENT_SERIES).delete(async (req: Request, res: Response) => {

});
