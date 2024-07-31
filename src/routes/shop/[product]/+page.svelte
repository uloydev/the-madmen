<script lang="ts">
	import dropdown from '$lib/icons/dropdown.png';
	import cs from '$lib/images/shop/cs.png';

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

	/** @type {import('./$types').PageData} */
	export let data;

	let products = [
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

	products = products.filter((product) => product.id !== data.id);

	let isDropdownActive = false;
	let currentImage = 0;
	const IDR = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' });
</script>

<div class="pt-12">
	<div
		class="text-madblue font-anton underline flex capitalize mb-2 text-sm gap-x-1 sm:mb-10 sm:text-3xl sm:gap-x-4"
	>
		<a href="/shop">Shop</a>
		<span>&gt;</span>
		<a href="/shop/{data.id}">{data.title}</a>
	</div>
	<div class="sm:grid grid-cols-2 gap-x-8">
		<div class="col-span-1 w-full">
			<div class="grid auto-rows-max grid-cols-12 sm:grid-rows-none sm:gap-x-4">
				<div
					class="w-full row-start-2 col-span-12 grid grid-cols-4 mt-4 gap-x-4 sm:my-0 sm:block sm:col-span-1 sm:row-start-1 sm:h-full"
				>
					{#each data.image as img, idx}
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
						<img
							src={img}
							alt={data.title}
							class="w-full sm:mb-2 aspect-square cursor-pointer"
							on:click={() => {
								currentImage = idx;
							}}
						/>
					{/each}
				</div>
				{#each data.image as img, idx}
					<img
						src={img}
						alt={data.title}
						class="w-full col-span-full col-start-1 row-start-1 sm:col-span-11 sm:col-start-2 aspect-square"
						class:hidden={currentImage != idx}
					/>
				{/each}
			</div>
		</div>
		<div class="col-span-1 font-anton">
			<p class="text-madred mt-2 mb-6 text-lg sm:my-12 sm:text-3xl">{data.title}</p>
			<p class="text-3xl mb-4 sm:text-8xl sm:mb-12">{IDR.format(data.price)}</p>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<div
				class="border border-black px-2 py-1 bg-white font-roboto font-bold text-madblue underline flex justify-between items-center cursor-pointer relative select-none sm:w-3/4 sm:text-lg"
				on:click={() => {
					isDropdownActive = !isDropdownActive;
				}}
			>
				Description <img
					src={dropdown}
					class="h-2 transition-all"
					class:-rotate-180={isDropdownActive}
					alt="dropdown icon"
				/>
				<div
					class="h-fit w-full bg-white absolute top-[100%] left-0 transition-all border border-black p-2 text-black font-roboto text-sm"
					class:h-0={!isDropdownActive}
					class:hidden={!isDropdownActive}
				>
					{@html data.description}
				</div>
			</div>
			<div class="flex gap-x-4 sm:block">
				<div class="flex-grow grid grid-cols-6 items-center mt-4 sm:mt-12">
					<label class="col-span-2 sm:col-span-1 text-2xl sm:text-3xl text-madred" for="sizeInput">Size</label>
					<select
						name="size"
						id="sizeInput"
						class="col-span-4 text-2xl px-2 sm:col-span-1 sm:text-3xl sm:px-4 block border border-black"
					>
						<option value="-" disabled selected>-</option>
						<option value="S">S</option>
						<option value="M">M</option>
						<option value="L">L</option>
						<option value="XL">XL</option>
						<option value="XXL">XXL</option>
					</select>
				</div>
				<div class="flex-grow grid grid-cols-6 items-center mt-4 sm:mt-12 sm:mb-0">
					<label class="col-span-2 sm:col-span-1 text-2xl sm:text-3xl text-madred" for="qtyInput">Qty</label>
					<select
						name="qty"
						id="qtyInput"
						class="col-span-4 text-2xl px-2 sm:col-span-1 sm:text-3xl sm:px-4 block border border-black"
					>
						<option value="0" disabled selected>0</option>
						{#each Array.from({ length: 9 }, (_, i) => i + 1) as qty}
							<option value={qty}>{qty}</option>
						{/each}
					</select>
					<a
						href="#"
						class="absolute w-screen left-0 bottom-0 font-anton font-bold text-3xl text-madblue underline text-start col-span-6 sm:col-span-3 sm:ml-16 sm:relative -mb-4 ml-4"
						>ADD TO CART</a
					>
				</div>
			</div>
		</div>
	</div>
	<div class="mt-20 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:mt-0 ">
		<div class="col-span-1 w-full">
			<img src={cs} alt="customer service" class="w-full mt-8" />
		</div>
		<div class="col-span-1 w-full">
			<p class="font-roboto font-extrabold text-xs sm:text-lg mt-4 sm:mt-20">
				Customer Service :
				<br />
				Senin - Jum’at : 09.00 - 18.00 WIB
				<br />
				Sabtu : 09.00 - 16.00 WIB
				<br />
				<br />
				Close Order :
				<br />
				Senin - Jum’at : 16.00 WIB
				<br />
				Sabtu : 15.00 WIB
				<br />
				<br />
				Order yang masuk diatas jam close order kami, akan di proses di hari selanjut nya.
			</p>
		</div>
	</div>
	<p class="py-4 font-anton text-3xl text-madyellow text-center bg-madred my-4 sm:my-6">
		YOU MAY ALSO LIKE
	</p>
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
</div>
