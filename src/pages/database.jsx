import { useEffect, useState } from "react";

export default function DataPage() {
  const [lexicon, setLexicon] = useState([]);
  const [contributors, setContributors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [lexiconResponse, contributorsResponse] = await Promise.all([
          fetch("/api/when/lexicon"),
          fetch("/api/when/contributors"),
        ]);

        if (!lexiconResponse.ok || !contributorsResponse.ok) {
          throw new Error("Failed to load database view");
        }

        const lexiconData = await lexiconResponse.json();
        const contributorData = await contributorsResponse.json();

        setLexicon(lexiconData);
        setContributors(contributorData.map((contributor) => contributor.name));
      } catch (error) {
        console.error("Error fetching database page data:", error);
      }
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
