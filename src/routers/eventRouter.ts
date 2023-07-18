import { Router, Request, Response } from "express";

import { EVENT, EVENTS } from "src/constants/routes.ts";

const eventRouter = Router();

eventRouter.route(EVENT).get(async (req: Request, res: Response) => {

});

eventRouter.route(EVENTS).get(async (req: Request, res: Response) => {
  
});

eventRouter.route(EVENT).post(async (req: Request, res: Response) => {

});

eventRouter.route(EVENT).put(async (req: Request, res: Response) => {

});

eventRouter.route(EVENT).delete(async (req: Request, res: Response) => {

});
