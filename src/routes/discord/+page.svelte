<script lang="ts">
    import discordLogo from '$lib/images/discord-logo.png';
    import discordChannel from '$lib/images/discord-channel.png';
</script>

<div>
    <div class="flex flex-col justify-center items-center gap-y-12 my-20">
        <img src={discordLogo} alt="discord logo" class="w-96">
        <p class=" font-barriecito text-4xl text-madred text-center">
            Mad Madmen invites you to join Madfrens server!
        </p>
        <img src={discordChannel} alt="discord channel" class="w-48">
        <p class="font-roboto font-extrabold text-lg max-w-[50%] text-center">Join our exclusive Discord group chat! Connect with other fans, get the latest updates, and enjoy special content. Don’t miss out – be part of the Mad Madmen family today. Click the link to join us now!</p>
        <a href="https://discord.gg/madmadmen" class="bg-madblue text-white font-roboto font-bold text-xl py-2 px-8">Join!</a>
    </div>
</div>