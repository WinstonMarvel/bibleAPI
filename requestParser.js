const bible = require("./bibles/MSG.json");

var processor = function(req, res){
	let responseJSON = {};
	console.log(typeof req.params.chapter);
	console.log(bible[req.params.chapter]);
	responseJSON.chapter = bible[req.params.book][req.params.chapter] || "Incorrect Chapter";
	responseJSON.verse = bible[req.params.book][req.params.chapter][req.params.verse] || "Incorrect Verse Number";
	responseJSON.success = true;
	// if(!bible[req.params.book] || !bible[req.params.chapter] || !bible[req.params.verse]){
	// 	responseJSON.success = false;
	// 	responseJSON.errorCode = "Incorrect Parameters";
	// }
	res.json(responseJSON);
}



module.exports.process = processor;