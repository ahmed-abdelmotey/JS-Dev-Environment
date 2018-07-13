import { fetch } from 'whatwg-fetch';

export function testApiCall(){
	return fetch('http://myapp.iriscouch.com/users/1');
}
