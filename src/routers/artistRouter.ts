import { Router, Request, Response } from "express";

import { ARTIST, ARTISTS } from "src/constants/routes.ts";

const artistRouter = Router();

artistRouter.route(ARTIST).get(async (req: Request, res: Response) => {

});

artistRouter.route(ARTISTS).get(async (req: Request, res: Response) => {
  
});

artistRouter.route(ARTIST).post(async (req: Request, res: Response) => {

});

artistRouter.route(ARTIST).put(async (req: Request, res: Response) => {

});

artistRouter.route(ARTIST).delete(async (req: Request, res: Response) => {

});
