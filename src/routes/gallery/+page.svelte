<script lang="ts">
	import slide from '$lib/images/gallery/slide.png';

	import post1 from '$lib/images/gallery/post1.png';
	import post2 from '$lib/images/gallery/post2.png';
	import post3 from '$lib/images/gallery/post3.png';
	import post4 from '$lib/images/gallery/post4.png';
	import post5 from '$lib/images/gallery/post5.png';
	import post6 from '$lib/images/gallery/post6.png';
	import post7 from '$lib/images/gallery/post7.png';
	import post8 from '$lib/images/gallery/post8.png';
	import post9 from '$lib/images/gallery/post9.png';

	import post1a from '$lib/images/gallery/post1a.png';
	import post1b from '$lib/images/gallery/post1b.png';
	import post1c from '$lib/images/gallery/post1c.png';
	import post1d from '$lib/images/gallery/post1d.png';
	import post1e from '$lib/images/gallery/post1e.png';
	import post1f from '$lib/images/gallery/post1f.png';
	import post1g from '$lib/images/gallery/post1g.png';
	import post1h from '$lib/images/gallery/post1h.png';
	import post1i from '$lib/images/gallery/post1i.png';

	import post2a from '$lib/images/gallery/post2a.png';
	import post2b from '$lib/images/gallery/post2b.png';
	import post2c from '$lib/images/gallery/post2c.png';
	import post2d from '$lib/images/gallery/post2d.png';
	import post2e from '$lib/images/gallery/post2e.png';
	import post2f from '$lib/images/gallery/post2f.png';
	import post2g from '$lib/images/gallery/post2g.png';
	import post2h from '$lib/images/gallery/post2h.png';
	import post2i from '$lib/images/gallery/post2i.png';
	import post2j from '$lib/images/gallery/post2j.png';

	import post3a from '$lib/images/gallery/post3a.png';
	import post3b from '$lib/images/gallery/post3b.png';
	import post3c from '$lib/images/gallery/post3c.png';
	import post3d from '$lib/images/gallery/post3d.png';
	import post3e from '$lib/images/gallery/post3e.png';
	import post3f from '$lib/images/gallery/post3f.png';
	import post3g from '$lib/images/gallery/post3g.png';
	import post3h from '$lib/images/gallery/post3h.png';
	import post3i from '$lib/images/gallery/post3i.png';
	import post3j from '$lib/images/gallery/post3j.png';

	import post4a from '$lib/images/gallery/post4a.png';
	import post4b from '$lib/images/gallery/post4b.png';
	import post4c from '$lib/images/gallery/post4c.png';
	import post4d from '$lib/images/gallery/post4d.png';
	import post4e from '$lib/images/gallery/post4e.png';
	import post4f from '$lib/images/gallery/post4f.png';
	import post4g from '$lib/images/gallery/post4g.png';
	import post4h from '$lib/images/gallery/post4h.png';
	import post4i from '$lib/images/gallery/post4i.png';
	import post4j from '$lib/images/gallery/post4j.png';

	import post5a from '$lib/images/gallery/post5a.png';
	import post5b from '$lib/images/gallery/post5b.png';
	import post5c from '$lib/images/gallery/post5c.png';
	import post5d from '$lib/images/gallery/post5d.png';
	import post5e from '$lib/images/gallery/post5e.png';
	import post5f from '$lib/images/gallery/post5f.png';
	import post5g from '$lib/images/gallery/post5g.png';
	import post5h from '$lib/images/gallery/post5h.png';
	import post5i from '$lib/images/gallery/post5i.png';
	import post5j from '$lib/images/gallery/post5j.png';

	import post6a from '$lib/images/gallery/post6a.png';
	import post6b from '$lib/images/gallery/post6b.png';
	import post6c from '$lib/images/gallery/post6c.png';
	import post6d from '$lib/images/gallery/post6d.png';
	import post6e from '$lib/images/gallery/post6e.png';
	import post6f from '$lib/images/gallery/post6f.png';
	import post6g from '$lib/images/gallery/post6g.png';
	import post6h from '$lib/images/gallery/post6h.png';
	import post6i from '$lib/images/gallery/post6i.png';
	import post6j from '$lib/images/gallery/post6j.png';

	import post7a from '$lib/images/gallery/post7a.png';
	import post7b from '$lib/images/gallery/post7b.png';
	import post7c from '$lib/images/gallery/post7c.png';
	import post7d from '$lib/images/gallery/post7d.png';
	import post7e from '$lib/images/gallery/post7e.png';
	import post7f from '$lib/images/gallery/post7f.png';
	import post7g from '$lib/images/gallery/post7g.png';
	import post7h from '$lib/images/gallery/post7h.png';
	import post7i from '$lib/images/gallery/post7i.png';
	import post7j from '$lib/images/gallery/post7j.png';

	import post8a from '$lib/images/gallery/post8a.png';
	import post8b from '$lib/images/gallery/post8b.png';
	import post8c from '$lib/images/gallery/post8c.png';
	import post8d from '$lib/images/gallery/post8d.png';
	import post8e from '$lib/images/gallery/post8e.png';
	import post8f from '$lib/images/gallery/post8f.png';
	import post8g from '$lib/images/gallery/post8g.png';
	import post8h from '$lib/images/gallery/post8h.png';
	import post8i from '$lib/images/gallery/post8i.png';
	import post8j from '$lib/images/gallery/post8j.png';

	import post9a from '$lib/images/gallery/post9a.png';
	import post9b from '$lib/images/gallery/post9b.png';
	import post9c from '$lib/images/gallery/post9c.png';
	import post9d from '$lib/images/gallery/post9d.png';
	import post9e from '$lib/images/gallery/post9e.png';
	import post9f from '$lib/images/gallery/post9f.png';
	import post9g from '$lib/images/gallery/post9g.png';
	import post9h from '$lib/images/gallery/post9h.png';
	import post9i from '$lib/images/gallery/post9i.png';
	import { DragScrollHandler } from '$lib/utils/scroll';
	import { onMount } from 'svelte';

	import playBtn from '$lib/icons/play-btn.svg';
	import right from '$lib/icons/right.svg';
	import left from '$lib/icons/left.svg';

	const posts = [
		{
			thumbnail: post1,
			title: 'In With The Out, Old With The New, Vol.2 Recording Session (Jakarta)',
			date: '27.06.2024',
			images: [post1a, post1b, post1c, post1d, post1e, post1f, post1g, post1h, post1i]
		},
		{
			thumbnail: post2,
			title: 'BBC Release Party (M bloc, Jakarta)',
			date: '07.03.2024',
			images: [post2a, post2b, post2c, post2d, post2e, post2f, post2g, post2h, post2i, post2j]
		},
		{
			thumbnail: post3,
			title: 'PHLOX! Live Recording (SAE Institute, Jakarta)',
			date: '14.08.2023',
			images: [post3a, post3b, post3c, post3d, post3e, post3f, post3g, post3h, post3i, post3j]
		},
		{
			thumbnail: post4,
			title: 'Java Jazz Festival (Jakarta International Expo, Jakarta)',
			date: '02.06.2023',
			images: [post4a, post4b, post4c, post4d, post4e, post4f, post4g, post4h, post4i, post4j]
		},
		{
			thumbnail: post5,
			title: 'Sticking Glue No. 4 (Taman Budaya Jawa Tengah, Surakarta)',
			date: '07.05.2023',
			images: [post5a, post5b, post5c, post5d, post5e, post5f, post5g, post5h, post5i, post5j]
		},
		{
			thumbnail: post6,
			title: 'Pasar Musik (Gambir Expo, Jakarta)',
			date: '12.02.2023',
			images: [post6a, post6b, post6c, post6d, post6e, post6f, post6g, post6h, post6i, post6j]
		},
		{
			thumbnail: post7,
			title: 'OKT FST (Bali)',
			date: '22.10.2022',
			images: [post7a, post7b, post7c, post7d, post7e, post7f, post7g, post7h, post7i, post7j]
		},
		{
			thumbnail: post8,
			title: 'Era Agressor Tour x The Brandals (Surabaya)',
			date: '17.07.2022',
			images: [post8a, post8b, post8c, post8d, post8e, post8f, post8g, post8h, post8i, post8j]
		},
		{
			thumbnail: post9,
			title: 'Asean Music Showcase Festival (Haw Par Villa, Singapore)',
			date: '27.06.2024',
			images: [post9a, post9b, post9c, post9d, post9e, post9f, post9g, post9h, post9i]
		}
	];

	/** @type {import('./$types').PageData} */
	export let data;

	let photoSlider: string[] = [];
	let currentImage = 0;
	let photoSliderActive = false;

	function openPhotoSlider(idx: number) {
		photoSlider = posts[idx].images;
		currentImage = 0;
		photoSliderActive = true;
	}

	function handleOutsideClick(event: MouseEvent) {
		if (event.target === event.currentTarget) {
			photoSliderActive = false;
		}
	}

	// mext image and loop
	function nextImage() {
		if (currentImage < photoSlider.length - 1) {
			currentImage++;
		} else {
			currentImage = 0;
		}
	}

	let isDragging = false;
	let startX: number, scrollLeft :number;

	// previous image and loop
	function prevImage() {
		if (currentImage > 0) {
			currentImage--;
		} else {
			currentImage = photoSlider.length - 1;
		}
	}

	let dragScrollContainer: HTMLElement;
	let dragScroll: DragScrollHandler;

	onMount(() => {
		dragScroll = new DragScrollHandler(dragScrollContainer);
	});
