<script lang="ts">
	import platform1 from '$lib/images/music/platform1.png';
	import platform2 from '$lib/images/music/platform2.png';
	import platform3 from '$lib/images/music/platform3.png';
	import platform4 from '$lib/images/music/platform4.png';
	import platform5 from '$lib/images/music/platform5.png';
	import { DiscographyType, type IDiscography } from '$lib/types/discography.type';
    import playBtn from '$lib/icons/play-btn.svg';
    import dropdown from '$lib/icons/dropdown.png';
	import Track from './Track.svelte';

	const platforms = [platform1, platform2, platform3, platform4, platform5];

	export let data: IDiscography;
</script>

<div class="grid grid-cols-2 gap-x-6 mb-8">
	<img src={data.cover} alt="latest release" class="aspec-square w-full" />
	<div>
		<h1 class="text-8xl text-madred font-anton mb-12">{data.title}</h1>
		<p class="font-roboto font-extrabold text-lg mb-8">
			{data.type} | {data.releaseYear} | {data.type == DiscographyType.SINGLE
				? data.tracks[0].duration
				: data.tracks.length + ' Tracks'}
		</p>
		{#if data.type == DiscographyType.SINGLE}
			<div
				class="h-full max-h-[400px] overflow-y-scroll px-6 py-2 font-roboto bg-madsecondary font-bold text-lg"
			>
				<!-- <div> -->
				<p class="text-4xl text-madblue">{data.tracks[0].title}</p>
				<p class=" text-madblue mt-8">Performed By</p>
				<p class="font-extrabold">{data.tracks[0].performer}</p>
				<p class=" text-madblue mt-8">Written By</p>
				<p class="font-extrabold">{data.tracks[0].writer}</p>
				<p class=" text-madblue mt-8">Produced By</p>
				<p class="font-extrabold">{data.tracks[0].producer}</p>
				<p class=" text-madblue mt-8">Recorded By</p>
				<p class="font-extrabold">{data.tracks[0].recorder}</p>
				<p class=" text-madblue mt-8">Mixing By</p>
				<p class="font-extrabold">{data.tracks[0].mixing}</p>
				<p class=" text-madblue mt-8">Mastering By</p>
				<p class="font-extrabold">{data.tracks[0].mastering}</p>
				<!-- </div> -->
			</div>
		{:else}
			<div class="h-full max-h-[400px] overflow-y-scroll p-2 font-roboto flex flex-col gap-y-4">
				{#each data.tracks as track, i}
					<Track {track} no={i + 1} />
				{/each}
			</div>
		{/if}
		<div class="flex justify-start mt-8 gap-x-8">
			<p class="text-3xl text-madblue font-anton">LISTEN ON</p>
			<div class="flex gap-x-4">
				{#each platforms as platform}
					<a href="#">
						<img src={platform} alt="platform" class="w-8 h-8 aspect-square" />
					</a>
				{/each}
			</div>
		</div>
	</div>
</div>
