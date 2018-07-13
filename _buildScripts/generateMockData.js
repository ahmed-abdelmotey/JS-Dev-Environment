import jsf from 'json-schema-faker';
import {schema} from './mockSchema';
import fs from 'fs';
import chalk from 'chalk';
import faker from 'faker'

/* eslint-disable no-console */

jsf.extend('faker', () => faker);

jsf.resolve(schema).then(data => {
	const json = JSON.stringify(data);

	fs.writeFile("./src/api/db.json", json, (err)=> {
		if(err){
			return console.log(chalk.red(err)); // return to stop any upcoming execution in npm scripts
		}else {
			console.log(chalk.green("Mock data generated."))
			return 0;
		}
	})
})

