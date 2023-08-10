import fs from 'node:fs';
import path from 'node:path';
import { fileToUrl } from '../utils/utils.js';

const dirName = fileToUrl(import.meta.url);
const srcFile = path.join(dirName, 'files', 'fileToRead.txt');

const read = async () => {
    const logChunksOfFile = async (chunks) => {
        for await (let chunk of chunks) {
            console.log(chunk);
        }
    } 

    const chunkContent = fs.createReadStream(srcFile, { encoding: 'utf-8' });
    logChunksOfFile(chunkContent);
};

await read();