const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {ObjectID} = require('mongodb');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove()

Todo.findByIdAndRemove('5912034024444d0f7e4ad8df').then((todo) => {
  console.log(todo);
});
