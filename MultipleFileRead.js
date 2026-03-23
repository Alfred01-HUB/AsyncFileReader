import { readFile } from 'fs/promises';

const paths = ['a.txt', 'b.txt', 'c.txt'];

// Concurrent — all reads fire at once
const contents = await Promise.all(
  paths.map(p => readFile(p, 'utf-8'))
);

contents.forEach((text, i) => {
  console.log(`--- ${paths[i]} ---`);
  console.log(text);
});

// Sequential — one at a time (slower, use when order matters)
for (const p of paths) {
  const text = await readFile(p, 'utf-8');
  console.log(text);
}