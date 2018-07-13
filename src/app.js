import user from './assets/js/user';
import { getUsers, deleteUser } from './api/users';

console.log(`user name: ${user.name}, age: ${user.age}`); // eslint-disable-line no-console

getUsers().then(res => {
	let usersBody = res.reduce((htmlBody, user)=> {
		htmlBody += `	<tr>
			<td><a href="#" data-id="${user.id}" class="delete-user">Delete</a></td>
			<td>${user.id}</td>
			<td>${user.firstName}</td>
			<td>${user.lastName}</td>
			<td>${user.email}</td>
		</tr>
		`
		return htmlBody;
	},"");

	global.document.getElementById('users').innerHTML = usersBody;

	const deleteLinks = global.document.querySelectorAll('.delete-user');
	Array.from(deleteLinks,link => {
		link.onclick = evt => {
			const elem = evt.target;
			evt.preventDefault();
			deleteUser(elem.attributes['data-id'].value);
			const row = elem.parentNode.parentNode;
			row.parentNode.removeChild(row);
		}
	});
});
