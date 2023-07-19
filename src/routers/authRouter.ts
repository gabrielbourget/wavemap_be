import { Router, Request, Response } from "express";

import {
  LOGIN, LOGOUT, REGISTRATION, SEND_REGISTRATION_INVITATION,
  REVOKE_REFRESH_TOKEN, VALIDATE_ACCT_VERIFICATION, RESEND_ACCT_VERIFICATION,
  REQUEST_PASSWORD_RESET, RESET_PASSWORD, CHANGE_PASSWORD
} from "../constants/index.ts";
import { connectDB } from "../database/database.ts";

// const db = await connectDB();

const login = async (req: Request, res: Response) => {

};

const logout = async (req: Request, res: Response) => {

};

const registration = async (req: Request, res: Response) => {

};

const sendRegistrationInvitation = async (req: Request, res: Response) => {

};

const revokeRefreshToken = async (req: Request, res: Response) => {

};

const validateAccountVerification = async (req: Request, res: Response) => {

};

const resendAccountVerification = async (req: Request, res: Response) => {

};

const requestPasswordReset = async (req: Request, res: Response) => {

};

const resetPassword = async (req: Request, res: Response) => {

};

const changePassword = async (req: Request, res: Response) => {

};

export default (authRouter: Router): Router => {
  authRouter.post(LOGIN, login);
  authRouter.post(LOGOUT, logout);
  authRouter.post(REGISTRATION, registration);
  authRouter.post(SEND_REGISTRATION_INVITATION, sendRegistrationInvitation);
  authRouter.post(REVOKE_REFRESH_TOKEN, revokeRefreshToken);
  authRouter.post(VALIDATE_ACCT_VERIFICATION, validateAccountVerification);
  authRouter.post(RESEND_ACCT_VERIFICATION, resendAccountVerification);
  authRouter.post(REQUEST_PASSWORD_RESET, requestPasswordReset);
  authRouter.post(RESET_PASSWORD, resetPassword);
  authRouter.post(CHANGE_PASSWORD, changePassword);

  return authRouter;
};
