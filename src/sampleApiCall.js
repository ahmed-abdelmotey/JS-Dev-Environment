import { fetch } from 'whatwg-fetch';
console.log(fetch)
export function testApiCall(){
	return fetch('http://myapp.iriscouch.com/users/1');
}
