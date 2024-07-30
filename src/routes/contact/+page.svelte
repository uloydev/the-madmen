<script lang="ts">
	import slide from '$lib/images/contact/slide.png';
	import book from '$lib/images/contact/book.png';
	import help from '$lib/images/contact/help.png';
	import call from '$lib/icons/call.png';
	import mail from '$lib/icons/mail.png';
</script>

<div>
	<div class="relative mb-4 sm:mb-10">
		<div class="rounded-xl border-4 border-madblue max-h-[400px] overflow-hidden mt-20">
			<img src={slide} alt="slider" class="w-full max-h-[500px] object-cover object-top" />
		</div>
		<div class="absolute bottom-0 p-4 sm:p-8">
			<h1 class="font-anton text-madyellow text-[40px] sm:text-8xl italic">CONTACT</h1>
		</div>
	</div>

	<div class="sm:grid grid-cols-2 gap-x-16">
		<div class="bg-white rounded-2xl pb-2 sm:p-6 pt-0">
			<img src={book} alt="booking now" class="w-full mb-2 sm:mb-8" />
			<div class="px-4">
				<p class="font-anton text-lg mb-1 sm:text-3xl sm:mb-4">Management</p>
				<div class="flex justify-between items-center mb-2 sm:mb-4">
					<div class="font-roboto text-madblue">
						<p class="font-extrabold text-sm sm:text-lg">Mad Madmen</p>
						<p class="text-[10px] sm:text-lg">@mad_madmen</p>
					</div>
					<div>
						<a href="#">
							<img src={call} alt="call" class="w-8 h-8 inline-block" />
						</a>
						<a href="#">
							<img src={mail} alt="mail" class="w-8 h-8 inline-block" />
						</a>
					</div>
				</div>
				<div class="flex justify-between items-center">
					<div class="font-roboto text-madblue">
						<p class="font-extrabold text-sm sm:text-lg">Satrio B.P.</p>
						<p class="text-[10px] sm:text-lg">@satriobp</p>
					</div>
					<div>
						<a href="#">
							<img src={call} alt="call" class="w-8 h-8 inline-block" />
						</a>
						<a href="#">
							<img src={mail} alt="mail" class="w-8 h-8 inline-block" />
						</a>
					</div>
				</div>
				<p class="font-anton text-lg mb-1 mt-4 sm:text-3xl sm:mb-4 sm:mt-10">Booking Agent</p>
				<div class="flex justify-between items-center">
					<div class="font-roboto text-madblue">
						<p class="font-extrabold text-sm sm:text-lg">Senang Rasanya Membantu</p>
						<p class="text-[10px] sm:text-lg">@srmbands</p>
					</div>
					<div>
						<a href="#">
							<img src={call} alt="call" class="w-8 h-8 inline-block" />
						</a>
					</div>
				</div>
				<div class="flex justify-between items-center mt-2 sm:mt-10">
					<p class="font-anton text-lg mb-1 mt-4 sm:text-3xl sm:mb-4 sm:mt-10">Press release kit</p>
					<a href="#" class="bg-madyellow text-madblue underline font-roboto font-bold py-1 px-6 sm:py-2 sm:px-8"
						>View</a
					>
				</div>
			</div>
		</div>
		<div class="mt-4 sm:mt-0">
			<div class="bg-madblue text-madyellow relative rounded-r-full p-4 sm:py-6">
				<p class=" font-anton text-2xl sm:text-3xl">Can We Help You</p>
				<img src={help} alt="help" class=" w-28 h-28 sm:w-32 sm:h-32 absolute -right-6 -top-5" />
			</div>

			<p class="mt-4 font-roboto font-extrabold text-[10px] sm:text-lg">
				Send your questions regarding the availability schedule, booking mechanism, technical and
				hospitality riders for Mad Madmen. We will respond to your inquiries promptly.
			</p>

			<div class="mt-8 mb-4">
				<label for="name" class="block font-roboto text-sm">Name</label>
				<input type="text" id="name" class="w-full px-2 py-2 text-xs sm:text-base" placeholder="Type Here" />
			</div>
			<div class="mb-4">
				<label for="email" class="block font-roboto text-sm">Email</label>
				<input type="text" id="email" class="w-full px-2 py-2 text-xs sm:text-base" placeholder="Type Here" />
			</div>
			<div class="mt-8 mb-4">
				<label for="subject" class="block font-roboto text-sm">Subject</label>
				<input type="text" id="subject" class="w-full px-2 py-2 text-xs sm:text-base" placeholder="Type Here" />
			</div>
			<div class="mt-8 mb-4">
				<label for="messages" class="block font-roboto text-sm">Messages</label>
				<textarea id="messages" class="w-full px-2 py-2 text-xs sm:text-base" placeholder="Type Here" rows="6" />
			</div>
			<div class="flex justify-end">
				<a href="#" class="bg-madyellow text-madblue underline font-roboto font-bold py-2 text-sm px-6 sm:px-8 sm:text-base"
					>Submit</a
				>
			</div>
		</div>
	</div>
</div>
