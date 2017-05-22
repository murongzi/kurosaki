var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://127.0.0.1:27017/myDataBaseForTest";

MongoClient.connect(url, function(err, db) {
    var collection = db.collection('users');

    collection.find().toArray(function(err, lists) {
        var data = [];
    });

});
