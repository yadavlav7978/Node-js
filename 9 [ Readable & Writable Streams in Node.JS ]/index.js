const fs = require("fs");

const http = require("http");

const server = http.createServer();

//   1.  Koi bhi server par request karega to callback Function execute hoga.
//   2.  When the server receives an HTTP request, it creates a new req and res object and passes them to the callback function.
//  3.   The req object contains information about the incoming HTTP request, such as the request method, URL, headers, and body.
//  4.   The res object is used to send a response back to the client.

// ! ---------- Below Code Not Read data in Streaming Format , it first load the data then show in the server ---------------------------

// server.on("request", (req, res) => {
//   fs.readFile("input.txt", "utf8", (err, data) => {
//     res.end(data);
//   });
// });

// server.listen(8000, () => {
//   console.log("File Read SuccesFully");
// });

//*--------------------------- Read the data in Streaming Format -----------------------------

{
  /*

 1. Streams are a powerful feature of Node.js that allow you to read and write data in chunks as it arrives.  
    In contrast of traditional programming languages, where you have to wait for the entire data set to be available before you can start processing it.

 2. Streams can be used to handle any type of data, including text, images, videos, and even network traffic.
   They are particularly useful for applications that need to process large amounts of data quickly, such as Youtube, Netflix, Hotstar etc.

 3. There are two main types of streams in Node.js: "readable" streams and "writable" streams. 
   a) Readable streams allow you to read data from a source, such as a file or a network socket.
   b) Writable streams allow you to write data to a destination, such as a file or a network socket.

 4. streams are event-driven, which mean that the stream will notify you when something happens, such as when new data is available, the stream has ended, or an error has occurred.
    Some Common Event is : 
    a) data :  This event is fired when there is data available to read.
    b) end :   This event is fired when there is no more data  to read .
    c) error : This event is fired when there is any error occur during reading and writing the data.
    d) finish : This event is fired when all data has been read or write succesfully.

*/
} 

server.on('request',(req,res)=>{
   
    // Create a readable stream for the file `input.txt`.
    const rstream=fs.createReadStream('input.txt');

    // Listen for the `data` event on the stream. 
    // Jaise Jaise data ata rhega 'data' event fire hota rhega. 

    rstream.on('data',(chunkdata)=>{
       res.end(chunkdata);       // Write the chunk of data to the server.
    });

});

server.listen(8000, () => {
  console.log("File Read SuccesFully");
});
