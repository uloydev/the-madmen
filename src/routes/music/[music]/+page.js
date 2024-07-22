import { discographyData } from '$lib/data/music';
import { error } from '@sveltejs/kit';


/** @type {import('./$types').PageLoad} */
export function load({ params }) {
    const data = discographyData.find((d) => d.id === parseInt(params.music));
    if (!data) {
        error(404, 'Not found');
    }
    return data;
}