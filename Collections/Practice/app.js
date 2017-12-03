const MongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017/usersdb";
MongoClient.connect(url, (err, db) => {
   db.createCollection("collection1", (err, collection) => {
	db.createCollection("collection2", (err, collection) => {
		 db.renameCollection("collection1", "collection2", (err, collection) => {
			if (err) {
				db.renameCollection("collection2", "tmpCollection2", (err, collection) => {
					db.renameCollection("collection1", "collection2", (err, collection) => {
			         		console.log('err = ', err);
						console.log('collection = ', collection);
				 
					});					
			 
				});
			}
         
		});
   	});

   });
});
