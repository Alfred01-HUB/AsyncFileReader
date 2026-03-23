import { createReadStream } from 'fs';
import { createInterface } from 'readline';

async function readLines(path, onLine) {
  const stream = createReadStream(path, { encoding: 'utf-8' });
  const rl = createInterface({ input: stream, crlfDelay: Infinity });

  for await (const line of rl) {
    await onLine(line);
  }
}

await readLines('./big.log', async (line) => {
  if (line.includes('ERROR')) console.log(line);
});