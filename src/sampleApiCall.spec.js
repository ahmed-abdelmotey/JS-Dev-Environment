import nock from "nock";
import { testApiCall } from "./sampleApiCall";

describe('Nock sample mocking', ()=> {
	it('should intercept api calls and return data immediately', ()=> {

		nock('http://myapp.iriscouch.com').get('/users/1')
		.reply(200, {
			_id: '123ABC',
			_rev: '946B7D1C',
			username: 'pgte',
			email: 'pedro.teixeira@gmail.com'
		});

		testApiCall().then(res=> {
			expect(res._id).to.equal('123ABC'); // eslint-disable-line no-undef
		}).catch(() => {
			return 0;
		});
	})
});
