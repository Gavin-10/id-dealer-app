<script lang="ts">
    import { Package, Headset, Pencil } from "@lucide/svelte";
</script>

<div>
    <img class="stage" src="/led_display.jpg" alt="Sample Display" />
    <h1 class="title-adjust text-center text-9xl font-semibold">Welcome</h1>
</div>

{#snippet simple_data(title: string, text: string, has_div: boolean)}
    <div class="flex justify-between items-center">
        <p>{title}:</p>
        <p>{text}</p>
    </div>
    {#if has_div}
        <hr class="my-3"/>
    {/if}
{/snippet}

<div class="m-auto md:w-3/5 sm:w-full p-3">
    <h2 class="text-center text-6xl font-semibold">Your Profile</h2>
    <div class="flex md:flex-row sm:flex-col items-stretch justify-between mt-3">
        <div class="w-full p-3 gradient rounded-md border border-white/25 shadow-2xs shadow-white/25 mr-3">
            <div class="flex justify-between items-center">
                <h3 class="font-semibold text-2xl inline">Tier 1 Dealer</h3>
                <button class="rounded-md backdrop-blur-md backdrop-hue-rotate-30 p-3 hover:cursor-pointer">Change Tier</button>
            </div>
            <hr class="my-3"/>

            {@render simple_data("Business Name", "Some Business", false)}
            {@render simple_data("DBA", "Some DBA Name", true)}

            {@render simple_data("Address", "123 Big Address Ave", false)}
            {@render simple_data("City State", "Big City, Big State", false)}
            {@render simple_data("Zip Code", "12345-6789", true)}

            {@render simple_data("Total Orders", "1000", false)}
            {@render simple_data("Active Orders", "3", false)}
            {@render simple_data("Pending Orders", "1", false)}
        </div>

        <div class="w-full h-auto ml-3 flex flex-col justify-between">
            <button class="h-full rounded-md bg-white/15 mb-3 flex items-center justify-between font-normal text-4xl py-5 px-12">
                Manage Orders
                <Package size="64"/>
            </button>
            <button class="h-full rounded-md bg-white/15 flex items-center justify-between font-normal text-4xl py-5 px-12">
                Contact Us
                <Headset size="64" />
            </button>
            <button class="h-full rounded-md bg-white/15 mt-3 flex items-center justify-between font-normal text-4xl py-5 px-12">
                Edit Information
                <Pencil size="64"/>
            </button>
        </div>
    </div>
</div>


<style>
    .stage {
        width: 100%;
        height: 550px;
        object-fit: cover;
        overflow: hidden;
    }

    .title-adjust {
        margin-top: -330px;
        margin-bottom: 230px;
    }

    .gradient {
        background: linear-gradient(to bottom right, #f22248, #1d8ff2);
    }
</style>