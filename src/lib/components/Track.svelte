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

<div class="flex items-center bg-madsecondary relative p-2 gap-x-2 sm:px-4 sm:gap-x-6">
	<span class="font-anton text-sm sm:text-3xl">{no}</span>
	<div class="flex-grow font-roboto">
		<p class="font-extrabold text-[7px] sm:text-base">{track.title}</p>
		<p class="text-madblue text-[5px] sm:text-sm">{track.artist}</p>
	</div>
	<span class="font-roboto font-extrabold text-[7px] sm:text-lg">{track.duration}</span>
	<img src={playBtn} alt="play button" class="h-4 sm:h-8" />
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
	<img
		src={dropdown}
		alt="dropdown"
		class="h-1 sm:h-4 transition-all"
		on:click={toggleDropdown}
		class:-rotate-180={dropdownActive}
	/>
	<div
		class="absolute top-full h-screen w-full bg-white transition-all z-10 left-0 max-h-[100px] sm:max-h-[250px] "
		class:hidden={!dropdownActive}
		class:h-0={!dropdownActive}
	>
		<div
			class="h-full overflow-y-scroll font-roboto bg-madsecondary font-bold p-2 max-h-[100px] sm:px-6 sm:max-h-[250px] "
		>
			<!-- <div> -->
			<p class="text-madblue text-lg sm:text-4xl">{track.title}</p>
			<p class="text-madblue mt-2 text-sm sm:text-lg sm:mt-8">Performed By</p>
			<p class="font-extrabold text-[10px] sm:text-lg">{track.performer}</p>
			<p class="text-madblue mt-2 text-sm sm:text-lg sm:mt-8">Written By</p>
			<p class="font-extrabold text-[10px] sm:text-lg">{track.writer}</p>
			<p class="text-madblue mt-2 text-sm sm:text-lg sm:mt-8">Produced By</p>
			<p class="font-extrabold text-[10px] sm:text-lg">{track.producer}</p>
			<p class="text-madblue mt-2 text-sm sm:text-lg sm:mt-8">Recorded By</p>
			<p class="font-extrabold text-[10px] sm:text-lg">{track.recorder}</p>
			<p class="text-madblue mt-2 text-sm sm:text-lg sm:mt-8">Mixing By</p>
			<p class="font-extrabold text-[10px] sm:text-lg">{track.mixing}</p>
			<p class="text-madblue mt-2 text-sm sm:text-lg sm:mt-8">Mastering By</p>
			<p class="font-extrabold text-[10px] sm:text-lg">{track.mastering}</p>
			<!-- </div> -->
		</div>
	</div>
</div>
