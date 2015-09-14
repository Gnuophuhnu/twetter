function sendData() {
  console.log("HI");
  $.post("/user", {name: "Jeff"})
};

$(".loginButton").click(sendData);



// $http.post("/user", "Jeff").success(function(response) {
//   console.log(response);
// });
