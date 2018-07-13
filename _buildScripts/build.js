import webpack from 'webpack';
import webpackProdConfig from '../webpack.config.prod';
import chalk from 'chalk';

/* eslint-disable no-console */

console.log(chalk.green('Production build running, this may take a while...'))

webpack(webpackProdConfig).run((err)=> {
	if(err){
		console.log(chalk.red(err))
		return 1; // to stop execution
	}

	console.log(chalk.green('Production Bundle Done.'))
	return 0;
})
