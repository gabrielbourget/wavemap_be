import * as dotenv from "dotenv";
import type { Config } from "drizzle-kit";
dotenv.config();

const { DB_URL } = process.env;

export default {
  // schema: [
  //   "./src/Database/schema/artists", "./src/Database/schema/events",
  //   "./src/Database/schema/eventSeries", "./src/Database/schema/joinTables",
  //   "./src/Database/schema/users", "./src/Database/schema/utils",
  //   "./src/Database/schema/venues",
  // ],
  schema: "./src/Database/schema/*",
  out: "./drizzle",
  driver: "pg",
  dbCredentials: { connectionString: DB_URL! },
} satisfies Config;