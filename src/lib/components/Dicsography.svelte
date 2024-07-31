<script lang="ts">
	import platform1 from '$lib/images/music/platform1.png';
	import platform2 from '$lib/images/music/platform2.png';
	import platform3 from '$lib/images/music/platform3.png';
	import platform4 from '$lib/images/music/platform4.png';
	import platform5 from '$lib/images/music/platform5.png';
	import { DiscographyType, type IDiscography } from '$lib/types/discography.type';
	import Track from './Track.svelte';

	const platforms = [platform1, platform2, platform3, platform4, platform5];

	export let data: IDiscography;
</script>

<div class="grid grid-cols-2 gap-x-4 sm:gap-x-6 sm:mb-8">
	<img src={data.cover} alt="latest release" class="aspec-square w-full" />
	<div class="h-full flex flex-col justify-evenly sm:block">
		<h1 class="text-madred font-anton text-3xl mb-1 sm:mb-4 2xl:mb-12 sm:text-5xl 2xl:text-8xl">{data.title}</h1>
		<p class="font-roboto text-[10px] mb-1 font-extrabold sm:text-lg sm:mb-4 2xl:mb-8">
			{data.type} | {data.releaseYear} | {data.type == DiscographyType.SINGLE
				? data.tracks[0].duration
				: data.tracks.length + ' Tracks'}
		</p>
		{#if data.type == DiscographyType.SINGLE}
			<div
				class="h-full overflow-y-scroll font-roboto bg-madsecondary font-bold max-h-[80px] p-2 sm:px-6 sm:max-h-[350px] 2xl:max-h-[400px]"
			>
				<!-- <div> -->
				<p class="text-madblue text-lg sm:text-4xl">{data.tracks[0].title}</p>
				<p class="text-madblue mt-2 text-sm sm:text-lg sm:mt-8">Performed By</p>
				<p class="font-extrabold text-[10px] sm:text-lg">{data.tracks[0].performer}</p>
				<p class="text-madblue mt-2 text-sm sm:text-lg sm:mt-8">Written By</p>
				<p class="font-extrabold text-[10px] sm:text-lg">{data.tracks[0].writer}</p>
				<p class="text-madblue mt-2 text-sm sm:text-lg sm:mt-8">Produced By</p>
				<p class="font-extrabold text-[10px] sm:text-lg">{data.tracks[0].producer}</p>
				<p class="text-madblue mt-2 text-sm sm:text-lg sm:mt-8">Recorded By</p>
				<p class="font-extrabold text-[10px] sm:text-lg">{data.tracks[0].recorder}</p>
				<p class="text-madblue mt-2 text-sm sm:text-lg sm:mt-8">Mixing By</p>
				<p class="font-extrabold text-[10px] sm:text-lg">{data.tracks[0].mixing}</p>
				<p class="text-madblue mt-2 text-sm sm:text-lg sm:mt-8">Mastering By</p>
				<p class="font-extrabold text-[10px] sm:text-lg">{data.tracks[0].mastering}</p>
				<!-- </div> -->
			</div>
		{:else}
			<div class="h-full overflow-y-scroll font-roboto flex flex-col  max-h-[80px] gap-y-2 sm:p-2 sm:gap-y-4 sm:max-h-[250px] 2xl:max-h-[400px]">
				{#each data.tracks as track, i}
					<Track {track} no={i + 1} />
				{/each}
			</div>
		{/if}
		<div class="flex justify-around gap-x-2 mt-2 sm:justify-start sm:mt-8 sm:gap-x-8">
			<p class="text-madblue font-anton text-sm sm:text-3xl">LISTEN ON</p>
			<div class="flex gap-x-1 sm:gap-x-4">
				{#each platforms as platform}
					<a href="#">
						<img src={platform} alt="platform" class="w-5 sm:w-8 h-5 sm:h-8 aspect-square" />
					</a>
				{/each}
			</div>
		</div>
	</div>
</div>
