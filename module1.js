// var m2 = require('./module2');
// m2();
// var person = {
// 	firstName : "Sahil",
// 	lastName : "Khokhar",
// 	age : 20
// };

// console.log(person);

// function addnumbers(a, b){
// 	return a + b;
// }

// console.log(addnumbers(2, 3));

// var printBacon = function(){
// 	console.log("Hey there, what is up?");
// };

// printBacon();
// setTimeout(printBacon, 5000);

// function placeOrder (orderNumber) {

// 	console.log("Customer order number:", orderNumber);

// 	cookAndDeliverFood(function(){
// 		console.log("Delivered food order number:", orderNumber);
// 	})
// }


// //Simulate a 5 sec operation
// function cookAndDeliverFood(callback){
// 	setTimeout(callback, 5000);
// }

// placeOrder(1);
// placeOrder(2);
// placeOrder(3);
// placeOrder(4);
// placeOrder(5);

  var person = {
  	favFood: "cookies",
  	favCity: "london"
  };

  var person1 = person;//this is not creating a copy, it is just reffering to that particular obeject

  person1.favFood = "sandwhich";
  console.log(person.favFood);
