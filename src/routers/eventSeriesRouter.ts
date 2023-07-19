import { Router, Request, Response } from "express";
import { EVENT_SERIES, MANY_EVENT_SERIES } from "../constants/routes.ts";

const eventSeriesRouter = Router();

const getEventSeries = async (req: Request, res: Response) => {

};

const getManyEventSeries = async (req: Request, res: Response) => {

};

const createEventSeries = async (req: Request, res: Response) => {

};

const editEventSeries = async (req: Request, res: Response) => {

};

const deleteEventSeries = async (req: Request, res: Response) => {

};

export default (eventSeriesRouter: Router): Router => {
  eventSeriesRouter.get(EVENT_SERIES, getEventSeries);
  eventSeriesRouter.get(MANY_EVENT_SERIES, getManyEventSeries);
  eventSeriesRouter.post(EVENT_SERIES, createEventSeries);
  eventSeriesRouter.put(EVENT_SERIES, editEventSeries);
  eventSeriesRouter.delete(EVENT_SERIES, deleteEventSeries);

  return eventSeriesRouter;
};
