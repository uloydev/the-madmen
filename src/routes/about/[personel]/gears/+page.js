import { error } from '@sveltejs/kit';

import kalamToolsIcon from '$lib/images/about/kalam-tools-icon.png';
import kalamTools1 from '$lib/images/about/kalam-tools-1.png';
import kalamTools2 from '$lib/images/about/kalam-tools-2.png';
import kalamTools3 from '$lib/images/about/kalam-tools-3.png';
import kalamTools4 from '$lib/images/about/kalam-tools-4.png';
import kalamTools5 from '$lib/images/about/kalam-tools-5.png';

import marvinToolsIcon from '$lib/images/about/marvin-tools-icon.png';
import marvinTools1 from '$lib/images/about/marvin-tools-1.png';
import marvinTools2 from '$lib/images/about/marvin-tools-2.png';
import marvinTools3 from '$lib/images/about/marvin-tools-3.png';
import marvinTools4 from '$lib/images/about/marvin-tools-4.png';

import dikaToolsIcon from '$lib/images/about/dika-tools-icon.png';
import dikaTools1 from '$lib/images/about/dika-tools-1.png';
import dikaTools2 from '$lib/images/about/dika-tools-2.png';
import dikaTools3 from '$lib/images/about/dika-tools-3.png';


const personelData = {
    'kalam': {
        name: 'kalam',
        toolsIcon: kalamToolsIcon,
        tools: [
            {
                title: 'TOKAI',
                image: kalamTools1,
                description: 'Breezysound TTE98B'    
            },
            {
                title: 'FENDER',
                image: kalamTools2,
                description: 'Made in Japan Mahogany Offset Telecaster'    
            },
            {
                title: 'DANELECTRO',
                image: kalamTools3,
                description: 'CONVERTIBLE'    
            },
            {
                title: 'YAMAHA',
                image: kalamTools4,
                description: 'SGV 300'    
            },
            {
                title: 'GUILD',
                image: kalamTools5,
                description: 'Jumbo Junior Acoustic Guitar'
            }
        ]
    },
    'marvin': {
        name: 'marvin',
        toolsIcon: marvinToolsIcon,
        tools: [
            {
                title: 'STERLING BY MUSICMAN',
                image: marvinTools1,
                description: 'Breezysound TTE98B'
            },
            {
                title: 'IBANEZ',
                image: marvinTools2,
                description: 'AFB200 4-String Bass - Brown Sunburst'    
            },
            {
                title: 'FENDER MEXICO',
                image: marvinTools3,
                description: 'Player Jazz Bass Fretless Polar White'    
            },
            {
                title: 'IBANEZ',
                image: marvinTools4,
                description: 'SR506 6-String Bass Guitar'
            }
        ]
    },
    'dika': {
        name: 'dika',
        toolsIcon: dikaToolsIcon,
        tools: [
            {
                title: 'LUDWIG',
                image: dikaTools1,
                description: '14x6,5 Supraphonic Snare Drum'    
            },
            {
                title: 'NEBULAE',
                image: dikaTools2,
                description: 'Ursa 19” Crash'    
            },
            {
                title: 'ISTANBUL',
                image: dikaTools3,
                description: 'traditional Medium 21” Ride'    
            }
        ]
    }
};

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
    if (!Object.keys(personelData).includes(params.personel)) {
        error(404, 'Not found');
    }
    // @ts-ignore
    return personelData[params.personel];
}