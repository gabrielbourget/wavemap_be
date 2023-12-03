import { NodePgDatabase, drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import * as schema from "./schema/index.ts";

const { Client } = pg;

const {
  DB_URL, DB_DATABASE, DB_HOST, DB_PASSWORD,
  DB_PORT, DB_USER
} = process.env

export const connectDB = async () => {

  try {
    console.log(`Start of try block`);
    const client = new Client({
      host: DB_HOST,
      user: DB_USER,
      port: parseInt(DB_PORT),
      password: DB_PASSWORD,
      database: DB_DATABASE
    });
    console.log(`DB HOST -> ${DB_HOST}`);
    console.log(`DB USER -> ${DB_USER}`);
    console.log(`DB PORT -> ${DB_PORT}`);
    console.log(`DB PASSWORD -> ${DB_PASSWORD}`);
    console.log(`DB DATABASE -> ${DB_DATABASE}`);
    // console.log(`After client creation: -> ${client}`);
    // console.dir(client, {depth: null})
    await client.connect();
    console.log(`After client connection`);
    
    const db: NodePgDatabase<typeof schema> = drizzle(client, { schema });
    console.log(`After ORM db instance creation: -> ${db}`);
    console.log(db);
    return db;
  } catch (err) {
    console.error(`Problem establishing database connection -> ${JSON.stringify(err, null, 3)}`);
  }
};

// const client = new Client({ connectionString: DB_URL! });
// await client.connect();