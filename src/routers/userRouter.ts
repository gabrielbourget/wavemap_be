import { Router, Request, Response } from "express";
import { USER, USERS } from "../constants/routes.ts";

const userRouter = Router();

const getUser = async (req: Request, res: Response) => {

};

const getUsers = async (req: Request, res: Response) => {

};

const createUser = async (req: Request, res: Response) => {

};

const editUser = async (req: Request, res: Response) => {

};

const deleteUser = async (req: Request, res: Response) => {

};

export default (userRouter: Router): Router => {
  userRouter.get(USER, getUser);
  userRouter.get(USERS, getUsers);
  userRouter.post(USER, createUser);
  userRouter.patch(USER, editUser);
  userRouter.delete(USER, deleteUser);

  return userRouter;
};
