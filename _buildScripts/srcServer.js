// var bodyParser = require('body-parser');
// var express = require('express');
// var path = require('path');
// var cors = require('cors');

import bodyParser from 'body-parser';
import browserSync from 'browser-sync';
import express from 'express';
import path from 'path';
import cors from 'cors';
import bsConnect from 'connect-browser-sync';
var port = 3000;

var app = express();

app.set('port', process.env.PORT || port);

var bsconf = {
		host: 'localhost',
		port: 3001,
		https: false,
		notify: false,
		open: false,
		online: false,
		ui: false,
		server: {
				baseDir: path.join(__dirname, '../src')
		},
		files: [path.join(__dirname, '../src/**/*.{html,css,js,json}')]
};
var bs = browserSync.create().init(bsconf);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../src')));
app.use(cors());
app.use(bsConnect(bs));

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(app.get('port'), function(err){
	if(err){ 	console.log(err); }
})
