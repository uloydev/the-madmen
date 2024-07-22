<script lang="ts">
	import type { Track } from '$lib/types/discography.type';
	import playBtn from '$lib/icons/play-btn.svg';
	import dropdown from '$lib/icons/dropdown.png';

	export let track: Track;
	export let no: number;
	let dropdownActive = false;

	const toggleDropdown = () => {
		dropdownActive = !dropdownActive;
	};
</script>

<div class="flex items-center bg-madsecondary px-4 py-2 gap-x-6 relative">
	<span class="font-anton text-3xl">{no}</span>
	<div class="flex-grow font-roboto">
		<p class="font-extrabold">{track.title}</p>
		<p class="text-sm text-madblue">{track.artist}</p>
	</div>
	<span class="text-lg font-roboto font-extrabold">{track.duration}</span>
	<img src={playBtn} alt="play button" class="h-8" />
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
	<img
		src={dropdown}
		alt="dropdown"
		class="h-4 transition-all"
		on:click={toggleDropdown}
		class:-rotate-180={dropdownActive}
	/>
	<div
		class="absolute top-full h-screen max-h-[250px] w-full bg-white transition-all z-10 left-0"
		class:hidden={!dropdownActive}
		class:h-0={!dropdownActive}
	>
		<div
			class="h-full max-h-[250px] overflow-y-scroll px-6 py-2 font-roboto bg-madsecondary font-bold text-lg"
		>
			<!-- <div> -->
			<p class="text-4xl text-madblue">{track.title}</p>
			<p class=" text-madblue mt-8">Performed By</p>
			<p class="font-extrabold">{track.performer}</p>
			<p class=" text-madblue mt-8">Written By</p>
			<p class="font-extrabold">{track.writer}</p>
			<p class=" text-madblue mt-8">Produced By</p>
			<p class="font-extrabold">{track.producer}</p>
			<p class=" text-madblue mt-8">Recorded By</p>
			<p class="font-extrabold">{track.recorder}</p>
			<p class=" text-madblue mt-8">Mixing By</p>
			<p class="font-extrabold">{track.mixing}</p>
			<p class=" text-madblue mt-8">Mastering By</p>
			<p class="font-extrabold">{track.mastering}</p>
			<!-- </div> -->
		</div>
	</div>
</div>
