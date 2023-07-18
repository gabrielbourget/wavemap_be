import { NodePgDatabase, drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import * as schema from "./schema/index.ts";

const { Client } = pg;

const {
  DB_URL, DB_DATABASE, DB_HOST, DB_PASSWORD,
  DB_PORT, DB_USER
} = process.env

export const connectDB = async () => {
  // const connectionString = DB_URL;

  // const client = new Client({ connectionString });
  const client = new Client({
    host: DB_HOST,
    user: DB_USER,
    port: parseInt(DB_PORT),
    password: DB_PASSWORD,
    database: DB_DATABASE
  })
  await client.connect();
  
  const db: NodePgDatabase<typeof schema> = drizzle(client, { schema });
  return db;
};
