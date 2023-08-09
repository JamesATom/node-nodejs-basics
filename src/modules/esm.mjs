import path from 'node:path';
import { release, version } from 'node:os';
import { createServer as createServerHttp } from 'node:http';
import { createRequire } from 'node:module';
import { fileToUrl, getFileName } from '../utils/utils.js';

const require = createRequire(import.meta.url);
import './files/c.js';
const random = Math.random();
let unknownObject;
// console.log('Import Meta Url: ', import.meta.url);
if (random > 0.5) {
    unknownObject = require('./files/a.json');
} else {
    unknownObject = require('./files/b.json');
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${getFileName(import.meta.url)}`);
console.log(`Path to current directory is ${fileToUrl(import.meta.url)}`);

const myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log('Unknown Object: ', unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

export {
    unknownObject,
    myServer,
};

