import { constants } from './constants';

const getPosts = async () => {
	try {
		const res = await fetch(`${constants.apiUrl}/api/projects`, {
			method: 'GET',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json'
			}
		});

		if (!res.ok) {
			throw new Error(`HTTP error! status: ${res.status}`);
		}

		const data = await res.json();
		return data;
	} catch (err) {
		console.error('Error fetching projects:', err);
		throw err;
	}
};

export { getPosts };
