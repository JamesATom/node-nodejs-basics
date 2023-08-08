import fsPromises from 'node:fs/promises';
import path from 'node:path';
import { fileToUrl } from '../utils/utils.js';


const dirName = fileToUrl(import.meta.url);
const srcDir = path.join(dirName, '/files');
const desDir = path.join(dirName, '/files_copy');

const copy = async () => {
    try {
        await fsPromises.cp(srcDir, desDir, { recursive: true, force: false, errorOnExist: true });
        console.log('FS operation succeeded');
    } catch(err) {
        throw new Error('FS operation failed');
    }
};

await copy();
