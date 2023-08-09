import fsPromises from 'node:fs/promises';
import { fileToUrl } from '../utils/utils.js';
import path from 'node:path';

const dirName = fileToUrl(import.meta.url); 
const srcFile = path.join(dirName, 'files', 'fileToRead.txt');

const read = async () => {
    try {
        const content = await fsPromises.readFile(srcFile, { encoding: 'utf-8' });
        console.log('FS operation successful');
        console.log(content);
    } catch {
        throw new Error('FS operation failed');
    }
};

await read();