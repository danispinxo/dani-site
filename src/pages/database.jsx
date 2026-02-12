import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_DATABASE_URL;
const key = process.env.NEXT_PUBLIC_SUPABASE_KEY;

export default function DataPage() {
  const supabase = createClient(supabaseUrl, key);
  const [lexicon, setLexicon] = useState([]);
  const [contributors, setContributors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data: lexiconData, error: lexiconError } = await supabase
        .from("when_lexicon")
        .select("content, blank");

      if (lexiconError) console.error("Error fetching lexicon:", lexiconError);
      else setLexicon(lexiconData);

      const { data: contributorData, error: contributorError } = await supabase
        .from("when_contributors")
        .select("name");

      if (contributorError)
        console.error("Error fetching contributors:", contributorError);
      else
        setContributors(contributorData.map((contributor) => contributor.name));
    };

    fetchData();
  }, []);
  return (
    <div>
      <h1>Hello</h1>
      {contributors.map((name, i) => (
        <li key={i}>{name}</li>
      ))}

      {lexicon.map((name, i) => (
        <li key={i}>
          {name.content} = {name.blank}
        </li>
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  return { props: {} };
}
