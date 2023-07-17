import { NodePgDatabase, drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";
import * as schema from "./schema/index.ts";

const { DB_URL } = process.env

export const connectDB_postgres = async () => {
  const connectionString = DB_URL;

  const client = new Client({ connectionString });
  await client.connect();
  
  const db: NodePgDatabase<typeof schema> = drizzle(client, { schema });
  return db;
};
