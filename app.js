var express = require("express");
var cookieParser = require("cookie-parser");
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());

app.get("/", function (req, res) {
  // res.sendfile("public/all.html");
  res.sendfile("public/login.html");
});

app.get("/cookies", function(req, res) {
  req.cookies.flavor = "oreo";
  console.log("Cookies: ", req.cookies)
});

app.get("/locals", function(req, res) {
  res.send(req.app.locals)
})

// The destination of the login form
app.post("/feed", function (req, res) {
  req.cookies.currentUser = req.body.username;
  console.log("The current user is: " + req.cookies.currentUser);
  res.sendfile("public/all.html");
});

app.get("/login/:thing", function(req, res) {
  console.log(req.params.thing);
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);
});
