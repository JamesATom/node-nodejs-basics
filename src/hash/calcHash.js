import crypto from 'node:crypto';
import fsPromises from 'node:fs/promises';
import process from 'node:process';
import url from 'node:url';

const calculateHash = async () => {
    try {
        const filePath = new url.URL('./files/fileToCalculateHashFor.txt', import.meta.url);
        const content = await fsPromises.readFile(filePath, { encoding: 'utf-8' });
        const value = crypto.createHash('sha256').update(content, 'utf-8').digest('hex');
        process.stdout.write(value);
    } catch {
        throw new Error('FS operation failed');
    }
};

await calculateHash();