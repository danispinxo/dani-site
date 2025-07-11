# Generic Pronoun: Dani Spinosa's Creative and Scholarly Work Website

## Stack

- React 18
- Next.js
- ESlint
- Prettier
- Supabase database

## Libraries

- SASS
- Material UI
- Fontawesome
- Bootstrap / React Bootstrap
- React DOM / React Router Dom
- React Fast Marquee

## Digital Poems

### All You Hold

- Simple JavaScript poem randomly selects emojis from two arrays
- Updates at a 4000 ms interval to replace the emojis in the poem's line "If all you hold is a \_**\_, everything looks like a \_\_**"

### Form

- Writing by Andy Weaver
- Programming by Dani Spinosa!
- Pressing a button randomly adds a line from a prewritten array, formatted according to selected font typefaces and sizes
- Poem expands indefinitely based on button presses

### When

- Co-written with Andy Weaver and a crowd-sourced lexicon
- On each render, poem replaces words in Weaver's original with poems in arrays divided by position
- Each render is different with Chat GPT telling me there are 14,016,852,913,029,120,000,000 (14 septillion) possible variations of the poem
- Poem now stores the value of the blanks in a Supabase database
- Eventual goal is the addition of a form that a user can fill out to add more words to the lexicon, having the poem and its possible variations growing indefinitely

### Swift Sonnets

- 13-line sonnet generator made from Taylor Swift lyrics
- Originally published in the journal _Taper_ volume 13 on Superstitions
- Uses three arrays of Taylor Swift lyric fragments (labeled A, B, and C lines)
- JavaScript randomly shuffles and selects lines to create unique 13-line sonnets following the pattern: A-B-A-B-A-B-A-B-A-B-A-B-C
- Each generation creates a completely new sonnet combination
- Interactive "again" button allows users to regenerate infinite variations