</script>

<div class="overflow-x-hidden">
	<div class="relative mb-10">
		<div class="rounded-xl border-4 border-madblue max-h-[400px] overflow-hidden mt-20">
			<img src={slide} alt="slider" class="w-full max-h-[500px] object-cover object-top" />
		</div>
		<div class="absolute bottom-0 p-8">
			<h1 class=" font-anton text-madyellow text-8xl italic">GALLERY</h1>
		</div>
	</div>
	<p class="my-6 py-4 font-anton text-3xl text-madyellow text-center bg-madred">VIDEOS</p>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div class="overflow-x-scroll select-none" id="scrollContainer" bind:this={dragScrollContainer} on:mousedown={dragScroll.dragMouseDown} on:mouseup={dragScroll.dragMouseUp} on:mousemove={dragScroll.dragMouseScroll} on:mouseleave={dragScroll.dragMouseLeave}>
		<div class="flex">
			{#each data.videos as video}
				<div class="flex-none w-1/3 p-4">
					<div class="relative">
						<img src={video.thumbnail} alt={video.title} class="w-full aspect-video">
						<span class="absolute bottom-4 right-12 z-10 text-white">{video.duration}</span>
						<div class="absolute top-0 left-0 h-full w-full bg-black/50"></div>
						<a href={video.link} target="_blank">
							<img src={playBtn} alt="play {video.title}" class="w-12 aspect-square absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
						</a>
					</div>
					<h1 class="font-roboto text-lg font-extrabold my-4">{video.title}</h1>
					<p class="text-sm font-roboto text-[#8A8A8A]">{video.views}x ditonton • {video.publishedAt}</p>
				</div>
			{/each}
		</div>
	</div>
	<p class="my-6 py-4 font-anton text-3xl text-white text-center bg-madgreen">PHOTOS</p>
	<div class="grid grid-cols-3 gap-4">
		{#each posts as post, idx}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<div class="relative" on:click={(e) => openPhotoSlider(idx)}>
				<img src={post.thumbnail} alt="post" class="w-full h-full object-cover" />
				<div
					class="absolute top-0 left-0 w-full h-full flex flex-col justify-end px-8 py-2 font-roboto text-white"
				>
					<p class="text-2xl font-extrabold mb-4">{post.title}</p>
					<p class="text-sm">{post.date}</p>
				</div>
			</div>
		{/each}
	</div>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div
		class="fixed top-0 left-0 h-screen w-screen bg-black/80 flex justify-center items-center z-50"
		class:hidden={!photoSliderActive}
		on:click={handleOutsideClick}
	>
		<div class="relative w-full max-w-[60%] max-h-[75%]">
			{#each photoSlider as photo, idx}
				<img
					src={photo}
					alt="photo {idx}"
					class="w-full aspect-video absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
					class:hidden={currentImage != idx}
				/>
			{/each}
			<button on:click={prevImage} class="absolute top-1/2 left-10 -translate-y-1/2">
				<img src={left} alt="prev button" class="h-8 aspect-square" />
			</button>
			<button on:click={nextImage} class="absolute top-1/2 right-10 -translate-y-1/2">
				<img src={right} alt="next button" class="h-8 aspect-square" />
			</button>
		</div>
	</div>
</div>

<style>
	#scrollContainer::-webkit-scrollbar {
		display: none;
	}
</style>