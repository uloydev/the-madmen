<script lang="ts">
	import { discographyData } from '$lib/data/music';
	import Dicsography from '$lib/components/Dicsography.svelte';
	import type { IDiscography } from '$lib/types/discography.type';

	/** @type {import('./$types').PageData} */
	export let data: IDiscography;

	
</script>

<div class="pt-12">
	<div class="text-madblue font-anton underline flex capitalize mb-2 text-sm gap-x-1 sm:mb-10 sm:text-3xl sm:gap-x-4">
		<a href="/music">Music</a>
		<span>&gt;</span>
		<a href="/music/{data.id}">{data.title}({data.type})</a>
	</div>
    <Dicsography {data} />
	<p class="py-4 font-anton text-3xl text-white text-center bg-madgreen my-2 sm:my-6">DISCOGRAPHY</p>
    <grid class="grid grid-cols-4 gap-4 sm:gap-6">
        {#each discographyData as data}
        <a href="/music/{data.id}">
            <img src={data.cover} alt="cover discography" class="w-full aspect-square">
        </a>
        {/each}
    </grid>
</div>
