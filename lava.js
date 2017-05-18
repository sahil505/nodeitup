var movie = require("./module2");

var lavamovie = movie();
lavamovie.favMovie = "The notebook";
console.log("Lava's fave movie is " + lavamovie.favMovie);