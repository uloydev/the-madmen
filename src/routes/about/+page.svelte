<script lang="ts">
	import { onMount } from 'svelte';

	import slider1 from '$lib/images/about/slider1.png';
    import personelHeader from '$lib/images/about/personel-header.png';
    import personel1 from '$lib/images/about/personel1.png';
    import personel2 from '$lib/images/about/personel2.png';
    import personel3 from '$lib/images/about/personel3.png';

	const sliders = [slider1, slider1];
	let sliderIndex = 0;

	onMount(() => {
		setInterval(() => {
			sliderIndex = sliderIndex === sliders.length - 1 ? 0 : sliderIndex + 1;
		}, 3000);
	});
</script>

<div>
	<div class="relative mb-10">
		<div class="rounded-xl border-4 border-madblue max-h-[400px] overflow-hidden mt-20">
			{#each sliders as slide, idx}
				<img
					src={slide}
					alt="slider {idx}"
					class="w-full max-h-[500px] object-cover object-top"
					class:hidden={idx != sliderIndex}
				/>
			{/each}
		</div>
        <div class="absolute bottom-0 p-8">
            <h1 class="font-jotione text-madyellow text-8xl">About</h1>
        </div>
	</div>
    <div class="grid grid-cols-2 font-roboto text-xl font-extrabold text-madblue gap-x-4 mb-10">
        <p>
            Mad Madmen are a Jakarta based musical trio formed in 2018. The band consists of Kalam Mahardhika (Guitar/Vocals), Marvin Muhammad (Bass/Vocals) and Andika Rahimy (Drums). The musical dynamic of Mad Madmen plays upon mixing complex rhythmic and melodic properties along with multiple idiomatic elements all of which are glued together by extended jams. Collectively, Mad Madmen identify themselves as a "Jazzed-Up Funkadelic Prog-Pop Power Trio".
        </p>
        <p>
            Mad Madmen's repertoire make a point of not wanting to abide to any certain genres and instead heavily emphasize on narrative context that are near and dear to the members, amalgamating multiple influences, and elements of surprise throughout their songs such as sudden key and tempo changes, and abrupt shifts in nuance.
        </p>
    </div>
    <div class="relative">
        <div class="h-full w-[200vw] absolute bg-black -z-10 -left-[50vw] mx-auto"></div>
        <div class="grid grid-cols-4 gap-x-6 font-roboto text-lg font-bold text-white text-center uppercase py-6">
            <div>
                <img src={personelHeader} alt="personel header" class="w-full object-cover">
            </div>
            <a href="/about/marvin" class="block">
                <span class="mb-6 block">marvin</span>
                <img src={personel1} alt="personel 1" class="w-full object-cover">
            </a>
            <a href="/about/kalam" class="block">
                <span class="mb-6 block">kalam</span>
                <img src={personel2} alt="personel 2" class="w-full object-cover">
            </a>
            <a href="/about/dika" class="block">
                <span class="mb-6 block">dika</span>
                <img src={personel3} alt="personel 3" class="w-full object-cover">
            </a>
        </div>
    </div>
</div>
