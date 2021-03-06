const express = require("express");

const app = express();

app.get('/', function(request, response) {
	response.json({
		hello: "World"
	});
});

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});