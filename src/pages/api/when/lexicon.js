import pool from "../../../lib/db";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { blank } = req.query;

  try {
    if (blank) {
      const { rows } = await pool.query(
        "SELECT content, blank FROM when_lexicon WHERE blank = $1",
        [blank],
      );
      return res.status(200).json(rows);
    }

    const { rows } = await pool.query("SELECT content, blank FROM when_lexicon");
    return res.status(200).json(rows);
  } catch (error) {
    console.error("Error fetching lexicon:", error);
    return res.status(500).json({ error: "Failed to fetch lexicon" });
  }
}
