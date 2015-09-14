var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.locals.users = [];
app.locals.currentUser = "";
// req.app.locals.users.push(username);
// var username = req.params.user;

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: false}));

// app.get("/", function (req, res) {
//   res.sendfile("public/index.html");
// });

app.get("/login", function (req, res) {
  res.sendfile("public/login.html");
});

app.post("/user", function (req, res) {
  console.log("Hello");
  console.log(req.body);
  // app.locals.currentUser = req.body;
});

app.post("/user2", function (req, res) {
  console.log("Hola");
  console.log(req.body);
  res.end();
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);
});
