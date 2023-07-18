import { Router, Request, Response } from "express";

import { VENUE, VENUES } from "src/constants/routes.ts";

const venueRouter = Router();

venueRouter.route(VENUE).get(async (req: Request, res: Response) => {

});

venueRouter.route(VENUES).get(async (req: Request, res: Response) => {
  
});

venueRouter.route(VENUE).post(async (req: Request, res: Response) => {

});

venueRouter.route(VENUE).put(async (req: Request, res: Response) => {

});

venueRouter.route(VENUE).delete(async (req: Request, res: Response) => {

});
