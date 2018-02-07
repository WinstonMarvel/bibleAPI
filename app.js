
const express = require("express");
const app = express();

const requestParser = require("./requestParser.js");

app.get("/:book/:chapter/:verse", requestParser.process);
app.get("/:book/:chapter", requestParser.process);

app.get("*", (req,res)=>{
	res.send("Incorrect format. Sorry please read the documentation.");
});



app.listen(3000);



//To do
	//Add Middleware function to process request:
		// Bookname in camel case always
		// Check !hasOwnProperty and return the appropriate response
		// Error Handler