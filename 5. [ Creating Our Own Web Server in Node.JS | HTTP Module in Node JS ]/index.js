{
  /*
    To acces web pages of any web application, we need a web server. The web server will handle all the http request for web application.
    Eg:  Apache is a web server for php or java web application.

!    Node js provide capabilities to create your own web server which will handle Http request asynchronously.

*/
}

// To create HTTP servers we need to import "http module " , which provides functionality for creating HTTP servers and handling HTTP requests and responses.

const http = require("http");

// Now create an HTTP server using the  " http.createServer method " . This method takes one callback function with two arguments: req (the request object) and res (the response object).

const server = http.createServer((req, res) => {
  res.end("Hello from other side");
  // Send "Hello" as the response
});

const port = 8000; // The server will listen on this port for incoming HTTP requests.

server.listen(port, () => {
  console.log(`Server is runnig on http port number ${port}`);
});

{
  /*
     Above code starts the server and listens on the specified port (8000 in this case). 
    When the server is successfully started, it executes the callback function,
    which logs a message to the console indicating that the server is running.
*/
}
