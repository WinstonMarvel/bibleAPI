const bible = require("./bibles/MSG.json");

const express = require("express");

const fixBookName = function(str){
	var firstLetter = str.charAt(0);
	var remainingString = str.slice(1);
	return firstLetter.toUpperCase() + remainingString.toLowerCase();
}

var processor = function(req, res){
	let responseJSON = {};
	responseJSON.success = false;
	var requestedBook = fixBookName(req.params.book), 
		requestedChapter = req.params.chapter, 
		requestedVerse = req.params.verse;
		console.log(requestedBook);
	console.log(typeof req.params.chapter);
	console.log(bible[req.params.chapter]);

	try{
		responseJSON.chapter = bible[requestedBook][requestedChapter];
		responseJSON.verse = bible[requestedBook][requestedChapter][requestedVerse];
		responseJSON.success = true;
		// if(!bible[req.params.book] || !bible[req.params.chapter] || !bible[req.params.verse]){
		// 	responseJSON.success = false;
		// 	responseJSON.errorCode = "Incorrect Parameters";
		// }
	}
	catch(e){
		responseJSON = {};
		responseJSON.success = false;
		console.log("Error Occured" + e);
		responseJSON.errorCode = "Error Occured!";
	}
	finally{
		res.json(responseJSON);
	}
}



module.exports.process = processor; 