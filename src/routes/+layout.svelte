<script lang="ts">
	import './layout.css';

    import { NavigationMenu } from "bits-ui";
    import { ChevronDown } from '@lucide/svelte';

    const { children } = $props();

    const solutions = [
        { title: "All Solutions", href: "/solutions" },
    ];
    const accessories = [
        { title: "All Accessories", href: "/accessories" },
    ];
    const pannels = [
        { title: "All Pannels", href: "/pannels" },
        { title: "Indoor", href: "/pannels" },
        { title: "Outdoor", href: "/pannels" },
        { title: "Commercial", href: "/pannels" },
        { title: "Education", href: "/pannels" },
        { title: "Government", href: "/pannels" },
        { title: "House of Worship", href: "/pannels" },
        { title: "Residential", href: "/pannels" },
        { title: "Visitor Experience", href: "/pannels" },
        { title: "Virtual Production/Cineam", href: "/pannels" }
    ];
</script>

<div class="w-full h-[66px] px-4 text-white flex justify-between">
    <img class="logo" src="/logo_clear.png" alt="Imagine Display Logo" />

    <NavigationMenu.Root>
        <NavigationMenu.List class="flex justify-between my-1">
            <NavigationMenu.Item value="Solutions">
                <NavigationMenu.Trigger class="flex mx-3 p-3 rounded-md hover:bg-[#282931]">
                    Solutions
                    <ChevronDown />
                </NavigationMenu.Trigger>
                <NavigationMenu.Content>
                    <ul>
                        {#each solutions as solution (solution.title)}
                            <li>
                                <NavigationMenu.Link href={solution.href}>{solution.title}</NavigationMenu.Link>
                            </li>
                        {/each}
                    </ul>
                </NavigationMenu.Content>
            </NavigationMenu.Item>
            <NavigationMenu.Item value="Pannes">
                <NavigationMenu.Trigger class="relative flex mx-3 p-3 rounded-md hover:bg-[#282931]">
                    Panels
                    <ChevronDown />
                </NavigationMenu.Trigger>
                <NavigationMenu.Content class="absolute top-15 w-full sm:w-auto">
                    <ul>
                        {#each pannels as pannel (pannel.title)}
                            <li>
                                <NavigationMenu.Link href={pannel.href}>{pannel.title}</NavigationMenu.Link>
                            </li>
                        {/each}
                    </ul>
                </NavigationMenu.Content>
            </NavigationMenu.Item>
            <NavigationMenu.Item value="accessories">
                <NavigationMenu.Trigger class="flex mx-3 p-3">
                    Accessories
                    <ChevronDown />
                </NavigationMenu.Trigger>
                <NavigationMenu.Content>
                    <ul>
                        {#each accessories as accessory (accessory.title)}
                            <li>
                                <NavigationMenu.Link href={accessory.href}>{accessory.title}</NavigationMenu.Link>
                            </li>
                        {/each}
                    </ul>
                </NavigationMenu.Content>
            </NavigationMenu.Item>

            <NavigationMenu.Item class="ml-5 mr-3 p-3">
                <NavigationMenu.Link href="/orders">Orders</NavigationMenu.Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item class="mx-3 p-3">
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

