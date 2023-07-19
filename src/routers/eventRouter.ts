import { Router, Request, Response } from "express";
import { EVENT, EVENTS } from "../constants/routes.ts";

const eventRouter = Router();

const getEvent = async (req: Request, res: Response) => {

};

const getEvents = async (req: Request, res: Response) => {

};

const createEvent = async (req: Request, res: Response) => {

};

const editEvent = async (req: Request, res: Response) => {

};

const deleteEvent = async (req: Request, res: Response) => {

};

export default (eventRouter: Router): Router => {
  eventRouter.get(EVENT, getEvent);
  eventRouter.get(EVENTS, getEvents);
  eventRouter.post(EVENT, createEvent);
  eventRouter.put(EVENT, editEvent);
  eventRouter.delete(EVENT, deleteEvent);

  return eventRouter;
};
