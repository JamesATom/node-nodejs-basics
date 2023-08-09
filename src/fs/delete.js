import fsPromises from 'node:fs/promises';
import { fileToUrl } from '../utils/utils.js';
import path from 'node:path';

const folderName = fileToUrl(import.meta.url);
const fileToRemove = path.join(folderName, '/files/fileToRemove.txt');

const remove = async () => {
    try {
        await fsPromises.unlink(fileToRemove);
        console.log('FS operation successful');
    } catch {
        throw new Error('FS operation failed');
    }
};

await remove();