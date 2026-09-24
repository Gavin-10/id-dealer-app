
<script lang="ts">
    import TextInput from '$lib/components/TextInput.svelte';
    import {flatGlassButton, mediumGlass, smallTitle} from "$lib/styles/styles.ts";
    import { authClient } from "$lib/client.ts";

    let email = $state('');
    let password = $state('');

    const signin = () => {
        authClient.signIn.email({
            email: email,
            password: password,
            rememberMe: false,
            callbackURL: '/'
        });
    }
</script>

<img class="h-[100vh] w-[100%]" src="/pixels.png" alt="background"/>
<div class="w-full md:w-lg fixed top-0 left-0 md:top-[50%] md:left-[50%] md:translate-x-[-50%] md:translate-y-[-50%]">
    <div class="{mediumGlass} p-5 m-5">
        <form>
            <img class="m-auto h-[250px]" src="/logo_clear.png" alt="logo"/>
            <h1 class={smallTitle}>Login</h1>

            <div class="my-5">
                <TextInput bind:value={email} tag="email" label="Email" color="blue" type="email" required/>
                <TextInput bind:value={password} tag="password" label="Password" color="red" type="password" required/>
            </div>

            <div class="flex justify-between items-center">
                <button type="reset" class={flatGlassButton}>Cancel</button>
                <button type="submit" class="{flatGlassButton}" onclick={signin}>Sign In</button>
            </div>
        </form>
    </div>
</div>