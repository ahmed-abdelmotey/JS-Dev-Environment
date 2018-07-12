import path from 'path';

export default {
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
