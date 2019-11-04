import * as bible from './bibles/MSG.json';
import * as express from 'express';
import camelCasify from './utilities';


var processor = function(req: any, res: any){
	let responseJSON = <any> {};
	responseJSON.success = false;
	let error = <any>{}; 
	try{
		
		var requestedBook = camelCasify(req.params.book), 
							requestedChapter = req.params.chapter, 
							requestedVerse = req.params.verse || 1;
		
		console.log(requestedBook);
		if(!(bible.hasOwnProperty(requestedBook))){
			console.log("error occured in book");
			error.errorCode = 1;
			error.type = "IncorrectParameters";
			error.errorDescription = "Book does not exist. Please try again";
			throw error;
		}
		else if(!(bible[requestedBook].hasOwnProperty(requestedChapter))){
			console.log("error occured in chao");
			error.errorCode = 2;
			error.type = "IncorrectParameters";
			error.errorDescription = "Chapter does not exist.";
			throw error;
		}
		else if(!(bible[requestedBook][requestedChapter].hasOwnProperty(requestedVerse))){
			console.log("error occured in verse");
			error.errorCode = 3;
			error.type = "IncorrectParameters";
			error.errorDescription = "Verse does not exist.";
			throw error;
		}
		else{
			responseJSON.chapter = bible[requestedBook][requestedChapter];
			responseJSON.verse = bible[requestedBook][requestedChapter][requestedVerse];
			responseJSON.success = true;
			console.log(responseJSON.verse);
		}

	}

	catch(e){
		responseJSON = {};
		console.log("Error:" + e);
		responseJSON.success = false;
		if(e.type === "IncorrectParameters"){
			responseJSON.error = error;
		}
		else{
			responseJSON.errorCode = 9;
			responseJSON.error.Description = "Unknown Error Occured";
		}
	}
	finally{
		res.json(responseJSON);
	}
}



export default processor;