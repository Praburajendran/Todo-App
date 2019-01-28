//Schema for tasks Collection
var mongoose = require('mongoose');

var taskSchema = new mongoose.Schema({
    title: String,
    description: String,
    status: String,
    createddate: { type: Date, default: Date.now }
  });

module.exports = mongoose.model('todo', taskSchema);
