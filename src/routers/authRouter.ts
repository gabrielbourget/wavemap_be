import { Router, Request, Response } from "express";

import {
  LOGIN, LOGOUT, REGISTRATION, SEND_REGISTRATION_INVITATION,
  REVOKE_REFRESH_TOKEN, VALIDATE_ACCT_VERIFICATION, RESEND_ACCT_VERIFICATION,
  REQUEST_PASSWORD_RESET, RESET_PASSWORD, CHANGE_PASSWORD
} from "src/constants/index.ts";

const authRouter = Router();

authRouter.route(LOGIN).post(async (req: Request, res: Response) => {

});

authRouter.route(LOGOUT).post(async (req: Request, res: Response) => {
  
});

authRouter.route(REGISTRATION).post(async (req: Request, res: Response) => {

});

authRouter.route(SEND_REGISTRATION_INVITATION).put(async (req: Request, res: Response) => {

});

authRouter.route(REVOKE_REFRESH_TOKEN).post(async (req: Request, res: Response) => {

});

authRouter.route(VALIDATE_ACCT_VERIFICATION).post(async (req: Request, res: Response) => {

});

authRouter.route(RESEND_ACCT_VERIFICATION).post(async (req: Request, res: Response) => {

});

authRouter.route(REQUEST_PASSWORD_RESET).post(async (req: Request, res: Response) => {

});

authRouter.route(RESET_PASSWORD).post(async (req: Request, res: Response) => {

});

authRouter.route(CHANGE_PASSWORD).patch(async (req: Request, res: Response) => {

});

export default authRouter;
