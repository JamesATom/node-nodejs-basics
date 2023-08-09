const argv = process.argv.slice(2);

const parseArgs = () => {
    const hashMap = {};
    while (argv.length > 0) {
        let key = argv.shift();
        let val = argv.shift();
        hashMap[key] = val;
    } 
    Object.entries(hashMap).forEach(([key, val]) => console.log(key, 'is', val));
};

parseArgs();

