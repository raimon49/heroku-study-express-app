var express = require('express'),
    app = express();

app.get('/', function(req, res) {
    res.send('Hello World!');
});

var port = process.env.PORT || 8800;
app.listen(port);
