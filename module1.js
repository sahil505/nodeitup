var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var expressValidator = require('express-validator');

var app = express();

//middleware - its order is also important, if you place it after app.get then its not gonna work.
/*var logger = function(request, response, next){
  console.log('Got a request!');
  next();  
}

app.use(logger);
*/

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//body parser middleware 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Set Static Path
app.use(express.static(path.join(__dirname, 'public')));

// Global Vars
app.use(function(request, response, next){
	response.locals.errors = null;
	next();
});



// Express Validator Middleware
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));


var users = [
    {
      id: 1,
      first_name: 'Sahil',
      last_name: 'Khokhar',
      age: 20,
      email: 'sahilkhokhar505@gmail.com'
    },
    {
      id: 2,
      first_name: 'Nimish',
      last_name: 'Khokhar',
      age: 19,
      email: 'nimishkhokhar1997@gmail.com'
    },
    {
      id: 3,
      first_name: 'Sumit',
      last_name: 'Khokhar',
      age: 29,
      email: 'sumitkhokhar@gmail.com'
    },
    {
      id: 4,
      first_name: 'Vikas',
      last_name: 'Khokhar',
      age: 27,
      email: 'vikaskhokhar@gmail.com'
    }
]

//routehandler
app.get('/', function(request, response){
    response.render('index',{
      title: 'Express JS',
      users: users
    });
});

app.post('/users/add', function(request, response){
  
  request.checkBody('first_name', 'First Name is required!').notEmpty();
  request.checkBody('last_name', 'Last Name is required!').notEmpty();
  request.checkBody('email', 'Email is required!').notEmpty();

  var errors = request.validationErrors();

  if(errors){
      response.render('index',{
      title: 'Express JS',
      users: users,
      errors: errors
    });
  } else{
      var newUser = {
      first_name: request.body.first_name,
      last_name: request.body.last_name,
      email: request.body.email
    }
    console.log(newUser);
  }

});

//set port
app.listen(3000, function() {
  console.log("Server started on port 3000!");
});














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

// console.log(__dirname);
// console.log(__filename);

// var http = require("http");
// var fs = require("fs");

// //404 response
// function send404Response(response, request){
//   response.write("Error 404, site not found!");
//   console.log("Got a Request @" + request.url);
//   response.end();
// }

// function onRequest (request, response) {

  
//   if( request.method == 'GET' && request.url == '/'){
//     console.log("Got a request!");
//   response.writeHead(200, {"Context-Type": "text/html"});
//   fs.createReadStream("./index.html").pipe(response);
//   }
//   else{
//     send404Response(response, request);
//   }

// }

// http.createServer(onRequest).listen(3000);
// console.log("Server is now running!");


// var connect = require('connect');
// var http = require('http');

// var app = connect();

// function doFirst(request, response, next){
//   console.log("This is first!");
//   next();
// }

// function doSecond(request, response, next){
//   console.log("This is second!");
//   next();
// }

// app.use(doFirst);
// app.use(doSecond);

// http.createServer(app).listen(3000);
// console.log("Server is now running!");


// var connect = require('connect');
// var http = require('http');

// var app = connect();

// function profile(request, response){
//   console.log("User requested profile!");
// }

// function about(request, response){
//   console.log("User requested about!");
// }

// function home(request, response){
//   console.log("User requested home!");
// }

// app.use('/profile', profile);
// app.use('/about', about);
// app.use('/', home);

// http.createServer(app).listen(3000);
// console.log("Server is now running!");


