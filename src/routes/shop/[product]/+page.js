import { error } from '@sveltejs/kit';

import slider1 from '$lib/images/about/slider1.png';
import product1a from '$lib/images/shop/product1a.png';
import product1b from '$lib/images/shop/product1b.png';
import product2a from '$lib/images/shop/product2a.png';
import product2b from '$lib/images/shop/product2b.png';
import product3 from '$lib/images/shop/product3.png';
import product4 from '$lib/images/shop/product4.png';
import product5a from '$lib/images/shop/product5a.png';
import product5b from '$lib/images/shop/product5b.png';
import product6a from '$lib/images/shop/product6a.png';
import product6b from '$lib/images/shop/product6b.png';
import product6c from '$lib/images/shop/product6c.png';
import product7 from '$lib/images/shop/product7.png';

const products = [
    {
        id: 1,
        title: 'Mental Break Dance - Black T-Shirt',
        image: [product1a, product1b],
        price: 150000,
        description: `Name: Mad Madmen - Mental Breakdance TEE
        <br />
        <br />
        Label: Mad Madmen
        <br />
        <br />
        Color: Black
        Condition: New
        <br />
        <br />
        Size 
        <br />
        <br />
        Detail:
        S - Length 70 cm, Width 50 cm
        M - Length 72 cm, Width 52 cm
        L - Length 75 cm, Width 55 cm
        XL - Length 77 cm, Width 58 cm
        XXL - Length 79 cm, Width 63 cm
        `
    },
    {
        id: 2, title: 'MADFRENS - Black T-Shirt', image: [product2a, product2b], price: 200000, description: `Name: Mad Madmen - Mental Breakdance TEE
        <br />
        <br />
        Label: Mad Madmen
        <br />
        <br />
        Color: Black
        Condition: New
        <br />
        <br />
        Size 
        <br />
        <br />
        Detail:
        S - Length 70 cm, Width 50 cm
        M - Length 72 cm, Width 52 cm
        L - Length 75 cm, Width 55 cm
        XL - Length 77 cm, Width 58 cm
        XXL - Length 79 cm, Width 63 cm
        ` },
    {
        id: 3, title: 'Mantul Studio Solo - Black T-Shirt', image: [product3], price: 180000, description: `Name: Mad Madmen - Mental Breakdance TEE
        <br />
        <br />
        Label: Mad Madmen
        <br />
        <br />
        Color: Black
        Condition: New
        <br />
        <br />
        Size 
        <br />
        <br />
        Detail:
        S - Length 70 cm, Width 50 cm
        M - Length 72 cm, Width 52 cm
        L - Length 75 cm, Width 55 cm
        XL - Length 77 cm, Width 58 cm
        XXL - Length 79 cm, Width 63 cm
        ` },
    {
        id: 4, title: 'Mantul Studio Solo - White T-Shirt', image: [product4], price: 180000, description: `Name: Mad Madmen - Mental Breakdance TEE
        <br />
        <br />
        Label: Mad Madmen
        <br />
        <br />
        Color: Black
        Condition: New
        <br />
        <br />
        Size 
        <br />
        <br />
        Detail:
        S - Length 70 cm, Width 50 cm
        M - Length 72 cm, Width 52 cm
        L - Length 75 cm, Width 55 cm
        XL - Length 77 cm, Width 58 cm
        XXL - Length 79 cm, Width 63 cm
        ` },
    {
        id: 5,
        title: 'Contemplation Pt.1 - Black T-Shirt',
        image: [product5a, product5b],
        price: 175000,
        description: `Name: Mad Madmen - Mental Breakdance TEE
        <br />
        <br />
        Label: Mad Madmen
        <br />
        <br />
        Color: Black
        Condition: New
        <br />
        <br />
        Size 
        <br />
        <br />
        Detail:
        S - Length 70 cm, Width 50 cm
        M - Length 72 cm, Width 52 cm
        L - Length 75 cm, Width 55 cm
        XL - Length 77 cm, Width 58 cm
        XXL - Length 79 cm, Width 63 cm
        `
    },
    {
        id: 6,
        title: 'Mental Break Dance - Cassette',
        image: [product6a, product6b, product6c],
        price: 100000,
        description: `Name: Mad Madmen - Mental Breakdance TEE
        <br />
        <br />
        Label: Mad Madmen
        <br />
        <br />
        Color: Black
        Condition: New
        <br />
        <br />
        Size 
        <br />
        <br />
        Detail:
        S - Length 70 cm, Width 50 cm
        M - Length 72 cm, Width 52 cm
        L - Length 75 cm, Width 55 cm
        XL - Length 77 cm, Width 58 cm
        XXL - Length 79 cm, Width 63 cm
        `
    },
    {
        id: 7, title: 'Mental Break Dance - CD', image: [product7], price: 60000, description: `Name: Mad Madmen - Mental Breakdance TEE
        <br />
        <br />
        Label: Mad Madmen
        <br />
        <br />
        Color: Black
        Condition: New
        <br />
        <br />
        Size 
        <br />
        <br />
        Detail:
        S - Length 70 cm, Width 50 cm
        M - Length 72 cm, Width 52 cm
        L - Length 75 cm, Width 55 cm
        XL - Length 77 cm, Width 58 cm
        XXL - Length 79 cm, Width 63 cm
        ` }
];

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
    if (products.map((p) => p.id).indexOf(parseInt(params.product)) === -1) {
        error(404, 'Not found');
    }
    // @ts-ignore
    return products.find((p) => p.id === parseInt(params.product));
}