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
	import burger from '$lib/images/burger.png';
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

	let showNavbar = false;

	const toggleNavbar = () => {
		showNavbar = !showNavbar;
	};

	const handleNavItemClick = () => {
		showNavbar = false;
	};

	$: path = $page.url.pathname;

	onMount(() => {
		showNavbar = false;
	});
</script>

<div class="overflow-x-hidden">
	<div class="app sm:container sm:mx-auto sm:pt-2 sm:px-12">
		<nav
			class=" h-[75px] pl-6 pr-8 w-full bg-gradient-to-b from-[#0000FE] to-[#000098] flex justify-between relative"
		>
			<div class="flex items-center">
				<a on:click={handleNavItemClick} href="/">
					<img src={logo} alt="logo mad madmen" class="h-[30px] sm:h-[50px]" />
				</a>
			</div>
			<button class="text-white block sm:hidden" on:click={toggleNavbar}
				><img src={burger} alt="burger" class=" h-5" /></button
			>
			<div
				class="flex flex-col gap-x-8 font-anton sm:items-center text-white text-2xl capitalize sm:flex-row absolute top-full z-10 bg-madblue w-full left-0 sm:static sm:bg-transparent sm:w-fit py-8 sm:py-0 sm:flex"
				class:hidden={!showNavbar}
			>
				<div class="px-4 py-2 text-center sm:p-0">
					<a
						on:click={handleNavItemClick}
						href="/about"
						class="border-b border-white"
						class:border-madyellow={path.includes('/about')}
						class:text-madyellow={path.includes('/about')}>about</a
					>
				</div>
				<div class="px-4 py-2 text-center sm:p-0">
					<a
						on:click={handleNavItemClick}
						href="/music"
						class="border-b border-white"
						class:border-madyellow={path.includes('/music')}
						class:text-madyellow={path.includes('/music')}>music</a
					>
				</div>
				<div class="px-4 py-2 text-center sm:p-0">
					<a
						on:click={handleNavItemClick}
						href="/gallery"
						class="border-b border-white"
						class:border-madyellow={path.includes('/gallery')}
						class:text-madyellow={path.includes('/gallery')}>gallery</a
					>
				</div>
				<div class="px-4 py-2 text-center sm:p-0">
					<a
						on:click={handleNavItemClick}
						href="/tour"
						class="border-b border-white"
						class:border-madyellow={path.includes('/tour')}
						class:text-madyellow={path.includes('/tour')}>tour</a
					>
				</div>
				<div class="px-4 py-2 text-center sm:p-0">
					<a
						on:click={handleNavItemClick}
						href="/shop"
						class="border-b border-white"
						class:border-madyellow={path.includes('/shop')}
						class:text-madyellow={path.includes('/shop')}>shop</a
					>
				</div>
				<div class="px-4 py-2 text-center sm:p-0">
					<a
						on:click={handleNavItemClick}
						href="/contact"
						class="border-b border-white"
						class:border-madyellow={path.includes('/contact')}
						class:text-madyellow={path.includes('/contact')}>contact</a
					>
				</div>
				<div class="px-4 py-2 text-center sm:p-0">
					<a
						on:click={handleNavItemClick}
						href="/discord"
						class="border-b border-white"
						class:border-madyellow={path.includes('/discord')}
						class:text-madyellow={path.includes('/discord')}>discord</a
					>
				</div>
			</div>
		</nav>

		<div class="w-screen h-20 absolute right-0">
			<div class="wrapper font-anton text-madgreen text-xl">
				<div class="item item1">
					<span class="flex w-full h-full justify-center items-center">MAHARUPA - OUT NOW!</span>
				</div>
				<div class="item item2">
					<div class=" flex justify-center items-center w-full h-full">
						<span class="h-5 w-5 bg-madgreen rounded-full"></span>
					</div>
				</div>
				<div class="item item3">
					<span class="flex w-full h-full justify-center items-center">MAHARUPA - OUT NOW!</span>
				</div>
				<div class="item item4">
					<div class=" flex justify-center items-center w-full h-full">
						<span class="h-5 w-5 bg-madgreen rounded-full"></span>
					</div>
				</div>
				<div class="item item5">
					<span class="flex w-full h-full justify-center items-center">MAHARUPA - OUT NOW!</span>
				</div>
				<div class="item item6">
					<div class=" flex justify-center items-center w-full h-full">
						<span class="h-5 w-5 bg-madgreen rounded-full"></span>
					</div>
				</div>
				<div class="item item7">
					<span class="flex w-full h-full justify-center items-center">MAHARUPA - OUT NOW!</span>
				</div>
				<div class="item item8">
					<div class=" flex justify-center items-center w-full h-full">
						<span class="h-5 w-5 bg-madgreen rounded-full"></span>
					</div>
				</div>
				<div class="item item9">
					<span class="flex w-full h-full justify-center items-center">MAHARUPA - OUT NOW!</span>
				</div>
				<div class="item item10">
					<div class=" flex justify-center items-center w-full h-full">
						<span class="h-5 w-5 bg-madgreen rounded-full"></span>
					</div>
				</div>
				<div class="item item11">
					<span class="flex w-full h-full justify-center items-center">MAHARUPA - OUT NOW!</span>
				</div>
				<div class="item item12">
					<div class=" flex justify-center items-center w-full h-full">
						<span class="h-5 w-5 bg-madgreen rounded-full"></span>
					</div>
				</div>
				<div class="item item13">
					<span class="flex w-full h-full justify-center items-center">MAHARUPA - OUT NOW!</span>
				</div>
				<div class="item item14">
					<div class=" flex justify-center items-center w-full h-full">
						<span class="h-5 w-5 bg-madgreen rounded-full"></span>
					</div>
				</div>
				<div class="item item15">
					<span class="flex w-full h-full justify-center items-center">MAHARUPA - OUT NOW!</span>
				</div>
				<div class="item item16">
					<div class=" flex justify-center items-center w-full h-full">
						<span class="h-5 w-5 bg-madgreen rounded-full"></span>
					</div>
				</div>
			</div>
		</div>
		<main class="px-4 sm:px-0">
			<slot />
		</main>

		<div class="px-4 mt-8 mb-4 sm:my-10 sm:px-0">
			<div class="w-full h-[2px] sm:h-1 bg-black"></div>
		</div>

		<footer
			class="grid gap-x-4 relative overflow-x-visible grid-cols-4 pb-10 px-4 sm:grid-cols-3 sm:px-0 sm:pb-20"
		>
			<img
				src={logoLong}
				alt="logoLong"
				class="h-full absolute -z-10 overflow-x-visible object-cover sm:w-screen"
			/>
			<div class="col-span-1">
				<p class="font-anton mb-4 sm:text-3xl sm:mb-8">Social Media</p>
				<div class="grid grid-cols-3 gap-2 items-center sm:flex sm:gap-x-8 sm:gap-y-0">
					{#each socials as social}
						<a href={social.link} target="_blank" rel="noopener noreferrer">
							<img src={social.icon} alt={social.name} class="w-8" />
						</a>
					{/each}
				</div>
			</div>
			<div class="col-span-1">
				<p class="font-anton mb-4 sm:text-3xl sm:mb-8">Information</p>
				{#each footerLinks as link}
					<a
						href={link.link}
						class="block font-roboto font-bold text-madblue underline mb-2 text-[10px] sm:text-xl"
						>{link.text}</a
					>
				{/each}
			</div>
			<div class="col-span-2 sm:col-span-1">
				<p class="font-anton mb-4 sm:text-3xl sm:mb-8">Newsletter</p>
				<form action="" class="items-end font-roboto gap-x-8 mb-6 sm:mb-10 sm:flex">
					<div class="flex-grow">
						<label for="newsletterEmail" class="block text-[10px] sm:text-sm"
							>Enter your Email</label
						>
						<input
							type="email"
							name="newsletterEmail"
							id="newsletterEmail"
							placeholder="Type Here"
							class="block w-full p-1 text-[10px] mb-2 sm:my-0 sm:text-base"
						/>
					</div>
					<button
						type="submit"
						class="bg-madyellow font-roboto font-bold text-madblue underline py-1 px-3 text-[10px] sm:p-2 sm:text-xl"
						>Submit</button
					>
				</form>
				<p class="font-roboto text-[10px] sm:text-sm sm:max-w-[75%]">
					Karya ini merupakan bagian dari Tugas Akhir di Prodi DKV IKJ, semua data dalam karya ini
					diperlihatkan hanya untuk keperluan presentasi tugas, tidak ditujukan untuk kepentingan
					komersial.
				</p>
			</div>
		</footer>
	</div>
</div>

<style>
	.wrapper {
		margin-inline: auto;
		position: relative;
		height: 5rem;
		overflow: hidden;
		display: flex;
	}

	@keyframes scrollLeftodd {
		to {
			left: -200px;
		}
	}

	@keyframes scrollLefteven {
		to {
			left: -200px;
		}
	}

	/* item odd */
	.item:nth-child(even) {
		width: 200px;
		height: 5rem;
		/* background-color: red; */
		position: absolute;
		left: max(calc((200px) * 16), 100%);
		animation-name: scrollLefteven;
		animation-duration: 30s;
		animation-timing-function: linear;
		animation-iteration-count: infinite;
	}

	.item:nth-child(odd) {
		width: 200px;
		height: 5rem;
		/* background-color: red; */
		position: absolute;
		left: max(calc(200px * 16), 100%);
		animation-name: scrollLeftodd;
		animation-duration: 30s;
		animation-timing-function: linear;
		animation-iteration-count: infinite;
	}

	.item1 {
		animation-delay: calc(30s / 16 * (16 - 1) * -1);
	}

	.item2 {
		animation-delay: calc(30s / 16 * (16 - 2) * -1);
	}

	.item3 {
		animation-delay: calc(30s / 16 * (16 - 3) * -1);
	}

	.item4 {
		animation-delay: calc(30s / 16 * (16 - 4) * -1);
	}

	.item5 {
		animation-delay: calc(30s / 16 * (16 - 5) * -1);
	}

	.item6 {
		animation-delay: calc(30s / 16 * (16 - 6) * -1);
	}

	.item7 {
		animation-delay: calc(30s / 16 * (16 - 7) * -1);
	}

	.item8 {
		animation-delay: calc(30s / 16 * (16 - 8) * -1);
	}

	.item9 {
		animation-delay: calc(30s / 16 * (16 - 9) * -1);
	}

	.item10 {
		animation-delay: calc(30s / 16 * (16 - 10) * -1);
	}

	.item11 {
		animation-delay: calc(30s / 16 * (16 - 11) * -1);
	}

	.item12 {
		animation-delay: calc(30s / 16 * (16 - 12) * -1);
	}

	.item13 {
		animation-delay: calc(30s / 16 * (16 - 13) * -1);
	}

	.item14 {
		animation-delay: calc(30s / 16 * (16 - 14) * -1);
	}

	.item15 {
		animation-delay: calc(30s / 16 * (16 - 15) * -1);
	}

	.item16 {
		animation-delay: calc(30s / 16 * (16 - 16) * -1);
	}
</style>
