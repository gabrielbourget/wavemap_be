import { Router, Request, Response } from "express";

import { EVENT, EVENTS } from "src/constants/routes.ts";

const eventRouter = Router();

eventRouter.route(EVENT).get((req: Request, res: Response) => {

});

eventRouter.route(EVENTS).get((req: Request, res: Response) => {
  
});

eventRouter.route(EVENT).post((req: Request, res: Response) => {

});

eventRouter.route(EVENT).put((req: Request, res: Response) => {

});

eventRouter.route(EVENT).delete((req: Request, res: Response) => {

});
