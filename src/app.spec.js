import {expect} from 'chai';
import {JSDOM} from 'jsdom';
import fs from 'fs';
import cheerio from 'cheerio';

describe('Sample Test', ()=> {
	it('Should Pass', ()=>{
		expect(1).to.equal(1);
	});
	// it('Should Fail', ()=>{
	// 	expect(1).to.equal(2);
	// });
});

describe('index.html', ()=>{
	it('should have a h1 with value that contains Hello World', (done)=> {
		const index = fs.readFileSync('./src/index.html', 'utf-8');

		// UI assertions using cheerio
		const $ = cheerio.load(index);
		const headerText = $('h1').text();
		expect(headerText).to.contain('Hello World');

		// UI assertions using jsdom
		const dom = new JSDOM(index);
		const h1 = dom.window.document.querySelector("h1").textContent;
		expect(h1).to.contain('Hello World');
		done(); // needed for async tests to determine that test is finished
		dom.window.close(); // close the virtual window to free memory

	});
});
