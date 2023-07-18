import { Request, Response } from "apollo-server-express/node_modules/@types/express/index";
import { IDatabase } from ".";
// import DataLoader from "dataloader";
import { NodePgDatabase } from "drizzle-orm/node-postgres";
import * as schema from "../Database/schema";

export interface IContext {
  accessToken?: string;
  db: IDatabase;
  db_postgres: NodePgDatabase<typeof schema>
  req: Request;
  res: Response;
  dataLoaders: any; // - TODO: -> How to strongly type an array of data loaders?
}
