const fs = require('node:fs');
const path = require('node:path');

const folderName = '/files/fresh.txt';

const create = async () => {
    new Promise((resolve, reject) => {
        if (fs.existsSync(__dirname + folderName)) {
            resolve(true);
        } else {
            fs.appendFile(__dirname + folderName, 'I am fresh and young', (err) => {
                if (err) {
                    throw err;
                }
            })
        }
    }).then((res) => {
        if (res == true) {
            throw new Error('FS operation failed');
        }
    }).catch((rejected) => {
        console.log(rejected);
    });
};

create();