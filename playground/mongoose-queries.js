const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//var id = "5855a27c726903f014b23a6969";

// if(!ObjectID.isValid(id)){
//   console.log("Id is invalid");
// };

// Todo.find({
//   _id : id
// }).then(function(doc){
//   console.log("Todos-find ", doc);
// });
//
// Todo.findOne({
//   _id : id
// }).then(function(doc){
//   console.log("Todos-findOne ", doc);
// });

// Todo.findById(id).then(function(doc){
//   console.log("Todos-findById ", doc);
// }).catch(function(err){
//   console.log(err.message);
// });

User.findById('5855af0a53ade02812a54ea611').then(function(doc){
  if(!doc){
    return console.log("Unable to find");
  }
  console.log(JSON.stringify(doc, undefined, 2));
}, function(err){
  console.log(err.name);
});
