<script lang="ts">
	import './layout.css';

    import { asset, resolve } from "$app/paths";

    import { NavigationMenu } from "bits-ui";
    import { ChevronDown } from '@lucide/svelte';
    import {darkRoundedGlass, glassMenu, glassMenuItem, transitionSizeLarge} from "$lib/styles/styles.ts";

    const { children } = $props();

    const solutions = [
        { title: "All Solutions", href: "/solutions" },
    ];
    const accessories = [
        { title: "All Accessories", href: "/accessories" },
    ];
    const panels = [
        { title: "All Panels", href: "/panels" },
        { title: "Indoor", href: "/panels" },
        { title: "Outdoor", href: "/panels" },
        { title: "Commercial", href: "/panels" },
        { title: "Education", href: "/panels" },
        { title: "Government", href: "/panels" },
        { title: "House of Worship", href: "/panels" },
        { title: "Residential", href: "/panels" },
        { title: "Visitor Experience", href: "/panels" },
        { title: "Virtual Production/Cinema", href: "/panels" }
    ];

    //styles
    const navButtons = "relative flex mx-3 p-3 rounded-md hover:cursor-pointer transition duration-300 ease-in-out hover:scale-110 backdrop-blur-md";
    const navTrigger = "relative flex mx-3 p-3 hover:cursor-pointer";
</script>

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

<div class="w-full h-[80px] px-4 py-3 flex justify-between items-center absolute z-10 top-0 left-0">
    <a href={resolve("/")} class="logo rounded-md backdrop-blur-md {transitionSizeLarge}">
        <img class="logo" src={asset("/logo_clear.png")} alt="Imagine Display Logo" />
    </a>

    <NavigationMenu.Root>
        <NavigationMenu.List class="flex justify-between h-full">
            <NavigationMenu.Item value="Solutions">
                <NavigationMenu.Trigger class={navTrigger}>
                    Solutions
                    <ChevronDown />
                </NavigationMenu.Trigger>
                {@render content(solutions)}
            </NavigationMenu.Item>
            <NavigationMenu.Item value="Pannes">
                <NavigationMenu.Trigger class={navTrigger}>
                    Panels
                    <ChevronDown />
                </NavigationMenu.Trigger>
                {@render content(panels)}
            </NavigationMenu.Item>
            <NavigationMenu.Item value="accessories">
                <NavigationMenu.Trigger class={navTrigger}>
                    Accessories
                    <ChevronDown />
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

{@render children()}

<div class="mt-7 p-10">
    <p class="text-center">&copy Copyright Imagine Displays. All rights reserved.</p>
</div>

<style>
    .logo {
        height: 100%;
    }
</style>

