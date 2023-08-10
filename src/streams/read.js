import process from 'node:process';
import fs from 'node:fs';
import path from 'node:path';
import { fileToUrl } from '../utils/utils.js';

const dirName = fileToUrl(import.meta.url);
const srcFile = path.join(dirName, 'files', 'fileToRead.txt');

const read = async () => {
    const content = fs.createReadStream(srcFile, { encoding: 'utf-8' });
    content.pipe(process.stdout);
};

await read();