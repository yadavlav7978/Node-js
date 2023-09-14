// To create HTTP servers we need to import "http module " , which provides functionality for creating HTTP servers and handling HTTP requests and responses.

const http = require("http");

{
  /*  1. ' req.url ' is a property of the HTTP request object (req) .
     2.  req.url is used to determine which route to take based on the requested path. 
         If the path is /, it serves the homepage; if it's /about, it serves the about page;
         and for any other path, it returns a "Page not found" response.

     3.  The res.writeHead() method is used to set the HTTP response status code and headers. 
         The first argument is the status code, which is a 3-digit number that indicates the success or failure of the request. 
         The second argument is an object that contains the response headers. This headers is used to specify the content type, length, and other properties of the response.
         For example: the following code sets the response status code to 200 (OK) and the response headers indicate that the content is text/html type:
?                    res.writeHead(200, { 'Content-Type': 'text/html' });

         The res.writeHead() method can also be used to set a custom status message. The third argument is a string that contains the status message. 
         For example: the following code sets the response status code to 404 (Not Found) and the status message to "File not found":
?                    res.writeHead(404, 'File not found');

*/
}


const server = http.createServer((req, res) => {

  const url = req.url;

  if (url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome to Home pages");

  } else if (url === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome to About pages");

  } else if (url === "/contact") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome to Contact pages");

  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>Page Not Found!</h1>");
  }
});

const port = 8000;

server.listen(port, () => {
  console.log(`Server is runnig on http port number ${port}`);
});
