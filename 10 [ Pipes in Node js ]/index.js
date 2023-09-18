const fs = require("fs");

const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
  //!----------------------------First Way ----------------------------

  // const rstream=fs.createReadStream('input.txt');

  // rstream.on('data',(chunkdata)=>{
  //    res.end(chunkdata);
  // });

  //!---------------------------- Second Way  ------------------------

  const readableStream = fs.createReadStream("input.txt");
  readableStream.pipe(res);
});

{/*
  1. Stream pipes in Node.js allow you to connect two streams together so that the data flowing through one stream to the other stream.
  2. Streams allow you to read or write data in chunks, rather than loading the entire data into memory at once. 
  
  3. Example : 
  
       const fs = require('fs');
     
    // Create a readable stream from a file
       const readableStream = fs.createReadStream('input.txt');

    // Create a writable stream to a file
       const writableStream = fs.createWriteStream('output.txt');

    // Connect the readableStream and writableStream through pipe
       readableStream.pipe(writableStream);

    // This will copy the contents of input.txt to output.txt

*/}

server.listen(8000, () => {
  console.log("File Read SuccesFully");
});
