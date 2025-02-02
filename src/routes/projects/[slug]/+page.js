// @ts-nocheck
import { getPosts } from '$lib/api/cms.js';
import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
	try {
		const response = await getPosts();

		const project = response.docs.find((doc) => doc.slug === params.slug);
		if (!project) {
			error(404, 'Not found');
		}

		return project;
	} catch (error) {
		console.error('Error fetching project:', error);
	}

	error(404, 'Not found');
};
