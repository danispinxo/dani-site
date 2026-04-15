import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { Client } from "pg";
import { contributors, lexiconEntries } from "./seedData.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "../../..");

const loadEnvFile = (filename) => {
  const envPath = path.join(projectRoot, filename);
  if (!fs.existsSync(envPath)) return;

  const fileContents = fs.readFileSync(envPath, "utf8");
  for (const line of fileContents.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const equalsIndex = trimmed.indexOf("=");
    if (equalsIndex === -1) continue;

    const key = trimmed.slice(0, equalsIndex).trim();
    let value = trimmed.slice(equalsIndex + 1).trim();

    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    if (!(key in process.env)) {
      process.env[key] = value;
    }
  }
};

loadEnvFile(".env.local");
loadEnvFile(".env");

const connectionString = process.env.DATABASE_URL;
const shouldReset = process.argv.includes("--reset");

if (!connectionString) {
  console.error("DATABASE_URL is missing. Set it in .env.local, .env, or shell.");
  process.exit(1);
}

const client = new Client({ connectionString });

const createTables = async () => {
  await client.query(`
    CREATE TABLE IF NOT EXISTS when_contributors (
      id BIGSERIAL PRIMARY KEY,
      name TEXT NOT NULL UNIQUE,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );
  `);

  await client.query(`
    CREATE TABLE IF NOT EXISTS when_lexicon (
      id BIGSERIAL PRIMARY KEY,
      blank TEXT NOT NULL,
      content TEXT NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );
  `);

  await client.query(`
    CREATE UNIQUE INDEX IF NOT EXISTS when_lexicon_blank_content_unique
      ON when_lexicon (blank, content);
  `);
};

const seedContributors = async () => {
  for (const contributor of contributors) {
    await client.query(
      `
        INSERT INTO when_contributors (name)
        VALUES ($1)
        ON CONFLICT (name) DO NOTHING
      `,
      [contributor],
    );
  }
};

const seedLexicon = async () => {
  for (const entry of lexiconEntries) {
    await client.query(
      `
        INSERT INTO when_lexicon (blank, content)
        VALUES ($1, $2)
        ON CONFLICT (blank, content) DO NOTHING
      `,
      [entry.blank, entry.content],
    );
  }
};

const main = async () => {
  await client.connect();

  try {
    await client.query("BEGIN");
    await createTables();

    if (shouldReset) {
      await client.query("TRUNCATE TABLE when_lexicon, when_contributors RESTART IDENTITY");
      console.log("Reset tables before seeding.");
    }

    await seedContributors();
    await seedLexicon();
    await client.query("COMMIT");

    const contributorsCount = await client.query(
      "SELECT COUNT(*)::int AS count FROM when_contributors",
    );
    const lexiconCount = await client.query(
      "SELECT COUNT(*)::int AS count FROM when_lexicon",
    );

    console.log(`Contributors total: ${contributorsCount.rows[0].count}`);
    console.log(`Lexicon entries total: ${lexiconCount.rows[0].count}`);
    console.log("When database seeding complete.");
  } catch (error) {
    await client.query("ROLLBACK");
    console.error("Failed to seed when database:", error);
    process.exitCode = 1;
  } finally {
    await client.end();
  }
};

await main();
