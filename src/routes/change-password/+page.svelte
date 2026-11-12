
<script lang="ts">
    import TextInput from '$lib/components/TextInput.svelte';
    import {flatGlassButton, mediumGlass, smallTitle} from "$lib/styles/styles.ts";
    import { authClient } from "$lib/client.ts";
    import { goto } from '$app/navigation';
    import { resolve } from "$app/paths";

    let oldPassword = $state('');
    let newPassword = $state('');
    let newPasswordConfirm = $state('');
    let loading = $state(false);
    let message = $state('Change Password');

    const changePassword = async (e: Event) => {
        const form = document.getElementById('password-form') as HTMLFormElement;
        if (!form.reportValidity()) return;

        e.preventDefault();
        loading = true;
        message = 'Loading...';

        try {
            if (newPassword !== newPasswordConfirm) {
                message = 'New Passwords Must Match';
                return;
            }

            const { error } = await authClient.changePassword({
                newPassword: newPasswordConfirm,
                currentPassword: oldPassword,
                revokeOtherSessions: true,
            });

            if (error) {
                message = error.message || 'Password Change Failed';
                loading = false;
                form.reset();
            } else {
                message = 'Password Change Successful';
                loading = false;
                await goto(resolve('/'));
            }
        } catch {
            message = 'Password Change Failed';
            loading = false;
            await goto(resolve('/'));
        }
    }
</script>

<img class="h-[100vh] w-[100%]" src="/pixels.png" alt="background"/>
<div class="w-full md:w-lg fixed top-0 left-0 md:top-[50%] md:left-[50%] md:translate-x-[-50%] md:translate-y-[-50%]">
    <div class="{mediumGlass} p-5 m-5">
        <form id="password-form" autocomplete="off">
            <h1 class={smallTitle}>{message}</h1>

            <div class="my-5">
                <TextInput bind:value={oldPassword} tag="old_password" label="Old Password" color="blue" type="password" required/>
                <TextInput bind:value={newPassword} tag="new_password" label="New Password" color="red" type="password" required/>
                <TextInput bind:value={newPasswordConfirm} tag="new_password_confirm" label="Confirm Password" color="red" type="password" required/>
            </div>

            <div class="flex justify-between items-center">
                <button type="reset" class={flatGlassButton} onclick={async () => await goto(resolve('/'))}>Cancel</button>
                <button type="submit" class="{flatGlassButton} { loading ? 'animate-bounce' : '' }" disabled={loading} onclick={changePassword}>Change Password</button>
            </div>
        </form>
    </div>
</div>