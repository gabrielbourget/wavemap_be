import { Router, Request, Response } from "express";

import { USER, USERS } from "src/constants/routes.ts";

const userRouter = Router();

userRouter.route(USER).get(async (req: Request, res: Response) => {

});

userRouter.route(USERS).get(async (req: Request, res: Response) => {
  
});

userRouter.route(USER).post(async (req: Request, res: Response) => {

});

userRouter.route(USER).put(async (req: Request, res: Response) => {

});

userRouter.route(USER).delete(async (req: Request, res: Response) => {

});
