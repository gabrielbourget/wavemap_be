import { Router, Request, Response } from "express";

import { EVENT_SERIES } from "src/constants/routes.ts";

const eventSeriesRouter = Router();

eventSeriesRouter.route(EVENT_SERIES).get((req: Request, res: Response) => {

});

// - TODO: -> How to distinguish route for many event series rather than just one?
// eventSeriesRouter.route(EVENT_SERIES).get((req: Request, res: Response) => {
  
// });

eventSeriesRouter.route(EVENT_SERIES).post((req: Request, res: Response) => {

});

eventSeriesRouter.route(EVENT_SERIES).put((req: Request, res: Response) => {

});

eventSeriesRouter.route(EVENT_SERIES).delete((req: Request, res: Response) => {

});
