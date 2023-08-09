import fsPromises from 'node:fs/promises';
import { fileToUrl } from '../utils/utils.js';

const dirName = fileToUrl(import.meta.url); 

const list = async () => {
    console.log(dirName);
    try {
        const files = await fsPromises.readdir(dirName + '/files');
        console.log('FS operation successful');
        for (let file of files) 
            console.log(file);
    } catch {
        throw new Error('FS operation failed');
    }
};

await list();