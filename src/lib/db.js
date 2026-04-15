import { Pool } from "pg";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL is required");
}

const globalForDb = globalThis;

const pool =
  globalForDb.pgPool ||
  new Pool({
    connectionString,
    ssl:
      process.env.NODE_ENV === "production"
        ? { rejectUnauthorized: false }
        : false,
  });

if (process.env.NODE_ENV !== "production") {
  globalForDb.pgPool = pool;
}

export default pool;
