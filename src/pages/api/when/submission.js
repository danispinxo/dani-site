import pool from "../../../lib/db";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { contributor, entries } = req.body || {};

  if (!contributor || !Array.isArray(entries) || entries.length === 0) {
    return res.status(400).json({ error: "Invalid submission payload" });
  }

  const client = await pool.connect();

  try {
    await client.query("BEGIN");

    await client.query("INSERT INTO when_contributors(name) VALUES($1)", [
      contributor,
    ]);

    for (const entry of entries) {
      if (!entry?.blank || !entry?.content) continue;

      await client.query(
        "INSERT INTO when_lexicon(blank, content) VALUES($1, $2)",
        [entry.blank, entry.content],
      );
    }

    await client.query("COMMIT");
    return res.status(200).json({ ok: true });
  } catch (error) {
    await client.query("ROLLBACK");
    console.error("Error saving submission:", error);
    return res.status(500).json({ error: "Failed to save submission" });
  } finally {
    client.release();
  }
}
