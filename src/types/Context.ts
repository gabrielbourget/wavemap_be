import type { Request, Response } from "express";
import { NodePgDatabase } from "drizzle-orm/node-postgres";
import * as schema from "../database/schema/index.ts";

export interface IContext {
  accessToken?: string;
  db_postgres: NodePgDatabase<typeof schema>
  req: Request;
  res: Response;
}
