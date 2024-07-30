<script lang="ts">
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<div class="pt-20">
	<div class="text-madblue font-anton underline flex capitalize mb-2 text-sm gap-x-1 sm:mb-10 sm:text-3xl sm:gap-x-4">
		<a href="/about">About</a>
		<span>&gt;</span>
		<a href="/about/{data.name}">{data.name}</a>
		<span>&gt;</span>
		<a href="/about/{data.name}/gears">Gear Collection</a>
	</div>
	<div class="mb-8">
		<div class="flex justify-start gap-x-4 bg-madred items-center mb-2 sm:mb-6">
			<div class="relative w-1/4 sm:w-full sm:max-w-[10%] sm:h-[130px]">
				<img src={data.toolsIcon} alt="tools icon" class="w-full sm:h-[150px] sm:absolute sm:bottom-0" />
			</div>
			<div class="font-anton uppercase flex-grow">
				<p class="italic text-white mb-2 text-3xl sm:text-6xl">gear collections</p>
				<p class="underline text-madyellow text-sm sm:text-2xl">by {data.name}</p>
			</div>
		</div>
		<div class="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-6">
			{#each data.tools as tool}
				<div class="col-span-1 bg-madsecondary h-full p-2 sm:p-4">
					<img src={tool.image} alt={tool.title} class="w-full aspect-square mb-2 sm:mb-4">
					<p class="font-anton text-madyellow text-sm sm:mb-4 sm:text-3xl">{tool.title}</p>
					<p class="font-roboto text-white font-extrabold text-[10px] mb-4 sm:text-lg ">{tool.title}</p>
				</div>
			{/each}
		</div>
	</div>
</div>
