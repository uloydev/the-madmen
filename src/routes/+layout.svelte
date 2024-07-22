<script lang="ts">
	import { onMount } from 'svelte';
	import '../app.css';

	import logo from '$lib/images/logo.png';
	import logoLong from '$lib/images/logo-long.png';

	import youtubeIcon from '$lib/icons/youtube.png';
	import facebookIcon from '$lib/icons/facebook.png';
	import instagramIcon from '$lib/icons/instagram.png';
	import spotifyIcon from '$lib/icons/spotify.png';
	import appleMusicIcon from '$lib/icons/apple-music.png';
	import { page } from '$app/stores';

	const socials = [
		{ name: 'spotify', icon: spotifyIcon, link: 'https://www.spotify.com' },
		{ name: 'apple music', icon: appleMusicIcon, link: 'https://www.apple.com' },
		{ name: 'instagram', icon: instagramIcon, link: 'https://www.instagram.com' },
		{ name: 'facebook', icon: facebookIcon, link: 'https://www.facebook.com' },
		{ name: 'youtube', icon: youtubeIcon, link: 'https://www.youtube.com' }
	];

	const footerLinks = [
		{ text: 'About', link: '/about' },
		{ text: 'Privacy Policy', link: '/privacy-policy' },
		{ text: 'Discord', link: '/discord' },
		{ text: 'Brand Guidelines', link: '/brand-guidelines' },
		{ text: 'Contact', link: '/contact' }
	];

	// check current page path
	let path: string;

	$: path = $page.url.pathname;
</script>

