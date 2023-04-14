const mongoose = require('mongoose');

const assignmentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  dueDate: Date,
  isCompleted: {
    type: Boolean,
    default: false
  },
  files: [{
    name: String,
    url: String,
    default: []
  }],
  moduleId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Module'
  },
  submissions: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Submission',
    default: []
  }]

});

const Assignment = mongoose.model('Assignment', assignmentSchema);

module.exports = Assignment;
