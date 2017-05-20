const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', function(err, db){
  if(err){
    return console.log("Unable to connect to MongoDB server");
  }
  console.log("Connected to MongoDB Server");


db.collection('todos').insertOne({
  text : "I am awesome.",
  completed : false
}, function(err, result){
  if(err){
    return console.log("Unable to insert todo", err);
  }

  console.log(JSON.stringify(result.ops, undefined, 2));
});

db.collection('users').insertOne({
  name : "Aditya Kumar",
  age : 20,
  location : "lko"
}, function(err, result){
  if(err){
    return console.log("Unable to insert todo", err);
  }

  console.log(JSON.stringify(result.ops, undefined, 2));
});

  db.close();
});
