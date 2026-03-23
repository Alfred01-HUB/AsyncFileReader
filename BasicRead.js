import { readFile } from 'fs/promises';

async function readTextFile(path) {
  const content = await readFile(path, 'utf-8');
  return content;
}

const text = await readTextFile('./data.txt');
console.log(text);
