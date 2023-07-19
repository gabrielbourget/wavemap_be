import { Router, Request, Response } from "express";
import { VENUE, VENUES } from "../constants/routes.ts";

const venueRouter = Router();

const getVenue = async (req: Request, res: Response) => {

};

const getVenues = async (req: Request, res: Response) => {

};

const createVenue = async (req: Request, res: Response) => {

};

const editVenue = async (req: Request, res: Response) => {

};

const deleteVenue = async (req: Request, res: Response) => {

};

export default (venueRouter: Router): Router => {
  venueRouter.get(VENUE, getVenue);
  venueRouter.get(VENUES, getVenues);
  venueRouter.post(VENUE, createVenue);
  venueRouter.patch(VENUE, editVenue);
  venueRouter.delete(VENUE, deleteVenue);

  return venueRouter;
};
