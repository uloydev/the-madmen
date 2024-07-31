<script lang="ts">
	import { onMount } from 'svelte';

	import homeSlider1 from '$lib/images/home-slider1.png';
	import homeSlider2 from '$lib/images/home-slider2.png';
	import homeSlider3 from '$lib/images/home-slider3.png';
	import homeSlider4 from '$lib/images/home-slider4.png';
	import homeSlider5 from '$lib/images/home-slider5.png';
	import logoSquare from '$lib/images/logo-square.png';
	import personel from '$lib/images/personel.png';
	import latestRelease from '$lib/images/latest-release.png';
	import asset1 from '$lib/images/asset1.png';
	import playBtn from '$lib/icons/play-btn.svg';

	const homeSliders = [homeSlider1, homeSlider2, homeSlider3, homeSlider4, homeSlider5];
	let currentSlide = 0;

	const creatorPicks = [
		{
			title: 'Cold Turkey',
			artist: 'Mad Madmen',
			type: 'Single',
			year: 2019,
			duration: '3:25',
			link: '#song1'
		},
		{
			title: 'The Striker',
			artist: 'Mad Madmen ft. Ade Paloh',
			type: 'Mental Breakdance',
			year: 2021,
			duration: '4:37'
		},
		{
			title: 'B.K.B / Kalam...',
			artist: 'Mad Madmen',
			type: 'Mental Breakdance',
			year: 2021,
			duration: '4:20'
		},
		{
			title: "Big Ol' Jazzm...",
			artist: 'Mad Madmen',
			type: 'Mental Breakdance',
			year: 2021,
			duration: '5:08'
		},
		{
			title: 'ACHTUNG!',
			artist: 'Mad Madmen ft. Gracia A...',
			type: 'Mental Breakdance',
			year: 2021,
			duration: '5:30'
		}
	];

	const nextSlide = () => {
		console.log('next slide');
		currentSlide = currentSlide === homeSliders.length - 1 ? 0 : currentSlide + 1;
	};

	onMount(() => {
		const interval = setInterval(nextSlide, 3000);
		return () => clearInterval(interval);
	});
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="The MadMan" />
</svelte:head>

