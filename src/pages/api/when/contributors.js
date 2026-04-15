import pool from "../../../lib/db";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { rows } = await pool.query("SELECT name FROM when_contributors");

    return res.status(200).json(rows);
  } catch (error) {
    console.error("Error fetching contributors:", error);
    return res.status(500).json({ error: "Failed to fetch contributors" });
  }
}
