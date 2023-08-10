import process from 'node:process';
import fs from 'node:fs';
import path from 'node:path';
import { fileToUrl } from '../utils/utils.js';

const dirName = fileToUrl(import.meta.url);
const desFile = path.join(dirName, 'files', 'fileToWrite.txt');

const write = async () => {
    const writerStream = fs.createWriteStream(desFile, { encoding: 'utf-8' });
    // process.stdin.on('data', chunk => writerStream.write(chunk));
    process.stdin.pipe(writerStream);
};

await write();