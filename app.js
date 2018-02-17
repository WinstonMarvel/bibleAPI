
const express = require("express");
const app = express();


const requestParser = require("./requestParser.js");

app.get("/:book/:chapter/:verse", requestParser.process);
app.get("/:book/:chapter", requestParser.process);

app.get("/:book/", (req,res)=>{
	res.json({'success' : false, 'errorCode' : 'Cannot Return Full Book, please specify Chapter and Verse'});
});

app.get("*", (req,res)=>{
	res.send("Incorrect format. Sorry please read the documentation.");
});



app.listen(3000);



//To do
	// Add hasNextVerse=true and hasNextChapter to JSON Response




//Functioning
	/*
	Case 1: /booklegitimate/chapleg/verselegitimate
		return json

	Case 2: /bookincorrect/chapincorrect/verseincorrect
		return json with error code	







	*/