<div class=" gap-x-5 mt-12 sm:px-0 sm:grid sm:grid-cols-12">
	<div class="w-full mb-4 sm:mb-0 sm:col-span-8 rounded-xl border-madblue border-4 overflow-hidden">
		{#each homeSliders as slide, i}
			<img src={slide} alt="home slider" class="w-full" class:hidden={i != currentSlide} />
		{/each}
	</div>
	<div class="col-span-4 grid grid-row-12 h-full font-anton gap-y-4 sm:gap-y-10">
		<div class="row-span-8 row-start-5 sm:row-start-1">
			<p class="px-4 py-8 bg-madred capitalize text-madyellow text-lg">
				upcoming shows / local dates
			</p>
			<div class="px-8 pt-12 pb-4 bg-madsecondary">
				<p class="text-6xl">2 JUN</p>
				<p class="text-xl mt-6 mb-8 font-roboto">BIANG KEROK / Jakarta, INA</p>
				<a href="#" class="block py-4 transition-all text-madyellow animate-blink-fast text-center"
					>Notify Me</a
				>
			</div>
		</div>
		<div class="row-span-4 sm:row-start-9 row-start-1 grid grid-cols-2 bg-white border-madpurple border-2">
			<img src={logoSquare} alt="suare logo" class="w-full sm:p-2 border-r border-black" />
			<div class="flex items-center">
				<p class="p-2 px-6 underline text-3xl text-madblue animate-text-blink">
					JAZZED-UP<br />FUNKADELIC<br />PROG-POP<br />POWER TRIO
				</p>
			</div>
		</div>
	</div>
</div>

<!-- personel / about section -->
<div class="bg-white border-madgreen border-2 rounded-xl grid grid-cols-12 shadow-bio mt-4 sm:mt-20">
	<div class="h-full relative w-full col-span-4 p-2 sm:p-0">
		<img src={personel} alt="personel" class="sm:absolute sm:left-[10%] sm:bottom-0 sm:h-[125%]" />
	</div>
	<div class="h-full col-span-8 col-start-5 p-2  sm:col-span-6 sm:py-8 sm:px-0">
		<h1 class="font-jotione text-[40px] animate-logo-text transition-colors sm:text-8xl">The Madmen</h1>
		<p class="font-roboto text-[10px] sm:text-base sm:text-madblue sm:my-4">
			Mad Madmen are a Jakarta based musical trio formed in 2018. The band consists of Kalam
			Mahardhika (Guitar/Vocals), Marvin Muhammad (Bass/Vocals) and Andika Rahimy (Drums).<span class="hidden sm:inline">The
			musical dynamic of Mad Madmen plays upon mixing complex rhythmic and melodic properties along
			with multiple idiomatic elements all of which are glued together by extended jams.</span>...
		</p>
		<a href="#more" class="text-madblue underline uppercase font-roboto font-bold">More</a>
	</div>
</div>

<!-- release / music section -->
<div class="flex gap-4 flex-col h-full sm:flex-row sm:max-h-[500px] sm:gap-y-0">
	<div class="h-full mt-8 flex-grow">
		<h2 class="p-4 bg-madred text-white capitalize font-anton text-xl sm:text-4xl sm:px-8">Latest release</h2>
		<div class="flex h-fit bg-madlightgrey">
			<div class="bg-black">
				<img src={latestRelease} alt="latest release" class=" object-cover sm:h-[400px]" />
			</div>
			<div class="h-full p-4 sm:py-12 sm:px-8 sm:flex-grow">
				<p class="font-anton text-madred mb-4 text-3xl sm:text-6xl sm:mb-12">MAHAPURA</p>
				<p class="font-roboto text-[10px] mb-6 sm:text-sm">SINGLE | Mad Madmen ft. Anda Perdana | 2023 | 5:24</p>

				<a href="#listen" class="text-madblue underline font-roboto uppercase font-bold text-sm sm:text-xl"
					>listen now</a
				>
			</div>
		</div>
	</div>
	<div class="grid grid-cols-12 sm:h-full sm:max-h-[500px] sm:block">
		<div class="col-span-4 col-start-9 row-start-1 flex justify-center relative">
			<img src={asset1} alt="asset1" class="absolute top-0 -left-[20px] sm:h-[200px] sm:relative" />
		</div>
		<div class="col-span-8 col-start-1 row-start-1 bg-madyellow flex flex-col shadow-picks h-full max-h-[150px] px-4 pb-4 sm:max-h-[300px] sm:pt-4">
			<p class="text-center font-barriecito text-3xl text-madblue sm:pb-4">Creator's Picks</p>
			<div class="h-full bg-black overflow-y-scroll">
				<div class="p-4 bg-white">
					{#each creatorPicks as pick}
						<div class="flex justify-between">
							<div>
								<p class=" font-roboto text-xl font-bold border-b-2 border-black w-fit mb-1">
									{pick.title}
								</p>
								<p class="font-roboto text-sm">{pick.artist}</p>
							</div>
							<img src={playBtn} alt="play button" class="h-8" />
						</div>

						<div
							class="flex justify-between font-roboto text-xs mt-2 border-b-2 border-madlightgrey mb-4"
						>
							<p>{pick.type} | {pick.year}</p>
							<span>{pick.duration}</span>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.shadow-bio {
		box-shadow: 0 4px 5px 4px rgba(0, 0, 0, 0.2);
	}

	.shadow-picks {
		box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
	}
	@keyframes blink {
		0%,
		100% {
			background-color: #ff0000;
		}
		50% {
			background-color: #41c508;
		}
	}

	.animate-blink-fast {
		animation: blink 0.25s infinite;
	}

	@keyframes text-blink {
		0%,
		100% {
			color: #0000fe;
		}
		20% {
			color: #cc00ff;
		}
		40% {
			color: #ff0000;
		}
		60% {
			color: #ffcc00;
		}
		80% {
			color: #41c508;
		}
	}

	@keyframes logo-text {
		0%,
		100% {
			color: #cc00ff;
		}
		50% {
			color: #00fff0;
		}
	}

	.animate-text-blink {
		animation: text-blink 5s infinite;
	}

	.animate-logo-text {
		animation: logo-text 2s infinite;
	}
</style>
