import webpack from 'webpack';
import webpackProdConfig from '../webpack.config.prod';
import chalk from 'chalk';

/* eslint-disable no-console */

console.log(chalk.green('Production build running, this may take a while...'))

webpack(webpackProdConfig).run((err, stats)=> {
	if(err){
		console.log(chalk.red(err))
		return 1; // to stop execution
	}

	const jsonStats = stats.toJson();

  if (jsonStats.hasErrors) {
    return jsonStats.errors.map(error => console.log(chalk.red(error)));
  }

  if (jsonStats.hasWarnings) {
    console.log(chalk.yellow('Webpack generated the following warnings: '));
    jsonStats.warnings.map(warning => console.log(chalk.yellow(warning)));
  }

  console.log(`Webpack stats: ${stats}`);

  // if we got this far, the build succeeded.
	console.log(chalk.green('Your app has been built for production and written to /dist!'));
	return 0;
})
