function sendData() {
  console.log("HI");

  function callback(response) {
    console.log(response);
  };

  $.ajax("/user", {
		method: "POST",
		data: user,
		dataType: "json"
	}).done(callback);
};

var user = {"name": "Jeff"};

$(".loginButton").click(sendData);



// $http.post("/user", "Jeff").success(function(response) {
//   console.log(response);
// });
