
const envVar = process.env;

const parseEnv = () => {
    const newKeys = Object.keys(envVar).map(each => 'RSS_' + each);
    const newVals = Object.values(envVar);
    newKeys.forEach((each, ndx) => console.log(each + '=' + newVals[ndx] + ';'));
};

parseEnv();



