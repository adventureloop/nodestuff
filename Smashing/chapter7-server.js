//Load the http module

var http = require('http');

var server = http.createServer(
	function (request,response) 
	{
		response.writeHead(200,{"Content-Type":"text/html"});
		response.end("<html><p><strong>Hello</strong> world</p></html>\n");
	}	
);

server.listen(8000);

console.log("Server running at http://127.0.0.1:8000/");
