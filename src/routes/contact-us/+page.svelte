
<script lang="ts">
    import { enhance } from "$app/forms";
    import {
        container,
        largeTitle,
        mediumAccentGlassButton,
        mediumGlass, smallTitle,
        transitionSizeLarge
    } from "$lib/styles/styles.ts";
    import SubmissionDialog from "$lib/components/SubmissionDialog.svelte";
    import { Label } from 'bits-ui';

    let { form } = $props();

    let isOpen = $derived(form !== undefined && form !== null);

    const copyEmail = () => {
        navigator.clipboard.writeText("info@imagine-displays.com");
    }
</script>

<SubmissionDialog bind:isOpen={isOpen} success={form?.status === 200}/>
<div class="h-[300px]">
    <img class="w-full h-[300px] z-0" src="/dots2.jpg" alt="Contact Us Background" />
    <h1 class="{largeTitle} mt-[-200px] mb-3">Connect With Us</h1>
</div>

<div class="{container}">
    <div class="bg-(--site-background) relative z-5 backdrop-blur-md rounded-2xl flex flex-col md:flex-row justify-between align-stretch">
        <!--Contact form-->
        <form method="POST" use:enhance class="w-full md:mr-3">
            <div>
                <Label.Root for="name" class="m-0 p-0 text-sm font-medium">Name</Label.Root>
                <input required id="name" name="name" class="h-[50px] bg-transparent rounded-md w-full ring-0 outline-0 border border-gray-500 transition-colors duration-300 ease-in-out focus:border-(--site-blue)"/>
            </div>

            <div class="mt-3">
                <Label.Root for="email" class="m-0 p-0 text-sm font-medium">Email</Label.Root>
                <input required type="email" id="email" name="email" class="h-[50px] bg-transparent rounded-md w-full ring-0 outline-0 border border-gray-500 transition-colors duration-300 ease-in-out focus:border-(--site-blue)"/>
            </div>

            <div class="mt-3">
                <Label.Root for="message" class="m-0 p-0 text-sm font-medium">Message</Label.Root>
                <textarea id="message" name="message" class="h-30 bg-transparent rounded-md w-full ring-0 outline-0 border border-gray-500 transition-colors duration-300 ease-in-out focus:border-(--site-red)"></textarea>
            </div>

            <div class="flex justify-between mt-3">
                <button type="reset" class="{transitionSizeLarge}">Cancel</button>
                <button type="submit" class="{mediumAccentGlassButton} w-40">Submit</button>
            </div>
        </form>

        <!--Imagine Displays contact information-->
        <div class="w-full mt-5 md:mt-0 md:ml-3 flex flex-col justify-between">
            <div class="mb-5">
                <h3 class="{smallTitle} mb-2">General Inquiries</h3>
                <hr class="text-gray-600"/>
                <p>For non-sales questions or support, email us directly.</p>
                <button onclick={copyEmail} class="underline hover:cursor-pointer transition hover:text-cyan-500">info@imagine-displays.com</button>
            </div>

            <div>
                <h3 class="{smallTitle}">By Appointment Only</h3>
                <hr class="text-gray-600"/>
                <div>
                    <p>375 Winkler Drive, Ste A</p>
                    <p>Alpharetta, GA 30004</p>
                </div>
                <p>Phone: <button class="underline hover:cursor-pointer transition hover:text-cyan-500">(404) 720-2878</button></p>
            </div>
        </div>
    </div>

    <!--Imagine Displays social media links-->
    <div class="mt-10 flex flex-col md:flex-row justify-between">
        <div class="p-3 mb-3 md:mr-1.5 {mediumGlass} h-60 md:max-w-70 w-full flex flex-col justify-center align-center">
            <div class="logo-box mx-auto">
                <img class="w-[66px]" src="/Facebook_Logo_Primary.png" alt="Facebook logo"/>
            </div>
            <a class="mt-7 text-center underline hover:cursor-pointer transition hover:text-[#1877f2]" href="https://www.facebook.com/share/1EDoPCkZNz/?mibextid=wwXIfr">@imagine-displays</a>
        </div>

        <div class="p-3 mb-3 md:mx-1.5 {mediumGlass} h-60 md:max-w-70 w-full flex flex-col justify-center align-center">
            <div class="logo-box mx-auto">
                <img class="w-[66px]" src="/LI-In-Bug.png" alt="LinkedIn logo"/>
            </div>
            <a class="mt-7 text-center underline hover:cursor-not-allowed transition hover:text-gray-500">@imagine-displays</a>
        </div>

        <div class="p-3 mb-3 md:ml-1.5 {mediumGlass} h-60 md:max-w-70 w-full flex flex-col justify-center align-center">
            <div class="logo-box mx-auto">
                <img class="w-[66px]" src="/Instagram_Glyph_Gradient.png" alt="Instagram logo"/>
            </div>
            <a class="mt-7 text-center underline hover:cursor-pointer transition instagram" href="https://www.instagram.com/imaginedisplaysco?igsh=aDVxNWNhMngwbTV2&utm_source=qr">@imagine-displays</a>
        </div>
    </div>
</div>

<style>
    .logo-box {
        background-color: white;
        border-radius: 100px;

        display: flex;
        align-items: center;
        justify-content: center;

        width: 100px;
        height: 100px;

        box-shadow: 0 0 5px white;
    }

    .instagram:hover {
        background: linear-gradient(to right, #ffd600, #ff7a00, #ff0069, #d300c5, #7638fa);
        background-clip: text;
        color: transparent;
        text-decoration-color: #ff0069;
    }
</style>