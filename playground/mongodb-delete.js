//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', function(err, db){
  if(err){
    return console.log("Unable to connect to MongoDB server");
  }
  console.log("Connected to MongoDB Server");

//deleteMany
// db.collection("Todos").deleteMany({text : "go to sleep"}).then(function(result){
//   console.log(result);
// });

//deleteOne
// db.collection("Todos").deleteOne({text : "go to sleep"}).then(function(result){
//   console.log(result);
// });

//findOneAndDelete
// db.collection("Todos").findOneAndDelete({completed : false}).then(function(result){
//   console.log(result);
// });

//practice1
// db.collection("User").deleteMany({name : "Aditya"}).then(function(result){
//   console.log(result);
// });

//practice2
db.collection("User").deleteOne({_id : new ObjectID('5852f80d0c90c507a09ad8e4')}).then(function(result){
  console.log(result);
});


  //db.close();
});
