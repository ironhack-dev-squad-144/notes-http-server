// To execute this file:
// $ node server.js
// To kill the server: Ctrl+C

// Save in the variable `http` the package 'http'
const http = require("http");

// Everytime we do a request to our server (http://localhost:3000)
// the following function is executed.
// The 1st parameter represents information about the request
// The 2nd parameter represents information about the response
const server = http.createServer((request, response) => {
  console.log(`Someone has requested ${request.url}`);

  if (request.url === "/") {
    response.write("Hello, world!");
  } else if (request.url === "/about") {
    response.write("This website was made by Maxence");
  } else {
    response.statusCode = 404;
    response.write("404 Page");
  }
  response.end();
});

// Launch the server on port 3000
server.listen(3000, () => {
  console.log("Server running on port 3000");
  console.log("It can be access by going to http://localhost:3000 or http://10.0.0.193:3000")
  // The value 10.0.0.193 can be accessed by typing in the terminal `$ ifconfig`
});
