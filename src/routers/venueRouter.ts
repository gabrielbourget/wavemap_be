import { Router, Request, Response } from "express";

import { VENUE, VENUES } from "src/constants/routes.ts";

const venueRouter = Router();

venueRouter.route(VENUE).get((req: Request, res: Response) => {

});

venueRouter.route(VENUES).get((req: Request, res: Response) => {
  
});

venueRouter.route(VENUE).post((req: Request, res: Response) => {

});

venueRouter.route(VENUE).put((req: Request, res: Response) => {

});

venueRouter.route(VENUE).delete((req: Request, res: Response) => {

});
