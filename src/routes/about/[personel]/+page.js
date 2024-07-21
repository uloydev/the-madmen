import { error } from '@sveltejs/kit';

import kalamAvatar from '$lib/images/about/kalam-avatar.png';
import kalamCover from '$lib/images/about/kalam-cover.png';
import kalamBanner from '$lib/images/about/kalam-banner.png';
import kalamToolsIcon from '$lib/images/about/kalam-tools-icon.png';
import kalamTools1 from '$lib/images/about/kalam-tools-1.png';
import kalamTools2 from '$lib/images/about/kalam-tools-2.png';
import kalamTools3 from '$lib/images/about/kalam-tools-3.png';

import marvinAvatar from '$lib/images/about/marvin-avatar.png';
import marvinCover from '$lib/images/about/marvin-cover.png';
import marvinBanner from '$lib/images/about/marvin-banner.png';
import marvinToolsIcon from '$lib/images/about/marvin-tools-icon.png';
import marvinTools1 from '$lib/images/about/marvin-tools-1.png';
import marvinTools2 from '$lib/images/about/marvin-tools-2.png';
import marvinTools3 from '$lib/images/about/marvin-tools-3.png';

import dikaAvatar from '$lib/images/about/dika-avatar.png';
import dikaCover from '$lib/images/about/dika-cover.png';
import dikaBanner from '$lib/images/about/dika-banner.png';
import dikaToolsIcon from '$lib/images/about/dika-tools-icon.png';
import dikaTools1 from '$lib/images/about/dika-tools-1.png';
import dikaTools2 from '$lib/images/about/dika-tools-2.png';
import dikaTools3 from '$lib/images/about/dika-tools-3.png';


const personelData = {
    'kalam': {
        name: 'kalam',
        fullName: 'Kalam Mahardhika',
        role: 'Vocalist/Guitarist',
        bio: `Born in Jakarta, Indonesia on December 14th 1994, Kalam Mahardhika first picked up the
            guitar at the age of 10. Reluctant and unwilling, Kalam only started enjoying to play
            after acquiring his first electric guitars, 2.5 years into his playing.
            <br />
            <br />
            Kalam’s early influences included bands such as Metallica, Megadeth, Pantera and Iron Maiden.
            Kalam’s transition from heavy metal came in the form of his exposure towards bands such as
            Primus, Red Hot Chili Peppers, and Jimi Hendrix which led to his decision to study at MSI
            (Music School of Indonesia) undergoing the Blues Guitar program under the mentorship of Bagas
            Nara Satyawaki.
            <br />
            <br />
            During his last years of Junior High, Kalam was exposed to John Scofield’s “A Go Go” record
            which exposed him to Jazz, Funk, and R&B music, which at that time was foreign territory
            for him. He would then go on to take private lessons with Krakatau guitarist, Donny Suhendra
            (2011-2015) and enrolled into Institut Musik Daya Indonesia (2012-2014 and 2018) but did
            not manage to complete his studies
            <br />
            <br />
            During his last years of Junior High, Kalam was exposed to John Scofield’s “A Go Go” record
            which exposed him to Jazz, Funk, and R&B music, which at that time was foreign territory
            for him. He would then go on to take private lessons with Krakatau guitarist, Donny Suhendra
            (2011-2015) and enrolled into Institut Musik Daya Indonesia (2012-2014 and 2018) but did
            not manage to complete his studies
        `,
        avatar: kalamAvatar,
        cover: kalamCover,
        banner: kalamBanner,
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
            }
        ]
    },
    'marvin': {
        name: 'marvin',
        fullName: 'Marvin Muhammad',
        role: 'Vocalist/Bassist',
        bio: `Born in Jakarta, Indonesia on December 17th 1995, Marvin Muhammad started out by playing drums at the age of 11, but it didn’t last for very long. A year after, inspired by Guitar Hero, Marvin decided to pursue the bass guitar instead, fascinated by the capabilities and restrictions of the instrument; and the supporting role that it demands within an ensemble.
        <br />
        <br />
        Starting out from Classic Rock, Marvin quickly discovered all sorts of music; Metal, 60s pop such as The Beatles, Jazz Fusion such as Weather Report, Brazilian music and eventually Indie Rock and Pop, with these influences, Marvin started writing songs during his high school years.
        <br />
        <br />
        Marvin pursued formal musical education at MSI Pondok Indah (Music School of Indonesia) from 2013 to 2015, under the guidance of Franky Sadikin, Lie Andi, among others. Shortly after he became a bass tutor there, whilst further continuing his studies at UPH’s Conservatory of Music in 2015.`,
        avatar: marvinAvatar,
        cover: marvinCover,
        banner: marvinBanner,
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
            }
        ]
    },
    'dika': {
        name: 'dika',
        fullName: 'Andika Rahimy',
        role: 'Drummer',
        bio: `Born in Jakarta, Indonesia, on December 9, 1993, Andika Rahimy was already sitting at a drum kit at the age of five, though it was just a toy drum set for children.
        <br />
        <br />
        When he entered elementary school, he took marching band as an extracurricular activity. It was there that he began to take a serious interest in sound and rhythm.
        <br />
        <br />
        As he entered junior high school, he was introduced to punk music, including bands like The Casualties, The Exploited, The Adicts, and local punk bands such as Septictank, Stupidity, and Bunga Hitam. Andika began performing on stage at the age of 12 in the local punk scene.
        <br />
        <br />
        From punk, he moved to reggae music and started his own reggae band called Magic Seaweed.
        <br />
        <br />
        In high school, his musical interests shifted towards rock, with bands like Guns N' Roses, Mötley Crüe, Skid Row, Metallica, and Nirvana catching his attention. He formed his first rock band, "Streetwalker."
        <br />
        <br />
        In college, Andika explored older genres like jazz and blues, becoming influenced by artists such as Led Zeppelin, Black Sabbath, The Police, The Jimi Hendrix Experience, and Pink Floyd. These influences have formed the foundation of his drumming style to this day.`,
        avatar: dikaAvatar,
        cover: dikaCover,
        banner: dikaBanner,
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