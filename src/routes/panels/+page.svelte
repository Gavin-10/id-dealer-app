
<script lang="ts">
    import {flatGlassButton, glassMenu, glassMenuItem, medTitle, roundedGlassButton} from "$lib/styles/styles.ts";
    import { Label, Select } from "bits-ui";
    import { ChevronDown } from "@lucide/svelte";

    let selectedGroup = $state("All Groups");
    let selectedMarket = $state("All Markets");
    let searchVal = $state("");

    const groups = ["All Groups", "Indoor", "Outdoor"];
    const markets = ["All Markets", "Commercial", "Education", "Government", "House of Worship", "Residential", "Visitor Experience", "Virtual Production/Cinema"];

    const search = () => {
        const search = {
            value: searchVal,
            market: selectedMarket,
            group: selectedGroup,
        };

        console.log(search);
    }

    const clear = () => {
        selectedGroup = "All Groups";
        selectedMarket = "All Markets";
        searchVal = "";

        search();
    }
</script>

<div class="md:w-3/5 sm:w-full m-auto mt-[80px]">

    <h1 class="{medTitle}">Imagine Displays' Series</h1>

    <div class="flex justify-between items-end mt-5">
        <div class="w-full mr-3">
            <Label.Root for="search" class="m-0 p-0 text-sm font-medium">Search</Label.Root>
            <input bind:value={searchVal} id="search" class="h-[50px] bg-transparent rounded-md w-full ring-0 outline-0 border border-gray-500 transition-colors duration-300 ease-in-out focus:border-(--site-blue)"/>
        </div>
        <div class="w-100 mr-3">
            <Label.Root for="application" class="m-0 p-0 text-sm font-medium">Application</Label.Root>
            <Select.Root type="single" bind:value={selectedMarket} onValueChange={v => selectedMarket = v}>
                <Select.Trigger class="w-full h-[50px] flex justify-between items-center px-3 border border-gray-500 rounded-md transition-colors duration-300 ease-in-out focus:border-(--site-red)">
                    <Select.Value placeholder="All Groups" />
                    <ChevronDown />
                </Select.Trigger>
                <Select.Portal>
                    <Select.Content class="{glassMenu}" sideOffset={12}>
                        <Select.Viewport>
                            {#each markets as market (market)}
                                <Select.Item
                                        class="{glassMenuItem}"
                                        value="{market}"
                                        label="{market}"
                                >
                                    {market}
                                </Select.Item>
                            {/each}
                        </Select.Viewport>
                    </Select.Content>
                </Select.Portal>
            </Select.Root>
        </div>
        <div class="w-100 mr-3">
            <Label.Root for="group" class="m-0 p-0 text-sm font-medium">Group</Label.Root>
            <Select.Root type="single" bind:value={selectedGroup} onValueChange={v => selectedGroup = v}>
                <Select.Trigger class="w-full h-[50px] flex justify-between items-center px-3 border border-gray-500 rounded-md transition-colors duration-300 ease-in-out focus:border-(--site-red)">
                    <Select.Value placeholder="All Groups" />
                    <ChevronDown />
                </Select.Trigger>
                <Select.Portal>
                    <Select.Content class="{glassMenu}" sideOffset={12}>
                        <Select.Viewport>
                            {#each groups as group (group)}
                                <Select.Item
                                        class="{glassMenuItem}"
                                        value="{group}"
                                        label="{group}"
                                >
                                    {group}
                                </Select.Item>
                            {/each}
                        </Select.Viewport>
                    </Select.Content>
                </Select.Portal>
            </Select.Root>
        </div>
        <button class="h-[50px] {roundedGlassButton} mr-3 p-0" onclick={search}>Search</button>
        <button class="h-[50px] {flatGlassButton}" onclick={clear}>Clear</button>
    </div>
</div>