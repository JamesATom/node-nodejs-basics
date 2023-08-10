import zlib from 'node:zlib';
import fs from 'node:fs';
import path from 'node:path';
import stream from 'node:stream';

import { fileToUrl } from '../utils/utils.js';

const dirName = fileToUrl(import.meta.url);
const srcFile = path.join(dirName, 'files', 'archive.gz');
const desFile = path.join(dirName, 'files', 'fileToCompress.txt');

const unZip = zlib.createUnzip();
const input = fs.createReadStream(srcFile);
const output = fs.createWriteStream(desFile);

const decompress = async () => {
    stream.pipeline(input, unZip, output, (err) => {
        if (err) {
            console.log('An error occured: => ', err);
            process.exitCode = 1;
        } else {
            console.log('Operation was successful');
        }
    });
};

await decompress();