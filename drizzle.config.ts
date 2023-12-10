import * as dotenv from "dotenv";
import type { Config } from "drizzle-kit";
import InfisicalClient from "infisical-node";
import { ISecretBundle } from "infisical-node/lib/types/models";
dotenv.config();

// const infisicalClient = new InfisicalClient({
//   token: "st.6575205528e460fdbe3fd2a7.fb921ce92a281542efbc85cfe4c7396e.56ab5b3d25636445726a9ac476833e46"
// });

// let DB_URL: ISecretBundle;
// const config: Config = {
//   schema: "./src/Database/schema/index.ts",
//   out: "./drizzle",
//   driver: "pg",
//   dbCredentials: { connectionString: "" },
// };

// infisicalClient.getSecret("NAME", {
//   environment: "dev",
//   path: "/",
//   type: "shared",
// }).then((data) => {
//   DB_URL = data;
//   config["dbCredentials"]["connectionString"] = DB_URL;
// });

// export default config;

const { DB_URL } = process.env;

export default {
  schema: "./src/Database/schema/index.ts",
  out: "./drizzle",
  driver: "pg",
  dbCredentials: { connectionString: DB_URL },
} as Config;