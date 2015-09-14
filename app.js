var express = require("express");
var cookieParser = require("cookie-parser");
var bodyParser = require('body-parser');
var app = express();
app.use(express.static('public'));
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());

app.get("/", function (req, res) {
  res.sendfile("public/index.html");
});

// The destination of the login form
app.post("/feed", function (req, res) {
  // req.cookies.currentUser = req.body.username;
  // cookieParser.parse("username=" + req.body.username);

  // save a cookie with the key `username` and value req.body.username
  res.cookie('username', req.body.username);
  console.log(req.body.username);
  res.sendfile("public/all.html");
});

app.get("/feed", function (req, res) {
  res.sendfile("public/all.html");
});

// output all the cookies to the browser
app.get("/cookies", function(req, res) {
  // req.cookies.flavor = "oreo";
  res.send(req.cookies);
});

// output all the app.locals to the browser
app.get("/locals", function(req, res) {
  res.send(req.app.locals)
})

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);
});
