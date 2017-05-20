var {ObjectID} = require('mongodb');

var {mongoose} = require('./../server/db/mongoose');
var {User} = require('./../server/models/users');

var id = "59130a6b11a9ede40e4ad1c2";

if(!ObjectID.isValid(id)){
  console.log("Invalid ID");
}

User.findById(id).then((doc)=>{
  if(!doc){
    return console.log("Doc not found");
  }
  console.log(JSON.stringify(doc , undefined, 2));
}, (e)=>{
  console.log(e.name);
});
