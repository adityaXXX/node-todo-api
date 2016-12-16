//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', function(err, db){
  if(err){
    return console.log("Unable to connect to MongoDB server");
  }
  console.log("Connected to MongoDB Server");

db.collection("User").findOneAndUpdate({
  _id: new ObjectID('5852f7eec31b7316acca6f5b')
}, {
  $set : {
    name : "Aditya"
  },
  $inc : {
    age : -1
  }
}, {
  returnOriginal : false
}).then(function(result){
  console.log(result);
});

  //db.close();
});
