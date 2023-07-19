import { Router, Request, Response } from "express";
import { ARTIST, ARTISTS } from "../constants/routes.ts";

const artistRouter = Router();

const getArtist = async (req: Request, res: Response) => {

};

const getArtists = async (req: Request, res: Response) => {

};

const createArtist = async (req: Request, res: Response) => {

};

const editArtist = async (req: Request, res: Response) => {

};

const deleteArtist = async (req: Request, res: Response) => {

};

export default (artistRouter: Router): Router => {
  artistRouter.get(ARTIST, getArtist);
  artistRouter.get(ARTISTS, getArtists);
  artistRouter.post(ARTIST, createArtist);
  artistRouter.patch(ARTIST, editArtist);
  artistRouter.delete(ARTIST, deleteArtist);

  return artistRouter;
};
