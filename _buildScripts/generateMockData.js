import jsf from 'json-schema-faker';
import {schema} from './mockSchema';
import fs from 'fs';
import chalk from 'chalk';

/* eslint-disable no-console */

const json = JSON.stringify(jsf(schema));
fs.writeFile("./src/api/db.json", json, (err)=> {
	if(err){
		return console.log(chalk.red(err)); // return to stop any upcoming execution in npm scripts
	}else {
		console.log(chalk.green("Mock data generated."))
	}
})
