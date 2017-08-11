'use strict';

const mongoose = require('mongoose');

const grindSchema = mongoose.Schema({
  userId: {type: mongoose.Schema.Types.ObjectId, required: true, ref: 'user'},
  grindName: {type: String, required: true},
  icon: {type: String},
  category: {type: String, required: true},
  isCompleted: {type: Boolean, default: false},
});

module.exports = mongoose.model('grind', grindSchema);
