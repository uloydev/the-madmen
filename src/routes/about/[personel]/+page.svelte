<script lang="ts">
	import nextBtn from '$lib/icons/next-btn.svg';
	import prevBtn from '$lib/icons/prev-btn.svg';


	/** @type {import('./$types').PageData} */
	export let data;

	let currentSlide = 0;

	const nextSlide = () => {
		currentSlide = currentSlide === data.tools.length - 1 ? 0 : currentSlide + 1;
	};

	const prevSlide = () => {
		currentSlide = currentSlide === 0 ? data.tools.length - 1 : currentSlide - 1;
	};
</script>

<div class="pt-20">
	<div class="text-madblue font-anton underline flex gap-x-1 capitalize mb-4 text-sm sm:text-3xl sm:gap-x-4">
		<a href="/about">About</a>
		<span>&gt;</span>
		<a href="/about/{data.name}">{data.name}</a>
	</div>
	<div class="grid-cols-12 gap-x-8 mb-4 sm:grid sm:mb-8">
		<div class="col-span-4">
			<div class="relative overflow-hidden">
				<img src={data.cover} alt="cover" class="w-full object-cover absolute -z-10" />
				<div class="flex flex-col justify-center items-center text-white py-4 border-madred border-4 sm:border">
					<img src={data.avatar} alt="avatar" class=" w-[100px] rounded-full" />
					<p class="font-anton text-lg uppercase mt-2">{data.fullName}</p>
					<p class="font-roboto text-sm">{data.role}</p>
				</div>
			</div>
			<div class="bg-madred p-4 pt-0">
				<p class="font-anton text-xl text-center text-white py-1">PROFILE</p>
				<div class="overflow-y-scroll bg-madbase p-4 max-h-[200px]  sm:max-h-[400px]">
					<p class="font-roboto font-extrabold text-sm sm:text-lg">{@html data.bio}</p>
				</div>
			</div>
		</div>
		<div class="col-span-8 mt-4 sm:mt-0">
			<div class="flex justify-start gap-x-4 bg-madred items-center">
				<div class="relative w-1/4 sm:h-[130px]">
					<img src={data.toolsIcon} alt="tools icon" class=" w-full sm:absolute sm:bottom-0 sm:h-[175px]" />
				</div>
				<div class="font-anton uppercase flex-grow">
					<p class="italic text-white mb-2 text-3xl sm:text-6xl">gear collections</p>
					<p class="underline text-madyellow text-sm sm:text-2xl">by {data.name}</p>
				</div>
			</div>
			<div class="transition-all duration-200 relative h-[300px] sm:h-full">
				{#each data.tools as slide, idx}
					<div
						class:hidden={idx != currentSlide}
						class=" overflow-hidden absolute  h-full w-full top-0 flex flex-col max-h-[300px] sm:max-h-[500px] justify-evenly sm:justify-normal"
					>
						<div class="flex items-center justify-end  gap-x-4 px-4 sm:px-8 sm:gap-x-10 sm:flex-grow">
							<!-- svelte-ignore a11y-click-events-have-key-events -->
							<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
							<img src={prevBtn} alt="prev btn" class="cursor-pointer h-5 sm:h-12" on:click={prevSlide} />
							<div class="flex-grow font-anton">
								<p class="text-madyellow mb-4 text-3xl sm:text-7xl">{slide.title}</p>
								<p class="text-white sm:text-3xl">{slide.description}</p>
							</div>
                            <!-- svelte-ignore a11y-click-events-have-key-events -->
							<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
							<img src={nextBtn} alt="next btn" class="cursor-pointer h-5 sm:h-12" on:click={nextSlide} />
						</div>
						<div class="sm:pt-20 sm:pb-16">
							<a
								href="/about/{data.name}/gears"
								class="underline font-roboto font-bold text-madgreen bg-madblue px-2 py-1 ml-8 text-[10px]  sm:p-2 sm:ml-20 sm:text-lg"
								>More Collection</a
							>
						</div>
						<img 
							src={slide.image}
							alt={slide.title}
							class=" h-full max-h-[500px] w-full object-cover object-center aspect-video -z-20 absolute"
						/>
						<div class="absolute -z-10 h-full max-h-[500px] w-full bg-black/60"></div>
					</div>
				{/each}
			</div>
		</div>
	</div>
    <img src={data.banner} alt="banner" class="w-full rounded-lg sm:rounded-3xl">
</div>
