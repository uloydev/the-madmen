<script lang="ts">
	import { onMount } from 'svelte';

	import slider1 from '$lib/images/about/slider1.png';
	import product1a from '$lib/images/shop/product1a.png';
	import product1b from '$lib/images/shop/product1b.png';
	import product2a from '$lib/images/shop/product2a.png';
	import product2b from '$lib/images/shop/product2b.png';
	import product3 from '$lib/images/shop/product3.png';
	import product4 from '$lib/images/shop/product4.png';
	import product5a from '$lib/images/shop/product5a.png';
	import product5b from '$lib/images/shop/product5b.png';
	import product6a from '$lib/images/shop/product6a.png';
	import product6b from '$lib/images/shop/product6b.png';
	import product6c from '$lib/images/shop/product6c.png';
	import product7 from '$lib/images/shop/product7.png';

	const products = [
		{
			id: 1,
			title: 'Mental Break Dance - Black T-Shirt',
			image: [product1a, product1b],
			price: 150000
		},
		{ id: 2, title: 'MADFRENS - Black T-Shirt', image: [product2a, product2b], price: 200000 },
		{ id: 3, title: 'Mantul Studio Solo - Black T-Shirt', image: [product3], price: 180000 },
		{ id: 4, title: 'Mantul Studio Solo - White T-Shirt', image: [product4], price: 180000 },
		{
			id: 5,
			title: 'Contemplation Pt.1 - Black T-Shirt',
			image: [product5a, product5b],
			price: 175000
		},
		{
			id: 6,
			title: 'Mental Break Dance - Cassette',
			image: [product6a, product6b, product6c],
			price: 100000
		},
		{ id: 7, title: 'Mental Break Dance - CD', image: [product7], price: 60000 }
	];

	const sliders = [slider1, slider1];
	let sliderIndex = 0;

	const IDR = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' });

	onMount(() => {
		setInterval(() => {
			sliderIndex = sliderIndex === sliders.length - 1 ? 0 : sliderIndex + 1;
		}, 3000);
	});
</script>

<div>
	<div class="relative mb-2 sm:mb-10">
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
		<div class="absolute bottom-0 p-4 sm:p-8">
			<h1 class="font-anton text-madyellow text-[40px] sm:text-8xl italic">SHOP</h1>
		</div>
	</div>
	<p class="py-4 font-anton text-3xl text-madyellow text-center bg-madred my-4 sm:my-6">PRODUCTS</p>
	<div class="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-4">
		{#each products as product}
			<a href="/shop/{product.id}" class="sm:p-2 block">
				<div class="grid grid-cols-2  bg-madsecondary p-3 gap-x-3 sm:gap-x-6 sm:p-6 hover:bg-madblue hover:text-white">
					<img src={product.image[0]} alt={product.title} class="w-full" />
					<div class="flex flex-col justify-between font-roboto">
						<p class="font-extrabold text-[10px] sm:text-xl">{product.title}</p>
						<div>
							<p class="text-[7px] sm:text-sm sm:mb-2">{IDR.format(product.price)}</p>
							<a id="product{product.id}"
								href="/shop/{product.id}"
								class="bg-madbase px-1 sm:p-1.5 underline text-madblue font-bold text-[10px] sm:text-lg hover:bg-madred hover:text-madyellow">Buy Now</a
							>
						</div>
					</div>
				</div>
			</a>
		{/each}
	</div>
	<div class="text-center text-xl font-anton mt-4 sm:text-3xl sm:mt-8">
		1 / 1
	</div>
</div>
