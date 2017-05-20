const mongoose = require('mongoose');

var Todo = mongoose.model("Todos", {
  text: {
    type: String
  },
  completed: {
    type: Boolean,
    default : false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

module.exports = {Todo};
