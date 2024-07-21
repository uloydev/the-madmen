<script lang="ts">
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<div class="pt-20">
	<div class="text-madblue font-anton underline text-3xl flex gap-x-4 capitalize mb-10">
		<a href="/about">About</a>
		<span>&gt;</span>
		<a href="/about/{data.name}">{data.name}</a>
		<span>&gt;</span>
		<a href="/about/{data.name}/gears">Gear Collection</a>
	</div>
	<div class="mb-8">
		<div class="flex justify-start gap-x-4 bg-madred items-center mb-6">
			<div class="relative w-full max-w-[10%] h-[130px]">
				<img src={data.toolsIcon} alt="tools icon" class="h-[150px] absolute bottom-0" />
			</div>
			<div class="font-anton uppercase flex-grow">
				<p class="text-6xl italic text-white mb-2">gear collections</p>
				<p class="text-2xl underline text-madyellow">by {data.name}</p>
			</div>
		</div>
		<div class="grid grid-cols-3 gap-6">
			{#each data.tools as tool}
				<div class="col-span-1 p-4 bg-madsecondary h-full">
					<img src={tool.image} alt={tool.title} class="w-full aspect-square mb-4">
					<p class="font-anton text-madyellow text-3xl mb-4">{tool.title}</p>
					<p class="font-roboto text-white text-lg font-extrabold mb-4">{tool.title}</p>
				</div>
			{/each}
		</div>
	</div>
</div>
