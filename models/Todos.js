const mongoose = require("mongoose");

const Todos = new mongoose.Schema({
  todo: String,
  date: String,
  isDone: Boolean,
});


module.exports = mongoose.model("Todos", Todos);
