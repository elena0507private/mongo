const MongoClient = require("mongodb").MongoClient;

let url = "mongodb://localhost:27017/usersdb";
MongoClient.connect(url, (err, db) => {
   console.log(db);
   db.close();
});
