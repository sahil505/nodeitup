- what is NodeJS?

a simple answer is the makers of nodejs took js that normally runs on the browser and allowed it to run on your machine. now the google chromes v8 engine runs on your machine.

- what do you do with it?
 - utilities on your machine
 - a web server (express, koa)

 - some super-basics
  - how modules work
  - npm modules
  - make a basic web server

- how to know about the version of node that you havbe installed on your system?
 - type node -v in your cmd and press enter.

- to begin a process type node and press enter.

- npm
 - run npm install underscore
 - run npm install underscore -S
 - run npm init to generate a package.json file
 - run npm install backbone
 - you will noe see node_modules folder in your directory.
  - run npm init and keep on pressing enter
  - run npm install backbone -S
  - run npm install underscore -S
  - you'll now see underscore and backbone as dependencies in your package.json.
  - if you delete your node_modules folder just run the command npm install it will get it back

- http package (basic web-server)
 - it comes built in inside node
 - 

- We know that js code runs on our browser console. While for nodejs it runs on our command prompt/bash i:e on our server.

- nodejs is incredibly fast and efficient for real time applications such as social network websites where a lot of requests come in at onece so nodejs can handle them better and more efficiently by taking way less time to respond.

- in nodejs everything is a reference. check one of the commits to see in detail.

- mystery behind '==' & '===' signs. '==' are used when you are comparing the number values of two quatities. for eg: 19 == '19', this is gonna return true. Whereas '===' are used to compare values as well as types. for eg 19 = "19" is gonna return false.

-prototyping
 - you can add functions to objects from outside the object as well, to any object whatsoever.
 - you can add properties to objects from outside the object.

-object-factory
 - an object that creates other objects or that returns objects.
 - this is used to avoid sharing of objects in different modules.
 - each module can now have their own custom objects by using object-factory.

-ExpressJS
 - minimalistic, open source web framework for NodeJS
 - one of the most popular web framework of NodeJS, by far.
 - uses model view controller(MVC) concepts 