import * as fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';
import { writeFile } from 'node:fs/promises';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const filename = path.join(__dirname, 'files', 'fresh.txt');
const data = 'I am fresh and young';

const create = async () => {
    try {
        await writeFile(filename, data, { flag: 'wx+' });
    } catch(err) {
        throw new Error('FS operation failed');
    }
};

await create();