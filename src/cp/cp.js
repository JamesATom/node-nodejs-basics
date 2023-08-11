import path from 'node:path';
import cp from 'node:child_process';
import { fileToUrl } from '../utils/utils.js';

const dirName = fileToUrl(import.meta.url);
const childModule = path.join(dirName, 'files', 'script.js');

const spawnChildProcess = async (args) => {
    cp.fork(childModule, args);
};

// Put your arguments in function call to test this functionality
spawnChildProcess([1, 2, 3]);
