<script lang="ts">
    import { resolve } from "$app/paths"
    import { Package, Headset, Pencil } from "@lucide/svelte";
    import {
        flatGlassButton,
        largeTitle,
        medTitle,
        roundedGlassButton,
        smallTitle,
        transitionSizeSmall
    } from "$lib/styles/styles";
    import { ChevronRight } from "@lucide/svelte";
</script>

{#snippet simple_data(title: string, text: string, has_div: boolean)}
    <div class="flex justify-between items-center">
        <p>{title}:</p>
        <p>{text}</p>
    </div>
    {#if has_div}
        <hr class="my-3"/>
    {/if}
{/snippet}

{#snippet product_module(src: string, alt: string, title: string, text: string, button: string, href: string, reverse: boolean)}
    <div class="flex flex-col items-stretch justify-between mt-5 {reverse ? 'md:flex-row-reverse' : 'md:flex-row' }">
        <img class="rounded-md w-full {reverse ? 'md:ml-2' : 'md:mr-2' }" src="{src}" alt="{alt}" />

        <div class="w-full {reverse ? 'md:mr-2' : 'md:ml-2' } relative mt-3 md:mt-0 backdrop-blur-lg">
            <h3 class="{smallTitle} {reverse ? 'text-start' : 'md:text-end' }">{title}</h3>
            <hr class="my-3"/>
            <p class="text-lg mb-0 md:mb-15">{text}</p>
            <a href={href} class="{roundedGlassButton} md:absolute bottom-0 {reverse ? 'left-0' : 'right-0' } flex justify-center">{button} <ChevronRight /></a>
        </div>
    </div>
{/snippet}

<img class="stage fixed top-0" src="/led_display.jpg" alt="Sample Display" />
<div class="m-auto md:w-3/5 sm:w-full p-3 relative mt-[550px]">
    <h1 class="{largeTitle} title-adjust">Welcome</h1>

    <h2 class="{medTitle}">Your Profile</h2>
    <div class="flex flex-col md:flex-row items-stretch justify-between mt-3">
        <div class="w-full p-3 gradient rounded-md mr-0 md:mr-3">
            <div class="flex justify-between items-center">
                <h3 class="font-semibold text-2xl inline">Tier 1 Dealer</h3>
                <button class="{flatGlassButton} backdrop-hue-rotate-30">Change Tier</button>
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

        <div class="w-full h-auto ml-0 sm:ml-3 mt-3 md:mt-0 flex flex-col justify-between">
            <a href={resolve("/orders")} class="h-full rounded-md bg-gray-500/50 backdrop-blur-md mb-3 flex items-center justify-between font-normal text-4xl py-5 px-12 hover:cursor-pointer {transitionSizeSmall}">
                Manage Orders
                <Package size="64"/>
            </a>
            <a href={resolve("/contact-us")} class="h-full rounded-md bg-gray-500/50 backdrop-blur-md flex items-center justify-between font-normal text-4xl py-5 px-12 hover:cursor-pointer {transitionSizeSmall}">
                Contact Us
                <Headset size="64" />
            </a>
            <button class="h-full rounded-md bg-gray-500/50 backdrop-blur-md mt-3 flex items-center justify-between font-normal text-4xl py-5 px-12 hover:cursor-pointer {transitionSizeSmall}">
                Edit Information
                <Pencil size="64"/>
            </button>
        </div>
    </div>

    <h2 class="{medTitle} mt-7">Get Started</h2>
    {@render product_module(
        "/test_gradient.jpg",
        "Sample",
        "Complete Solutions",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "View Solutions",
        "/solutions",
        true
    )}

    {@render product_module(
        "/test_gradient.jpg",
        "Sample",
        "Panels",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "View Panels",
        "/panels",
        false
    )}

    {@render product_module(
        "/test_gradient.jpg",
        "Sample",
        "Accessories",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "View Accessories",
        "/accessories",
        true
    )}
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
        background: linear-gradient(to bottom right, var(--site-red), var(--site-blue));
    }
</style>