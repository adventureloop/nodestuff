var qs = require('querystring');

require('http').createServer(
	function (request,response) 
	{
		if(request.url == '/') 	
			showForm(response);
		else if(request.url == '/url')
			showSubmit(response,request);
		else {
			response.writeHead(404);
			response.end('Not Found');
		}
	}
).listen(8000);

function showForm(response)
{
	response.writeHead(200,{'Content-Type':'text/html'});
	response.end([
		'<html><form method="POST" action="/url">',
		'<h1>My form</h1>',
			'<fieldset>',
			'<label>Personal Information</label>',
			'<p>What is your name?</p>',
			'<input type="text" name="name">',
			'<p><button>Submit</button></p>',
		'</form>'
	].join(''));
}

function showSubmit(response,request)
{
	var body = '';
	request.on('data',function(chunk) { body += chunk } );

	request.on('end',
	function() 
	{
		response.writeHead(200,{'Content-Type':'text/html'});
		response.end('<html><p>You say your name is <strong>' +
							qs.parse(body).name +
							'</strong>' +
							'</p></html>');
	});
}
