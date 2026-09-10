<script lang="ts">
    import { resolve } from "$app/paths"
    import { Package, Headset, Pencil, ChevronRight } from "@lucide/svelte";
    import {
        flatGlassButton,
        largeTitle,
        mediumGlass,
        mediumGlassButton,
        medTitle,
        smallTitle, transitionSizeLarge,
        transitionSizeSmall
    } from "$lib/styles/styles";
    import { AlertDialog, Label, RadioGroup } from "bits-ui";

    let tierDialog = $state(false);
    let showTierForm = $state(false);
    let selectedTier = $state("tier1");

    const openTierForm = () => {
        showTierForm = true;
        tierDialog = true;
    }

    const submitTier = () => {
        console.log(selectedTier);
        showTierForm = false;
    }
</script>

<!--Snippet for space-separated text with optional horizontal rule underneath-->
{#snippet simple_data(title: string, text: string, has_div: boolean)}
    <div class="flex justify-between items-center">
        <p>{title}:</p>
        <p>{text}</p>
    </div>
    {#if has_div}
        <hr class="my-3"/>
    {/if}
{/snippet}

<!--Snippet for each of product categories, includes image, description, and navigation button-->
{#snippet product_module(src: string, alt: string, title: string, text: string, button: string, href: string, reverse: boolean, bg: string)}
    <div class="{bg} p-3 relative">
        <div class="flex flex-col items-stretch justify-between {reverse ? 'md:flex-row-reverse' : 'md:flex-row' } md:w-4/5 sm:w-full m-auto">
            <img class="rounded-xl w-full {reverse ? 'md:ml-2' : 'md:mr-2' }" src="{src}" alt="{alt}" />

            <div class="w-full {reverse ? 'md:mr-2' : 'md:ml-2' } relative mt-3 md:mt-0">
                <div class="p-2 backdrop-blur-md bg-gray-700/40 rounded-xl mb-3 md:mb-15">
                    <h3 class="{smallTitle} {reverse ? 'text-start' : 'md:text-end' }">{title}</h3>
                    <hr class="my-3"/>
                    <p>{text}</p>
                </div>
                <a href={href} class="{mediumGlassButton} md:absolute bottom-0 {reverse ? 'left-0' : 'right-0' } flex justify-center">{button} <ChevronRight /></a>
            </div>
        </div>
    </div>
{/snippet}

<AlertDialog.Root bind:open={tierDialog}>
    <AlertDialog.Portal>
        <AlertDialog.Overlay class=" bg-black/40 backdrop-blur-md fixed inset-0 z-50"/>
        <AlertDialog.Content class="{mediumGlass} shadow-lg p-4 w-[90%] md:w-[400px] border fixed left-[5%] md:left-[50%] md:translate-x-[-200px] top-[25%] z-50">
            {#if showTierForm}
            <AlertDialog.Title class="text-center text-3xl font-medium">Select Tier</AlertDialog.Title>
            <RadioGroup.Root bind:value={selectedTier} class="flex flex-col gap-4 mb-3">
                <div class="text-foreground group flex select-none items-center transition-all">
                    <RadioGroup.Item
                            value="tier1"
                            class="mr-2 border-border-input bg-background hover:border-dark-40 data-[state=checked]:border-cyan-500 data-[state=checked]:border-6 size-5 shrink-0 cursor-default rounded-full border transition-all duration-100 ease-in-out"
                    />
                    <Label.Root>Tier 1</Label.Root>
                </div>
                <div class="text-foreground group flex select-none items-center transition-all">
                    <RadioGroup.Item
                            value="tier2"
                            class="mr-2 border-border-input bg-background hover:border-dark-40 data-[state=checked]:border-cyan-500 data-[state=checked]:border-6 size-5 shrink-0 cursor-default rounded-full border transition-all duration-100 ease-in-out"
                    />
                    <Label.Root>Tier 2</Label.Root>
                </div>
                <div class="text-foreground group flex select-none items-center transition-all">
                    <RadioGroup.Item
                            value="tier3"
                            class="mr-2 border-border-input bg-background hover:border-dark-40 data-[state=checked]:border-cyan-500 data-[state=checked]:border-6 size-5 shrink-0 cursor-default rounded-full border transition-all duration-100 ease-in-out"
                    />
                    <Label.Root>Tier 3</Label.Root>
                </div>
                <div class="text-foreground group flex select-none items-center transition-all">
                    <RadioGroup.Item
                            value="preferred"
                            class="mr-2 border-border-input bg-background hover:border-dark-40 data-[state=checked]:border-cyan-500 data-[state=checked]:border-6 size-5 shrink-0 cursor-default rounded-full border transition-all duration-100 ease-in-out"
                    />
                    <Label.Root>Preferred Tier</Label.Root>
                </div>
            </RadioGroup.Root>
            <button onclick={submitTier} class="{transitionSizeLarge} w-full text-center">Submit Request</button>
            {:else}
            <AlertDialog.Title class="text-center text-3xl font-medium">Tier Requested</AlertDialog.Title>
            <AlertDialog.Cancel class="{transitionSizeLarge} mt-8 w-full p-2 rounded-md text-lg">Dismiss</AlertDialog.Cancel>
            {/if}
        </AlertDialog.Content>
    </AlertDialog.Portal>
</AlertDialog.Root>

<img class="h-[225px] md:h-[550px] stage" src="/led_display.jpg" alt="Sample Display" />
<div class="m-auto md:w-4/5 sm:w-full p-3">
    <h1 class="{largeTitle} mt-[-165px] mb-[90px] md:mt-[-330px] md:mb-[230px]">Welcome</h1>

    <!--Dealer profile segment-->
    <h2 class="{medTitle}">Your Profile</h2>
    <div class="flex flex-col md:flex-row items-stretch justify-between mt-3">
        <!--Profile Information-->
        <div class="w-full p-3 gradient rounded-md mr-0 md:mr-3">
            <div class="flex justify-between items-center">
                <h3 class="font-semibold text-2xl inline">Tier 1 Dealer</h3>
                <button onclick={openTierForm} class="{flatGlassButton} backdrop-hue-rotate-30">Change Tier</button>
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
        <!--Profile Actions-->
        <div class="w-full h-auto ml-0 sm:ml-3 mt-3 md:mt-0 flex flex-col justify-between">
            <a href={resolve("/orders")} class="{mediumGlass} h-full mb-3 flex items-center justify-between font-normal text-left text-4xl py-5 px-12 hover:cursor-pointer {transitionSizeSmall}">
                Manage Orders
                <Package size="64"/>
            </a>
            <a href={resolve("/contact-us")} class="{mediumGlass} h-full flex items-center justify-between font-normal text-left text-4xl py-5 px-12 hover:cursor-pointer {transitionSizeSmall}">
                Contact Us
                <Headset size="64"/>
            </a>
            <button class="{mediumGlass} h-full mt-3 flex items-center justify-between font-normal text-left text-4xl py-5 px-12 hover:cursor-pointer {transitionSizeSmall}">
                Edit Information
                <Pencil size="64"/>
            </button>
        </div>
    </div>
</div>

<!--Product categories-->
<h2 class="{medTitle} mt-20 mb-5">Get Started</h2>
{@render product_module(
    "/test_gradient.jpg",
    "Sample",
    "Complete Solutions",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "View Solutions",
    "/solutions",
    true,
    "solutions"
)}

{@render product_module(
    "/test_gradient.jpg",
    "Sample",
    "Panels",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "View Panels",
    "/panels",
    false,
    "panels"
)}

{@render product_module(
    "/test_gradient.jpg",
    "Sample",
    "Accessories",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "View Accessories",
    "/accessories",
    true,
    "accessories"
)}


<style>
    .stage {
        width: 100%;
        object-fit: cover;
        overflow: hidden;
    }

    .gradient {
        background: linear-gradient(to bottom right, var(--site-red), var(--site-blue));
    }

    .solutions {
        background: url("/Education.jpg") no-repeat center;
        background-size: cover;
    }

    .panels {
        background: url("/pixels.png") no-repeat center;
        background-size: cover;
    }

    .accessories {
        background: url("/med.png") no-repeat center;
        background-size: cover;
    }
</style>