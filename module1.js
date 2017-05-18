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

  // var person = {
  // 	favFood: "cookies",
  // 	favCity: "london"
  // };

  // var person1 = person;//this is not creating a copy, 
  // //it is just reffering to that particular object

  // person1.favFood = "sandwhich";
  // console.log(person.favFood);

  // console.log(5+3 == "8");
  // console.log(8 === "8");

//   var sahil = {

//   	printFirstName: function(){
//   		console.log("My name is Sahil");
//   		console.log(this === sahil);//this is referrence to 
//       //whatever thing is calling it! In this case sahil object is calling it
//   	}

//   };

//   sahil.printFirstName();

// //default calling context is global
//   function dosomething(){
//     console.log("My second name is khokhar");
//     console.log(this === global);
//   }

// dosomething();

// function User(){
//   this.name = "";
//   this.life = 100;
//   this.giveLife = function giveLife(targetPlayer){
//     targetPlayer.life += 1;
//     console.log(this.name + " gave 1 life to " + targetPlayer.name);
//   }
// }

// var sahil = new User();
// var lava = new User();

// sahil.name = "Sahil"
// lava.name = "Lavanya"

// sahil.giveLife(lava);
// console.log("Sahil Lives: " + sahil.life);
// console.log("Lavanya Lives: " + lava.life);

// //You can add functions to all objects
// User.prototype.uppercut = function uppercut(targetPlayer){
//   targetPlayer.life -= 3;
//   console.log(this.name + " just uppercutted " + targetPlayer.name);
// }

// sahil.uppercut(lava);
// console.log("Sahil Lives: " + sahil.life);
// console.log("Lavanya Lives: " + lava.life);

// //you can add properties to all objects
// User.prototype.magic = 60;
// console.log(sahil.magic);
// console.log(lava.magic);

// function User(){
//   this.name = "";
//   this.life = 100;
//   this.giveLife = function giveLife(targetPlayer){
//     targetPlayer.life += 1;
//     console.log(this.name + " gave 1 life to " + targetPlayer.name);
//   }

// }

// var sahil = new User();
// var lava = new User();

// sahil.name = "sahil";
// lava.name = "lava";

// sahil.giveLife(lava);

// console.log("Sahil's lives: " + sahil.life);
// console.log("Lavanya's lives: " + lava.life);

// User.prototype.uppercut = function uppercut(targetPlayer){
//   targetPlayer.life -= 3;
//   console.log(this.name + " just uppercutted " + targetPlayer.name);
// }

// lava.uppercut(sahil);
// console.log("Sahil's lives: " + sahil.life);
// console.log("Lavanya's lives: " + lava.life);

// User.prototype.magic = 60;

// console.log(sahil.magic);
// console.log(lava.magic);

// var module2 = require("./module2");
// module2.printMovie1();
// module2.printMovie2();
// console.log(module2.var);

// require("./sahil");
// require("./lava");

// var fs = require("fs");

// fs.writeFileSync("Corn.txt", "Corn is good for health");
// console.log(fs.readFileSync("Corn.txt").toString());

// var path = require("path");

// var webisteHome = "Desktop/Sahil//coding_projects/nodeitup/module2.js";
// var webisteAbout = "Desktop/Sahil/coding_projects/nodeitup/module1.js";

// console.log(path.normalize(webisteHome));
// console.log(path.normalize(webisteAbout));
// console.log(path.dirname(webisteAbout));
// console.log(path.basename(webisteAbout));
// console.log(path.extname(webisteAbout));

// setInterval(function(){
//   console.log("Fuck You!!")

// }, 2000)

console.log(__dirname);
console.log(__filename);

