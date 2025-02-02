import { error } from '@sveltejs/kit';
import { constants } from './constants';

const getPosts = async () => {
	try {
		const res = await fetch(`${constants.apiUrl}/api/projects?depth=2`, {
			method: 'GET',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json'
			}
		});

		if (!res.ok) {
			return error(404, {
				message: `HTTP error! status: ${res.status}`
			});
		}

		const data = await res.json();
		return data;
	} catch (err) {
		console.error('Error fetching projects:', err);
		return error(500, {
			message: `Error fetching projects`
		});
	}
};

export { getPosts };
