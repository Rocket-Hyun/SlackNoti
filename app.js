var express = require('express');
var app = express();

var fs = require('fs');
var serviceKey = fs.readFileSync('./credentials/service_key.json');
var slackToken = JSON.parse(serviceKey)["slackToken"];

var Bot = require('slackbots');

// create a bot
var settings = { token: slackToken, name: 'noti' };
var bot = new Bot(settings);

app.get('/findMyPhone', function (req, res){
    bot.postMessageToChannel('general', 'Where is My Phone!');
    res.json({msg:"done"});
})


var http = require('http');
var port = 8080;
app.set('port', port);
var server = http.createServer(app);
server.listen(port);