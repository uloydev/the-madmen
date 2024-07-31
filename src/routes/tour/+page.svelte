<script lang="ts">
	import slider from '$lib/images/tour/slider.png';

	let shows = [
		{
			title: 'BIANG KEROK',
			date: '2 JUN 2024',
			venue: 'Museum Kebangkitan Nasional,',
			location: 'Jakarta, INA'
		},
		{
			title: 'POLIMPANG Jilid 1',
			date: '26 APR 2024',
			venue: 'Wangsa Timoer,',
			location: 'Jakarta, INA'
		},
		{
			title: 'POPCITY MARKET',
			date: '30 MAR 2024',
			venue: 'Bloc Bar (M Bloc),',
			location: 'Jakarta, INA'
		}
	];
</script>

<div>
	<div class="relative mb-2 sm:mb-10">
		<div class="rounded-xl border-4 border-madblue max-h-[500px] overflow-hidden mt-12">
			<img src={slider} alt="slider" class="w-full max-h-[500px] object-cover object-top" />
		</div>
		<div class="absolute bottom-0 p-4 sm:p-8">
			<h1 class="text-shadow font-jotione text-madyellow text-[40px] sm:text-8xl">Tour</h1>
		</div>
	</div>
	<p class="py-4 font-anton text-3xl text-madyellow text-center bg-madred my-4 sm:my-6 ">UPCOMING SHOW</p>
	{#each shows as show}
		<div class="flex flex-col py-1 sm:py-2">
			<div class="bg-white  grid grid-cols-4 justify-evenly items-center gap-x-4 px-4 py-2 sm:gap-x-8 sm:p-10">
				<p class="font-anton text-sm sm:text-3xl">{show.date}</p>
                <p class="font-anton text-sm sm:text-3xl text-madblue">{show.title}</p>
                <div class="font-roboto text-[10px] sm:text-lg font-extrabold text-center">
                    <p>{show.venue}</p>
                    <p>{show.location}</p>
                </div>
                <div class="flex items-center justify-end">
                    <a href="#" class="bg-madblue text-madyellow text-center text-[10px] p-1 sm:p-4 sm:text-base">BUY TICKET</a>
                </div>
			</div>
		</div>
	{/each}
	<p class="font-roboto text-[10px] text-center mt-2 sm:mt-4 sm:text-base">POWERED BY BANDSINTOWN</p>
</div>
