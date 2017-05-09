const {MongoClient, ObjectID} = require('mongodb');
// const {MongoClient, ObjectId} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDb server');
  }
  console.log('Connected to Mongo DB server');

  // Delete Many
  db.collection('Todos').deleteMany({text: 'some text'}).then((result) => {
    console.log(result);
  });

  // Delete One
  db.collection('Todos').deleteOne({text: 'some text'}).then((result) => {
    console.log(result);
  });

  // Find One and Delete



  // db.close();
});
