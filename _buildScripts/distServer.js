import bodyParser from 'body-parser';
import express from 'express';
import path from 'path';
import cors from 'cors';
import compression from "compression";

/* eslint-disable no-console */

var port = 3000;

var app = express();

app.set('port', process.env.PORT || port);

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('dist'));
app.use(cors());

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, '../dist/index.html'));
});

// sample production api call
app.get('/users', (req,res)=>{
	res.json([
		{"id":1, "firstName":"Ahmed", "lastName": "Abdelmotey", "email": "ahmed.abdelmotey@gmail.com"},
		{"id":2, "firstName":"Robert", "lastName": "Nozik", "email": "robert.nozik@gmail.com"},
		{"id":3, "firstName":"Steave", "lastName": "Makenly", "email": "steave.makenly@gmail.com"}
	]);
});

app.listen(app.get('port'), function(err){
	if(err){ 	console.log(err); }
})
