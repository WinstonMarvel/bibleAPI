import express from 'express';
import graphqlHTTP from 'express-graphql';
import { buildSchema } from 'graphql';
import requestParser from './requestParser'; 

const app = express();  
 
const port = process.env.PORT || 3000;


app.get("/:book/:chapter/:verse", requestParser);
app.get("/:book/:chapter", requestParser);

app.get("/:book/", (req, res)=>{
	res.json({'success' : false, 'errorCode' : 'Cannot Return Full Book, please specify Chapter and Verse'});
});

app.get("*", (req, res)=>{
	res.send("Incorrect format. Sorry please read the documentation.");
});


//declare schema
const schema = buildSchema(`
	type Query {
		hello: String
	}
`);

//declare root API endpoint
const root = {
	hello: () => {
		return 'text'
	}
};


app.use('/graphql', graphqlHTTP({
	schema: schema,
	rootValue: root,
	graphiql: true
}));

app.listen(port, ()=>{
	console.log("Listening on port: " + port); 
});


//To do
	// Add hasNextVerse=true and hasNextChapter to JSON Response
	// Use Object.keys or for..in loop to show full chapter list.



//Functioning
	/*
	Case 1: /booklegitimate/chapleg/verselegitimate
		return json

	Case 2: /bookincorrect/chapincorrect/verseincorrect
		return json with error code	







	*/
