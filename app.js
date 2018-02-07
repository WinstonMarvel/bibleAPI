
const express = require("express");
const app = express();

const bible = require("./bibles/MSG.json");

var responseJSON = {};

app.get("/:book/:chapter/:verse", function(req,res){
	responseJSON.book = bible[req.params.book][req.params.chapter][req.params.verse] || "Incorrect Book Name";
	responseJSON.chapter = req.params.chapter || "Incorrect Book Name";
	responseJSON.verse = req.params.verse || "Incorrect Book Name";
	res.json(responseJSON);
});

app.get("*", (req,res)=>{
	res.send("Incorrect format. Sorry please read the documentation.");
});

console.log(bible.Genesis);

app.listen(3000);


//To do
	//Add Middleware function to process request:
		// Bookname in camel case always
		// Check !hasOwnProperty and return the appropriate response
		//