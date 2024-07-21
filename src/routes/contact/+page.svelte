<script lang="ts">
	import slide from '$lib/images/contact/slide.png';
	import book from '$lib/images/contact/book.png';
	import help from '$lib/images/contact/help.png';
	import call from '$lib/icons/call.png';
	import mail from '$lib/icons/mail.png';
</script>

<div>
	<div class="relative mb-10">
		<div class="rounded-xl border-4 border-madblue max-h-[400px] overflow-hidden mt-20">
			<img src={slide} alt="slider" class="w-full max-h-[500px] object-cover object-top" />
		</div>
		<div class="absolute bottom-0 p-8">
			<h1 class="font-anton text-madyellow text-8xl italic">CONTACT</h1>
		</div>
	</div>

	<div class="grid grid-cols-2 gap-x-16">
		<div class="bg-white rounded-2xl p-6 pt-0">
			<img src={book} alt="booking now" class="w-full mb-8" />
			<p class="font-anton text-3xl mb-4">Management</p>
			<div class="flex justify-between items-center mb-4">
				<div class="font-roboto text-lg text-madblue">
					<p class="font-extrabold">Mad Madmen</p>
					<p>@mad_madmen</p>
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
				<div class="font-roboto text-lg text-madblue">
					<p class="font-extrabold">Satrio B.P.</p>
					<p>@satriobp</p>
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
			<p class="font-anton text-3xl mb-4 mt-10">Booking Agent</p>
            <div class="flex justify-between items-center">
				<div class="font-roboto text-lg text-madblue">
					<p class="font-extrabold">Senang Rasanya Membantu</p>
					<p>@srmbands</p>
				</div>
				<div>
					<a href="#">
						<img src={call} alt="call" class="w-8 h-8 inline-block" />
					</a>
				</div>
			</div>
            <div class="flex justify-between items-center mt-10">
			    <p class="font-anton text-3xl mb-4 mt-10">Press release kit</p>
                <a href="#" class="bg-madyellow text-madblue underline font-roboto font-bold py-2 px-8">View</a>
			</div>
		</div>
        <div class="">
            <div class="bg-madblue px-4 py-6 text-madyellow relative rounded-r-full">
                <p class=" font-anton text-3xl">Can We Help You </p>
                <img src={help} alt="help" class="w-32 h-32 absolute -right-6 -top-5">
            </div>

            <p class="mt-4 font-roboto font-extrabold text-lg">
                Send your questions regarding the availability schedule, booking mechanism, technical and hospitality riders for Mad Madmen. We will respond to your inquiries promptly.
            </p>

            <div class="mt-8 mb-4">
                <label for="name" class="block font-roboto text-sm">Name</label>
                <input type="text" id="name" class="w-full px-2 py-2" placeholder="Type Here">
            </div>
            <div class="mb-4">
                <label for="email" class="block font-roboto text-sm">Email</label>
                <input type="text" id="email" class="w-full px-2 py-2" placeholder="Type Here">
            </div>
            <div class="mt-8 mb-4">
                <label for="subject" class="block font-roboto text-sm">Subject</label>
                <input type="text" id="subject" class="w-full px-2 py-2" placeholder="Type Here">
            </div>
            <div class="mt-8 mb-4">
                <label for="messages" class="block font-roboto text-sm">Messages</label>
                <textarea id="messages" class="w-full px-2 py-2" placeholder="Type Here" rows="6"/>
            </div>
            <div class="flex justify-end">
                <a href="#" class="bg-madyellow text-madblue underline font-roboto font-bold py-2 px-8">Submit</a>
            </div>
        </div>
	</div>
</div>
