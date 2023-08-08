import fsPromises from 'node:fs/promises';
import fs from 'node:fs';
import { fileToUrl } from "../utils/utils.js";

const dirName = fileToUrl(import.meta.url);

const copy = async () => {
    console.log('hello world: ', dirName);
    try {
        await fsPromises.access(dirName + '/files', fs.constants.R_OK);
        fs.access(dirName + '/files_copy', (err) => {
            if (err) {
                fs.cp(dirName + '/files', dirName + '/files_copy', { recursive: true }, (err) => {
                    if (!err) {
                        throw new Error('FS operation failed')
                    }
                });
            } else {
                throw new Error('FS operation failed')
            }
        });
        console.log('FS operation succeeded');
    } catch(err) {
        throw new Error('FS operation failed');
    }
};

copy();



// copy.js - implement function that copies folder files files with all its content into folder files_copy at the same level 
// (if files folder doesn't exists or files_copy has already been created Error with message FS operation failed must be thrown)