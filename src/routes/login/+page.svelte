
<script lang="ts">
    import TextInput from '$lib/components/TextInput.svelte';
    import {flatGlassButton, mediumGlass, smallTitle} from "$lib/styles/styles.ts";
    import { authClient } from "$lib/client.ts";
    import { goto } from '$app/navigation';
    import { resolve } from "$app/paths";

    let email = $state('');
    let password = $state('');
    let loading = $state(false);
    let message = $state('Login');

    const signin = async (e: Event) => {
        const form = document.getElementById('login-form') as HTMLFormElement;
        if (!form.reportValidity()) return;

        e.preventDefault();
        loading = true;
        message = 'Loading...';

        try {
            const { error } = await authClient.signIn.email({
                email,
                password,
                rememberMe: false,
                callbackURL: '/'
            });

            if (error) {
                message = error.message || 'Login Failed';
                loading = false;
                form.reset();
            } else {
                message = 'Login Successful';
                loading = false;
                await goto(resolve('/'));
            }
        } catch {
            message = 'Login Failed';
            loading = false;
            form.reset();
        }
    }
</script>

<img class="h-[100vh] w-[100%]" src="/pixels.png" alt="background"/>
<div class="w-full md:w-lg fixed top-0 left-0 md:top-[50%] md:left-[50%] md:translate-x-[-50%] md:translate-y-[-50%]">
    <div class="{mediumGlass} p-5 m-5">
        <form id="login-form">
            <img class="m-auto h-[250px]" src="/logo_clear.png" alt="logo"/>
            <h1 class={smallTitle}>{message}</h1>

            <div class="my-5">
                <TextInput bind:value={email} tag="email" label="Email" color="blue" type="email" required/>
                <TextInput bind:value={password} tag="password" label="Password" color="red" type="password" required/>
            </div>

            <div class="flex justify-between items-center">
                <button type="reset" class={flatGlassButton}>Cancel</button>
                <button type="submit" class="{flatGlassButton} { loading ? 'animate-bounce' : '' }" disabled={loading} onclick={signin}>Sign In</button>
            </div>
        </form>
    </div>
</div>