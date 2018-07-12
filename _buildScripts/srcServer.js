import bodyParser from 'body-parser';
import browserSync from 'browser-sync';
import express from 'express';
import path from 'path';
import cors from 'cors';
import bsConnect from 'connect-browser-sync';
// import bsConfig from '../bs-conf';
import webpack from 'webpack';
import webpackConfig from '../webpack.config.dev';
import webpackDevMiddleware from 'webpack-dev-middleware';

var port = 3000;

var app = express();
var compiler = webpack(webpackConfig);
// var bs = browserSync.create().init(bsConfig);

app.set('port', process.env.PORT || port);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../src')));
app.use(cors());
// app.use(bsConnect(bs));
app.use(webpackDevMiddleware(compiler));

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(app.get('port'), function(err){
	if(err){ 	console.log(err); }
})
