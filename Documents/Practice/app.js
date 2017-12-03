const MongoClient = require("mongodb").MongoClient;

let url = "mongodb://localhost:27017/gamesdb";
MongoClient.connect(url, (err, db) => {
   let games = db.collection("games");
   let gamesContent = [
	{name: "Shatter", platform: "PC", developer: "Sidhe Interactive" , genre:"Action", price: "10" },
	{name: "Clutch", platform: "PC", developer: "Targem Games" , genre:"Racing", price: "10" },
	{name: "Asteria", platform: "PC", developer: "Legend Studio" , genre:"Action", price: "10" },
	{name: "Zombi", platform: "Playstation 4", developer: "Ubisoft Montpellier" , genre:"First Person Shooter", price: "20" },
	{name: "Doom", platform: "Playstation 4", developer: "id Software" , genre:"First Person Shooter", price: "20" },
   ];
	games.insertMany(gamesContent, (err, res) => {
		games.deleteMany({platform: "Playstation 4"}, (err, res) => {
		 console.log('res.result = ', res.result);
		 console.log('res.deletedCount = ', res.deletedCount);
	      });
		db.close();
	});   
});
