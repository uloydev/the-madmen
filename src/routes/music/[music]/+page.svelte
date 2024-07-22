<script lang="ts">
	import { discographyData } from '$lib/data/music';
	import Dicsography from '$lib/components/Dicsography.svelte';
	import type { IDiscography } from '$lib/types/discography.type';

	/** @type {import('./$types').PageData} */
	export let data: IDiscography;

	
</script>

<div>
	<div class="text-madblue font-anton underline text-3xl flex gap-x-4 capitalize mb-4 mt-20">
		<a href="/music">Music</a>
		<span>&gt;</span>
		<a href="/music/{data.id}">{data.title}({data.type})</a>
	</div>
    <Dicsography {data} />
	<p class="my-6 py-4 font-anton text-3xl text-white text-center bg-madgreen">DISCOGRAPHY</p>
    <grid class=" grid grid-cols-4 gap-6">
        {#each discographyData as data}
        <a href="/music/{data.id}">
            <img src={data.cover} alt="cover discography" class="w-full aspect-square">
        </a>
        {/each}
    </grid>
</div>
