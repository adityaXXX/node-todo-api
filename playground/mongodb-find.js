//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', function(err, db){
  if(err){
    return console.log("Unable to connect to MongoDB server");
  }
  console.log("Connected to MongoDB Server");
/*
db.collection("Todos").find({_id : new ObjectID('5851a98b291d561824eb5b98')}).toArray().then(function(docs){
  console.log("Todos");
  console.log(JSON.stringify(docs, undefined, 2));
}, function(err){
  console.log("Unable to fetch Todos");
});
*/

/*
db.collection("Todos").find().count().then(function(count){
  console.log(`Todos : ${count}`);
}, function(err){
  console.log("Unable to fetch todos");
});
*/

db.collection("User").find({name : "Aditya"}).count().then(function(count){
  console.log(`Todos : ${count}`);
}, function(err){
  console.log("Unable to find Todos");
});

  //db.close();
});
