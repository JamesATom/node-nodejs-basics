import worker from 'node:worker_threads';
import os from 'node:os';
import path from 'node:path';

import { fileToUrl } from '../utils/utils.js';

const dirName = fileToUrl(import.meta.url); 
const workerScript = path.join(dirName, 'worker.js');
const START_VAL = 10;

const performCalculations = async () => {
    const newWorkerCreator = (num) => {
        return new Promise((resolve, reject) => {
            const newWorker = new worker.Worker(workerScript, { workerData: num });

            newWorker.on('message', (data) => {
                return resolve({ status: 'resolved',  data: data });
            });

            newWorker.on('error', () => {
                return resolve({ status: 'error', data: null });
            });
        });
    }

    const pendingResult = Array.from({ length: os.availableParallelism() }, (_, ndx) => newWorkerCreator(START_VAL + ndx));
    const finalResult = await Promise.all(pendingResult)
    console.log('Result: ', finalResult);
};

await performCalculations();