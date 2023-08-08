import { fileToUrl } from "../utils/utils.js";
import fsPromises from 'node:fs/promises';
import path from 'node:path';

const dirName = fileToUrl(import.meta.url);
const oldFile = path.join(dirName, '/files/wrongFilename.txt');
const newFile = path.join(dirName, '/files/properFilename.md');

const rename = async () => {
    try {
        await fsPromises.rename(oldFile, newFile);
        console.log('FS operation succeeded');
    } catch(err) {
        throw new Error('FS operation failed');
    }
};

await rename();