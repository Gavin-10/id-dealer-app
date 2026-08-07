<script lang="ts">
	import './layout.css';

    import { asset, resolve } from "$app/paths";

    import { NavigationMenu } from "bits-ui";
    import { ChevronDown } from '@lucide/svelte';

    const { children } = $props();

    const solutions = [
        { title: "All Solutions", href: "/solutions" },
    ];
    const accessories = [
        { title: "All Accessories", href: "/accessories" },
    ];
    const panels = [
        { title: "All Panels", href: "/pannels" },
        { title: "Indoor", href: "/pannels" },
        { title: "Outdoor", href: "/pannels" },
        { title: "Commercial", href: "/pannels" },
        { title: "Education", href: "/pannels" },
        { title: "Government", href: "/pannels" },
        { title: "House of Worship", href: "/pannels" },
        { title: "Residential", href: "/pannels" },
        { title: "Visitor Experience", href: "/pannels" },
        { title: "Virtual Production/Cinema", href: "/pannels" }
    ];

    //styles
    const navButtons = "relative flex mx-3 p-3 rounded-md hover:cursor-pointer backdrop-hue-rotate-330 backdrop-blur-md";
    const navTrigger = "relative flex mx-3 p-3 hover:cursor-pointer";
</script>

{#snippet content(items: { title: string, href: string, }[])}
    <NavigationMenu.Content class="absolute top-16 w-full sm:w-auto">
        <ul class="rounded-md border border-[#282931] backdrop-blur-md p-3 backdrop-brightness-50 min-w-3xs shadow-2xs shadow-white/25">
            {#each items as item (item.title)}
                <li class="py-3">
                    <NavigationMenu.Link href={item.href}>{item.title}</NavigationMenu.Link>
                </li>
            {/each}
        </ul>
    </NavigationMenu.Content>
{/snippet}

<div class="w-full h-[66px] px-4 flex justify-between items-center absolute z-10 top-0 left-0">
    <a href={resolve("/")} class="logo">
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

<style>
    .logo {
        height: 100%;
    }
</style>

