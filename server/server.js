const express = require('express');
const bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/users');
var {ObjectID} = require('mongodb');

var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/create', (req, res)=>{
    var todo1 = new Todo({
      text : req.body.text
    });

    todo1.save().then((doc)=>{
      res.send(doc);
    }, (e)=>{
      res.status(400).send(e);
    });
});

app.get('/fetch', (req, res) => {
  Todo.find().then((doc) => {
    if(!doc){
      return res.send("No doc found");
    }
    res.send({doc});
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/fetch/:id', (req, res) => {
  var id = req.params.id;

  if(!ObjectID.isValid(id)){
    return res.status(404).send("Invalid ID");
  }

  Todo.findById(id).then((doc) => {
    if(!doc){
      res.status(404).send();
    }
    res.send({doc});
  }, (e) => {
    res.status(400).send();
  });

});

app.listen(port, ()=>{
  console.log(`Server is up on port ${port}`);
});