<div class="overflow-x-hidden">
	<div class="app sm:container sm:mx-auto pt-2 px-12">
		<nav
			class=" h-[75px] pl-6 pr-8 w-full bg-gradient-to-b from-[#0000FE] to-[#000098] flex justify-between"
		>
			<div class="flex items-center">
				<a href="/">
					<img src={logo} alt="logo mad madmen" class="h-[50px]" />
				</a>
			</div>
			<div class="flex gap-x-8 font-anton items-center text-white text-2xl capitalize">
				<a
					href="/about"
					class="border-b border-white"
					class:border-madyellow={path.includes('/about')}
					class:text-madyellow={path.includes('/about')}>about</a
				>
				<a
					href="/music"
					class="border-b border-white"
					class:border-madyellow={path.includes('/music')}
					class:text-madyellow={path.includes('/music')}>music</a
				>
				<a
					href="/gallery"
					class="border-b border-white"
					class:border-madyellow={path.includes('/gallery')}
					class:text-madyellow={path.includes('/gallery')}>gallery</a
				>
				<a
					href="/tour"
					class="border-b border-white"
					class:border-madyellow={path.includes('/tour')}
					class:text-madyellow={path.includes('/tour')}>tour</a
				>
				<a
					href="/shop"
					class="border-b border-white"
					class:border-madyellow={path.includes('/shop')}
					class:text-madyellow={path.includes('/shop')}>shop</a
				>
				<a
					href="/contact"
					class="border-b border-white"
					class:border-madyellow={path.includes('/contact')}
					class:text-madyellow={path.includes('/contact')}>contact</a
				>
				<a
					href="/discord"
					class="border-b border-white"
					class:border-madyellow={path.includes('/discord')}
					class:text-madyellow={path.includes('/discord')}>discord</a
				>
			</div>
		</nav>
		<div
		id="runningText"
		class="w-screen py-10 absolute left-0 text-madgreen text-xl font-anton overflow-hidden"
	>
		<div class="running-wrapper relative w-screen text-nowrap flex items-center justify-evenly">
			<span class="running-item running-item-1">MAHARUPA - OUT NOW!</span>
			<div class="inline-block running-item running-item-2 h-4 w-4">
				<span class="h-4 w-4 inline-block bg-madgreen rounded-full mx-4"></span>
			</div>
			<span class="running-item running-item-3">MAHARUPA - OUT NOW!</span>
			<div class="inline-block running-item running-item-4 h-4 w-4">
				<span class="h-4 w-4 inline-block bg-madgreen rounded-full mx-4"></span>
			</div>
			<span class="running-item running-item-5">MAHARUPA - OUT NOW!</span>
			<div class="inline-block running-item running-item-6 h-4 w-4">
				<span class="h-4 w-4 inline-block bg-madgreen rounded-full mx-4"></span>
			</div>
			<span class="running-item running-item-7">MAHARUPA - OUT NOW!</span>
			<div class="inline-block running-item running-item-8 h-4 w-4">
				<span class="h-4 w-4 inline-block bg-madgreen rounded-full mx-4"></span>
			</div>
			<span class="running-item running-item-9">MAHARUPA - OUT NOW!</span>
			<div class="inline-block running-item running-item-10 h-4 w-4">
				<span class="h-4 w-4 inline-block bg-madgreen rounded-full mx-4"></span>
			</div>
			<span class="running-item running-item-11">MAHARUPA - OUT NOW!</span>
			<div class="inline-block running-item running-item-12 h-4 w-4">
				<span class="h-4 w-4 inline-block bg-madgreen rounded-full mx-4"></span>
			</div>
		</div>
	</div>
		<main>
			<slot />
		</main>

		<div class="w-full h-1 bg-black my-10"></div>

		<footer class="grid grid-cols-3 gap-x-4 pb-20 relative overflow-x-visible">
			<img
				src={logoLong}
				alt="logoLong"
				class="h-full w-screen object-cover absolute -z-10 overflow-x-visible"
			/>
			<div class="">
				<p class="font-anton text-3xl mb-8">Social Media</p>
				<div class="flex gap-x-8 items-center">
					{#each socials as social}
						<a href={social.link} target="_blank" rel="noopener noreferrer">
							<img src={social.icon} alt={social.name} class="w-8" />
						</a>
					{/each}
				</div>
			</div>
			<div class="">
				<p class="font-anton text-3xl mb-8">Information</p>
				{#each footerLinks as link}
					<a
						href={link.link}
						class="block font-roboto font-bold text-xl text-madblue underline mb-2">{link.text}</a
					>
				{/each}
			</div>
			<div class="">
				<p class="font-anton text-3xl mb-8">Newsletter</p>
				<form action="" class="flex items-end font-roboto gap-x-8 mb-10">
					<div class="flex-grow">
						<label for="newsletterEmail" class="text-sm block">Enter your Email</label>
						<input
							type="email"
							name="newsletterEmail"
							id="newsletterEmail"
							placeholder="Type Here"
							class="block w-full p-1"
						/>
					</div>
					<button
						type="submit"
						class="bg-madyellow font-roboto font-bold text-xl text-madblue underline p-2"
						>Submit</button
					>
				</form>
				<p class="font-roboto text-sm max-w-[75%]">
					Karya ini merupakan bagian dari Tugas Akhir di Prodi DKV IKJ, semua data dalam karya ini
					diperlihatkan hanya untuk keperluan presentasi tugas, tidak ditujukan untuk kepentingan
					komersial.
				</p>
			</div>
		</footer>
	</div>
</div>

<style>
	.bg-footer {
	}

	.running-item {
		top: 50%;
		transform: translateY(-50%);
		position: absolute;
		left: 100%;
		animation-name: runningText;
		animation-duration: 20s;
		animation-iteration-count: infinite;
		animation-timing-function: linear;
	}

	/* even child of running test wrapper */
	.running-item:nth-child(even) {
		transform: translate(300%, -100%);
	}

	@keyframes runningText {
		to {
			left: -200px;
		}
	}

	.running-item-1 {
		animation-delay: calc(20s / 12 * (12 - 1));
	}

	.running-item-2 {
		animation-delay: calc(20s / 12 * (12 - 2));
	}

	.running-item-3 {
		animation-delay: calc(20s / 12 * (12 - 3));
	}

	.running-item-4 {
		animation-delay: calc(20s / 12 * (12 - 4));
	}

	.running-item-5 {
		animation-delay: calc(20s / 12 * (12 - 5));
	}

	.running-item-6 {
		animation-delay: calc(20s / 12 * (12 - 6));
	}

	.running-item-7 {
		animation-delay: calc(20s / 12 * (12 - 7));
	}

	.running-item-8 {
		animation-delay: calc(20s / 12 * (12 - 8));
	}

	.running-item-9 {
		animation-delay: calc(20s / 12 * (12 - 9));
	}

	.running-item-10 {
		animation-delay: calc(20s / 12 * (12 - 10));
	}

	.running-item-11 {
		animation-delay: calc(20s / 12 * (12 - 11));
	}

	.running-item-12 {
		animation-delay: calc(20s / 12 * (12 - 12));
	}
</style>
