import stream from 'node:stream';

const transform = async () => {
    const reversedStr = new stream.Transform({
        transform(chunk, encoding, callback) {
            callback(null, chunk.toString().split("").reverse().join("") + '\n');
        }
    });
    
    stream.pipeline(process.stdin, reversedStr, process.stdout,  (err) => {
        if (err) {
          console.error("An error occured in pipeline.", err);
        } else {
          console.log("Pipeline execcution successful");
        }
    });
};

await transform();