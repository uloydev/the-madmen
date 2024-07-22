<script lang="ts">
	import slide from '$lib/images/music/slide.png';

	import { latestRelease, discographyData } from '$lib/data/music';
	import Dicsography from '$lib/components/Dicsography.svelte';

	
</script>

<div>
	<div class="relative mb-10">
		<div class="rounded-xl border-4 border-madblue max-h-[400px] overflow-hidden mt-20">
			<img src={slide} alt="slider" class="w-full max-h-[500px] object-cover object-top" />
		</div>
		<div class="absolute bottom-0 p-8">
			<h1 class="font-comic text-madyellow text-8xl">MUSIC</h1>
		</div>
	</div>
	<p class="my-6 py-4 font-anton text-3xl text-madyellow text-center bg-madred">LATEST RELEASE</p>
    <Dicsography data={latestRelease} />
	<p class="my-6 py-4 font-anton text-3xl text-white text-center bg-madgreen">DISCOGRAPHY</p>
    <grid class=" grid grid-cols-4 gap-6">
        {#each discographyData as data}
        <a href="/music/{data.id}">
            <img src={data.cover} alt="cover discography" class="w-full aspect-square">
        </a>
        {/each}
    </grid>
</div>
