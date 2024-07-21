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
	<div class="text-madblue font-anton underline text-3xl flex gap-x-4 capitalize mb-4">
		<a href="/about">About</a>
		<span>&gt;</span>
		<a href="/about/{data.name}">{data.name}</a>
	</div>
	<div class="grid grid-cols-12 gap-x-8 mb-8">
		<div class="col-span-4">
			<div class="relative overflow-hidden">
				<img src={data.cover} alt="cover" class="w-full object-cover absolute -z-10" />
				<div class="flex flex-col justify-center items-center border border-madred text-white py-4">
					<img src={data.avatar} alt="avatar" class=" w-[100px] rounded-full" />
					<p class="font-anton text-lg uppercase">{data.fullName}</p>
					<p class="font-roboto text-sm">{data.role}</p>
				</div>
			</div>
			<div class="bg-madred p-4 pt-8">
				<div class="max-h-[400px] overflow-y-scroll bg-madbase p-4">
					<p class="font-roboto font-extrabold text-lg">{@html data.bio}</p>
				</div>
			</div>
		</div>
		<div class="col-span-8">
			<div class="flex justify-start gap-x-4 bg-madred items-center">
				<div class="relative w-1/4 h-[130px]">
					<img src={data.toolsIcon} alt="tools icon" class="h-[175px] absolute bottom-0" />
				</div>
				<div class="font-anton uppercase flex-grow">
					<p class="text-6xl italic text-white mb-2">gear collections</p>
					<p class="text-2xl underline text-madyellow">by {data.name}</p>
				</div>
			</div>
			<div class="h-full transition-all duration-200 relative">
				{#each data.tools as slide, idx}
					<div
						class:hidden={idx != currentSlide}
						class=" overflow-hidden absolute max-h-[500px] h-full w-full top-0 flex flex-col"
					>
						<div class="flex-grow flex items-center justify-end px-8 gap-x-10">
							<!-- svelte-ignore a11y-click-events-have-key-events -->
							<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
							<img src={prevBtn} alt="prev btn" class="h-12 cursor-pointer" on:click={prevSlide} />
							<div class="flex-grow font-anton">
								<p class="text-7xl text-madyellow mb-4">{slide.title}</p>
								<p class="text-white text-3xl">{slide.description}</p>
							</div>
                            <!-- svelte-ignore a11y-click-events-have-key-events -->
							<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
							<img src={nextBtn} alt="next btn" class="h-12 cursor-pointer" on:click={nextSlide} />
						</div>
						<div class="pt-20 pb-16">
							<a
								href="/about/{data.name}/gears"
								class="underline text-lg font-roboto font-bold text-madgreen bg-madblue p-2 ml-20"
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
    <img src={data.banner} alt="banner" class="w-full rounded-3xl">
</div>
