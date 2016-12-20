var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

app.use(bodyParser.json());

app.post('/todos', function(req, res){
  var todo = new Todo({
    text : req.body.text
  });
  todo.save().then(function(doc){
    res.send(doc);
    console.log(doc);
  }, function(err){
    res.status(400).send(err);
  });
});

// practice1
// app.post('/usersinc', function(req, res){
//   var user1 = new User({
//     email : req.body.text
//   });
//   user1.save().then(function(doc){
//     res.send(doc);
//     console.log(doc);
//   }, function(err){
//     res.status(400).send(err);
//   });
// });

//practice2
// app.get('/usersinco', function(req, res){
//   User.find().then(function(doc){
//     res.send({doc});
//   }, function(err){
//     res.status(400).send(err);
//   });
// });

app.get('/todos', function(req, res){
  Todo.find().then(function(doc){
    res.send({doc});
  }, function(err){
    res.status(400).send(err);
  });
});

app.get('/todos/:id', function(req, res){
  var id = req.params.id;
  if(!ObjectID.isValid(id)){
    return res.status(404).send();
  }
  Todo.findById(id).then(function(doc){
    if(!doc){
      return res.status(404).send();
    }
    res.send({doc});
  }).catch(function(err){
    res.status(400).send();
  });
}, function(err){
  res.status(400).send();
});

app.listen(3000, function(){
  console.log("Server is up on port 3000");
});

module.exports = {app};
