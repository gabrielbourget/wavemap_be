import * as dotenv from "dotenv";
import express from "express";
// import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";

import router from "./routers/index.ts";
import { BASE_URL } from "./constants/routes.ts";
import { connectDB } from "./database/database.ts";
import { Artists } from "./database/schema/artists.ts";

// import {
//   AUTH_HEADER_KEY, REFRESH_TOKEN_COOKIE_KEY,
//   REFRESH_TOKEN_ROUTE, USER_DURING_TOKEN_REFRESH_ROUTE
// } from './constants';

dotenv.config();

const {
  SERVER_PORT, CLIENT_URL, COOKIE_SIGNING_SECRET
} = process.env;

(async () => {
  
  const app = express();

  const db = await connectDB();
  // const artistData = await db.select().from(Artists);
  // console.dir(artistData, { depth: null });
  
  app.use(cors({
    origin: CLIENT_URL,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "HEAD", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "credentials"]
  }));
  app.use(cookieParser(COOKIE_SIGNING_SECRET));
  app.use(compression());
  app.use(bodyParser.json());

  app.use(BASE_URL, router);
  
  // const server = http.createServer(app);
  app.listen(SERVER_PORT, () => console.log(`wavemap backend running on port ${SERVER_PORT}`));
})(); 
