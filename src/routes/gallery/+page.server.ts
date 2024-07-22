import { YT_API_KEY } from '$env/static/private'

const videoIds = [
    'xluB8FkCZlA',
    '62BwLIbAC6I',
    'YcYy2bTzx9U',
    'hWAR2oEaNB8',
    'erRux7zXLdE',
    'HaJnCp5SA9I',
];

export interface IVideo {
    id: string;
    publishedAt: string;
    title: string;
    views: number;
    likes: number;
    thumbnail: string;
    duration: string;
    link: string;
}

let result: IVideo[] = [];


/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    result = [];
    const resp = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoIds.join(',')}&key=${YT_API_KEY}`);
    const data = await resp.json();
    // @ts-ignore
    data.items.forEach((item, i) => {
        result.push({
            id: videoIds[i],
            publishedAt: formatPublishedDate(item.snippet.publishedAt),
            title: item.snippet.title,
            views: item.statistics.viewCount,
            likes: item.statistics.likeCount,
            thumbnail: item.snippet.thumbnails.medium.url,
            duration: parseDuration(item.contentDetails.duration),
            link: `https://www.youtube.com/watch?v=${item.id}`
        });
    });
    // @ts-ignore
    return {
        videos: result
    };
}

function parseDuration(duration: string) {
    // Remove the 'PT' prefix
    const time = duration.substring(2);

    // Regular expression to match hours, minutes, and seconds
    const regex = /(\d+H)?(\d+M)?(\d+S)?/;

    // Match the parts of the duration
    const match = time.match(regex);

    if (!match) {
        return '00:00:00';
    }
    // Extract hours, minutes, and seconds from the match
    const hours = match[1] ? parseInt(match[1].replace('H', ''), 10) : 0;
    const minutes = match[2] ? parseInt(match[2].replace('M', ''), 10) : 0;
    const seconds = match[3] ? parseInt(match[3].replace('S', ''), 10) : 0;

    // Format the duration into "hh:mm:ss"
    if (hours > 0) {
        return [
            hours.toString(),
            minutes.toString().padStart(2, '0'),
            seconds.toString().padStart(2, '0')
        ].join(':');
    } else {
        return [
            minutes.toString(),
            seconds.toString().padStart(2, '0')
        ].join(':');
    }
}

function formatPublishedDate(publishedAt: string) {
    const now = new Date();
    const publishedDate = new Date(publishedAt);
    const diffInSeconds = Math.floor((now.getTime() - publishedDate.getTime()) / 1000);

    const intervals = [
        { label: 'tahun', seconds: 31536000 },
        { label: 'bulan', seconds: 2592000 },
        { label: 'hari', seconds: 86400 },
        { label: 'jam', seconds: 3600 },
        { label: 'menit', seconds: 60 },
        { label: 'detik', seconds: 1 }
    ];

    for (const interval of intervals) {
        const count = Math.floor(diffInSeconds / interval.seconds);
        if (count >= 1) {
            return `${count} ${interval.label} yang lalu`;
        }
    }

    return 'baru saja';
}
