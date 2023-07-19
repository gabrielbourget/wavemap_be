import { Router, Request, Response } from "express";
import { EVENT, EVENTS } from "../constants/routes.ts";
import { connectDB } from "../database/database.ts";

// const db = await connectDB();

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
  eventRouter.patch(EVENT, editEvent);
  eventRouter.delete(EVENT, deleteEvent);

  return eventRouter;
};
