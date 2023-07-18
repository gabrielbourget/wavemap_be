import { Router, Request, Response } from "express";

import { USER, USERS } from "src/constants/routes.ts";

const userRouter = Router();

userRouter.route(USER).get((req: Request, res: Response) => {

});

userRouter.route(USERS).get((req: Request, res: Response) => {
  
});

userRouter.route(USER).post((req: Request, res: Response) => {

});

userRouter.route(USER).put((req: Request, res: Response) => {

});

userRouter.route(USER).delete((req: Request, res: Response) => {

});
