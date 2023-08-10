import stream from 'node:stream';

const transform = async () => {
    process.stdin.pipe(new stream.Transform({
        transform(chunk, encoding, callback) {
            callback(null, chunk.toString().split("").reverse().join(""));
        }
    })).pipe(process.stdout);
};

await transform();