import * as schema from "./schema";
import { drizzle as drizzlePg, type NodePgDatabase } from "drizzle-orm/node-postgres";
import { drizzle as drizzlePglite, type PgliteDatabase } from "drizzle-orm/pglite";
import { Pool } from "pg";
import { PGlite } from "@electric-sql/pglite";
import path from "path";
import fs from "fs";

declare global {
  var __db: PgliteDatabase<typeof schema> | NodePgDatabase<typeof schema> | undefined;
  var __pglite_client: PGlite | undefined;
}

const isPostgresUrl = (url?: string) => Boolean(url && (url.startsWith("postgresql://") || url.startsWith("postgres://")) && !url.includes("placeholder"));

function initDb() {
  const databaseUrl = process.env.DATABASE_URL;
  if (isPostgresUrl(databaseUrl)) {
    const pool = new Pool({ connectionString: databaseUrl });
    return drizzlePg(pool, { schema });
  }
  if (!global.__pglite_client) {
    const dataDir = path.join(process.cwd(), "data", "jalchakra_pglite");
    if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
    global.__pglite_client = new PGlite(dataDir);
  }
  return drizzlePglite(global.__pglite_client, { schema });
}

export function getDb(): PgliteDatabase<typeof schema> | NodePgDatabase<typeof schema> {
  if (!global.__db) global.__db = initDb();
  return global.__db;
}

export const db = new Proxy({} as PgliteDatabase<typeof schema> & NodePgDatabase<typeof schema>, {
  get(_target, prop) {
    const instance = getDb() as any;
    const value = instance[prop];
    return typeof value === "function" ? value.bind(instance) : value;
  },
});

export type DB = ReturnType<typeof getDb>;
