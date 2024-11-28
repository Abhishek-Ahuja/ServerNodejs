const http = require('http');


const server = http.createServer((request, response) => {
   response.end("Response received at port 8080.")
})


server.listen(8080, () => {
   console.log("Server is listening at port 8080.")
})