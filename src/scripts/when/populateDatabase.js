import supabase from '../lib/supabaseClient';

const contributors = [
  { name: 'Andy Weaver' },
  { name: 'Dani Spinosa' },
  { name: 'Jesse Pajuaar' },
  { name: 'Alex Spinosa' },
  { name: 'Lisa Spinosa' },
  { name: 'Sagan Yee' },
  { name: 'Amanda Earl' },
  { name: 'Jay Miller' },
  { name: 'Moira Walsh' },
  { name: 'Claire Lacey' },
  { name: 'nina jane drystek' },
  { name: 'Conyer Clayton' },
  { name: 'Simon Brown' },
  { name: 'Jacqueline Valencia' },
  { name: 'Kyle Flemmer' },
  { name: 'Kavi Duvori' },
  { name: 'Geoffrey Nilson' },
  { name: 'Eric Schmaltz' },
  { name: 'Andrée-Anne Roussel' },
  { name: 'Elee Kraljii Gardiner' },
  { name: 'Ellen Chang-Richardson' },
];

async function populateWhenLexicon() {
  const supabase = createClient(supabaseUrl, key);
  try {
    const { data, error } = await supabase.from('when_lexicon').insert(lexicon);

    if (error) {
      console.error('Error inserting data:', error.message);
      return;
    }

    console.log('Data inserted successfully:', data);
  } catch (err) {
    console.error('Error:', err);
  }
}

populateWhenLexicon();
