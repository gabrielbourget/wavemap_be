import { Router, Request, Response } from "express";

import { ARTIST, ARTISTS } from "src/constants/routes.ts";

const artistRouter = Router();

artistRouter.route(ARTIST).get((req: Request, res: Response) => {

});

artistRouter.route(ARTISTS).get((req: Request, res: Response) => {
  
});

artistRouter.route(ARTIST).post((req: Request, res: Response) => {

});

artistRouter.route(ARTIST).put((req: Request, res: Response) => {

});

artistRouter.route(ARTIST).delete((req: Request, res: Response) => {

});
