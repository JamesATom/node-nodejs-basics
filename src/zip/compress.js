import zlib from 'node:zlib';
import fs from 'node:fs';
import path from 'node:path';
import stream from 'node:stream';

import { fileToUrl } from '../utils/utils.js';

const dirName = fileToUrl(import.meta.url);
const srcFile = path.join(dirName, 'files', 'fileToCompress.txt');

const compress = async () => {
    const input = fs.createReadStream(srcFile, { encoding: 'utf-8' });
    const output = fs.createWriteStream(path.join(dirName, 'files', 'archive.gz'), { encoding: 'utf-8' });
    const gzip = zlib.createGzip();

    stream.pipeline(input, gzip, output, (err) => {
        if (err) {
            console.log('An error occured: => ', err);
            process.exitCode = 1;
        } else {
            console.log('Operation was successful');
        }
    })
};

await compress();