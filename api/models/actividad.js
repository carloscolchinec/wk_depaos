const mongoose = require('mongoose');

const actividadSchema = new mongoose.Schema({
  unit: String,
  name: String,
  description: String,
  grade: Number,
});

module.exports = mongoose.model('Actividads', actividadSchema);
