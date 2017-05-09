const {MongoClient, ObjectID} = require('mongodb');
// const {MongoClient, ObjectId} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDb server');
  }
  console.log('Connected to Mongo DB server');

  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('591099596b019ed4700a1f61'),

  }, {
    $set: {
      completed: true
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  // db.close();
});
