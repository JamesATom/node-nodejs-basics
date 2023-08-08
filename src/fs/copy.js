import fs from 'node:fs';
import { fileToUrl } from "../utils/utils.js";

const dirName = fileToUrl(import.meta.url);

const copy = async () => {
    console.log('hello world: ', dirName);
};

copy();



// copy.js - implement function that copies folder files files with all its content into folder files_copy at the same level 
// (if files folder doesn't exists or files_copy has already been created Error with message FS operation failed must be thrown)