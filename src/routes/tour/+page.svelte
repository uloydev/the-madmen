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
	<div class="relative mb-10">
		<div class="rounded-xl border-4 border-madblue max-h-[400px] overflow-hidden mt-20">
			<img src={slider} alt="slider" class="w-full max-h-[500px] object-cover object-top" />
		</div>
		<div class="absolute bottom-0 p-8">
			<h1 class="font-jotione text-madyellow text-8xl">Tour</h1>
		</div>
	</div>
	<p class="my-6 py-4 font-anton text-3xl text-madyellow text-center bg-madred">UPCOMING SHOW</p>
	{#each shows as show}
		<div class="flex flex-col py-2">
			<div class="bg-white p-10 grid grid-cols-4 gap-x-8 items-center">
				<p class="font-anton text-3xl">{show.date}</p>
                <p class="font-anton text-3xl text-madblue">{show.title}</p>
                <div class="font-roboto text-lg font-extrabold text-center">
                    <p>{show.venue}</p>
                    <p>{show.location}</p>
                </div>
                <div class="flex items-center justify-center">
                    <a href="#" class="p-4 bg-madblue text-madyellow text-center">BUY TICKET</a>
                </div>
			</div>
		</div>
	{/each}
</div>
