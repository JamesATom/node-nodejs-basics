import process from 'node:process';
import fs from 'node:fs';
import path from 'node:path';
import { fileToUrl } from '../utils/utils.js';

const dirName = fileToUrl(import.meta.url);
const srcFile = path.join(dirName, 'files', 'fileToRead.txt');

const read = async () => {
    const contentStream = fs.createReadStream(srcFile, { encoding: 'utf-8' });
    let data = '';
    contentStream.on('data', chunk => process.stdout.write(chunk));
    // contentStream.on('data', (chunk) => {
    //     data += chunk;
    // });
    // contentStream.on('end', () => {
    //     console.log(data);
    // });
    contentStream.on('error', (err) => {
        console.log('FS operation error: => ', err);
    });
};

await read();