<script lang="ts">
	import './layout.css';

    import { asset, resolve } from "$app/paths";
    import { page } from "$app/state";

    import { NavigationMenu } from "bits-ui";
    import { ChevronDown, House, Headset, Package, Layers } from '@lucide/svelte';
    import {glassMenu, glassMenuItem, transitionSizeLarge} from "$lib/styles/styles.ts";

    const { children } = $props();

    let mobileOpen = $state(false);

    const solutions = [
        { title: "All Solutions", href: "/solutions" },
    ];
    const accessories = [
        { title: "All Accessories", href: "/accessories" },
    ];
    const panels = [
        { title: "All Panels", href: "/panels?market=All Markets&group=All Groups" },
        { title: "Indoor", href: "/panels?market=All Markets&group=Indoor" },
        { title: "Outdoor", href: "/panels?market=All Markets&group=Outdoor" },
        { title: "Commercial", href: "/panels?market=Commercial&group=All Groups" },
        { title: "Education", href: "/panels?market=Education&group=All Groups" },
        { title: "Government", href: "/panels?market=Government&group=All Groups" },
        { title: "House of Worship", href: "/panels?market=House of Worship&group=All Groups" },
        { title: "Residential", href: "/panels?market=Residential&group=All Groups" },
        { title: "Visitor Experience", href: "/panels?market=Visitor Experience&group=All Groups" },
        { title: "Virtual Production/Cinema", href: "/panels?market=Virtual Production/Cinema&group=All Groups" },
    ];

    //A helper function to check if the current URL includes a specific search string
    const includes = (search: string) => {
        return page.url.href.includes(search);
    }

    //styles
    const navButtons = "relative flex mx-3 p-3 rounded-md hover:cursor-pointer transition duration-300 ease-in-out hover:scale-110 backdrop-blur-md";
    const navTrigger = "relative flex mx-3 p-3 hover:cursor-pointer";
</script>

<!--Snippet for nav bar drop down menu-->
{#snippet content(items: { title: string, href: string, }[])}
    <NavigationMenu.Content class="absolute top-16 w-full sm:w-auto">
        <ul class="{glassMenu}">
            {#each items as item (item.title)}
                <li class="{glassMenuItem}">
                    <NavigationMenu.Link href={item.href}>{item.title}</NavigationMenu.Link>
                </li>
            {/each}
        </ul>
    </NavigationMenu.Content>
{/snippet}

<!--Desktop navigation-->
<header>
    <div class="w-full h-[80px] px-4 py-3 hidden md:flex justify-between items-center fixed z-10 top-0 left-0">
        <a href={resolve("/")} class="logo rounded-md backdrop-blur-md {transitionSizeLarge}">
            <img class="logo" src={asset("/logo_clear.png")} alt="Imagine Display Logo" />
        </a>

        <NavigationMenu.Root>
            <NavigationMenu.List class="flex justify-between h-full">
                <NavigationMenu.Item value="Solutions">
                    <NavigationMenu.Trigger class="{navTrigger} {includes("solutions") ? 'text-gray-500' : ''}" disabled={includes("solutions")}>
                        Solutions
                        <ChevronDown class="mt-1"/>
                    </NavigationMenu.Trigger>
                    {@render content(solutions)}
                </NavigationMenu.Item>
                <NavigationMenu.Item value="Panels">
                    <NavigationMenu.Trigger class="{navTrigger} {includes("panels") ? 'text-gray-500' : ''}" disabled={includes("panels")}>
                        Panels
                        <ChevronDown class="mt-1"/>
                    </NavigationMenu.Trigger>
                    {@render content(panels)}
                </NavigationMenu.Item>
                <NavigationMenu.Item value="accessories">
                    <NavigationMenu.Trigger class="{navTrigger} {includes("accessories") ? 'text-gray-500' : ''}" disabled={includes("accessories")}>
                        Accessories
                        <ChevronDown class="mt-1"/>
                    </NavigationMenu.Trigger>
                    {@render content(accessories)}
                </NavigationMenu.Item>

                <NavigationMenu.Item class={navButtons + " ml-5"}>
                    <NavigationMenu.Link href="/orders">Orders</NavigationMenu.Link>
                </NavigationMenu.Item>
                <NavigationMenu.Item class={navButtons}>
                    <NavigationMenu.Link href="/contact-us">Contact Us</NavigationMenu.Link>
                </NavigationMenu.Item>
            </NavigationMenu.List>
        </NavigationMenu.Root>
    </div>
</header>

<!--Mobile navigation-->
<div class="fixed z-10 bottom-0 left-0 w-full md:hidden p-3 backdrop-blur-md flex justify-between items-center">
    <a href={resolve('/')} class="select-none flex flex-col items-center w-20 p-2 rounded-full backdrop-blur-md border  transition active:scale-110 {page.url.href.endsWith('/') ? 'border-cyan-300/15 border-b-cyan-500/30 shadow-lg shadow-cyan-500/20' : 'border-gray-300/10 border-b-gray-200/15'}">
        <House class="m-0" size="18"/>
        <p class="text-xs">Home</p>
    </a>

    <button onclick={() => mobileOpen = !mobileOpen} class="text-xs select-none flex flex-col items-center w-20 p-2 rounded-full backdrop-blur-md border  transition active:scale-110 {includes('/panels') || includes('/solutions') || includes('/accessories') ? 'border-cyan-300/15 border-b-cyan-500/30 shadow-lg shadow-cyan-500/20' : 'border-gray-300/10 border-b-gray-200/15'}">
        <Layers class="m-0" size="18"/>
        Products
    </button>

    <a href={resolve('/orders')} class="select-none flex flex-col items-center w-20 p-2 rounded-full backdrop-blur-md border  transition active:scale-110 {includes('/orders') ? 'border-cyan-300/15 border-b-cyan-500/30 shadow-lg shadow-cyan-500/20' : 'border-gray-300/10 border-b-gray-200/15'}">
        <Package class="m-0" size="18"/>
        <p class="text-xs">Orders</p>
    </a>

    <a href={resolve('/contact-us')} class="select-none flex flex-col items-center w-20 p-2 rounded-full backdrop-blur-md border transition active:scale-110 {includes('/contact-us') ? 'border-cyan-300/15 border-b-cyan-500/30 shadow-lg shadow-cyan-500/20' : 'border-gray-300/10 border-b-gray-200/15'}">
        <Headset class="m-0" size="18"/>
        <p class="text-xs">Contact</p>
    </a>
</div>

<!--Mobile product drawer-->
{#if mobileOpen}
<div class="fixed z-10 bottom-25 left-0 p-5 w-full">
    <ul class="{glassMenu}">
        <li class="{glassMenuItem}"><a href={resolve('/solutions')} onclick={() => mobileOpen = false}>Solutions</a></li>
        <li class="{glassMenuItem}"><a href={resolve('/panels')} onclick={() => mobileOpen = false}>Panels</a></li>
        <li class="{glassMenuItem}"><a href={resolve('/accessories')} onclick={() => mobileOpen = false}>Accessories</a></li>
    </ul>
</div>
{/if}

<main>
    {@render children()}
</main>

<footer class="z-5 relative">
    <div class="p-10 bg-sky-800">
        <p class="text-center">&copy Copyright Imagine Displays. All rights reserved.</p>
    </div>
</footer>

<style>
    .logo {
        height: 100%;
    }
</style>

