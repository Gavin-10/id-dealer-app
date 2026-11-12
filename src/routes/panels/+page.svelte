
<script lang="ts">
    import {
        flatGlassButton,
        glassMenu,
        glassMenuItem, largeTitle,
        mediumAccentGlassButton,
        medTitle,
    } from "$lib/styles/styles.ts";
    import Card from "$lib/components/Card.svelte";
    import { Label, Select } from "bits-ui";
    import { ChevronDown } from "@lucide/svelte";
    import {onMount} from "svelte";
    import type { Series } from "$lib/model/ledPanels.ts"
    import SelectInput from "$lib/components/SelectInput.svelte";
    import TextInput from "$lib/components/TextInput.svelte";

    let { data } = $props();

    let selectedGroup = $derived(data.search.group ?? "All Groups");
    let selectedMarket = $derived(data.search.market ?? "All Markets");
    let searchVal = $state("");

    // svelte-ignore state_referenced_locally
    let resFinal = data.res;
    let resDyn = $state<Series[]>(resFinal);

    const groups = ["All Groups", "Indoor", "Outdoor"];
    const markets = ["All Markets", "Commercial", "Education", "Government", "House of Worship", "Residential", "Visitor Experience", "Virtual Production/Cinema"];

    //Search products with user search params
    const search = () => {
        resDyn = resFinal;

        const search = {
            value: searchVal,
            market: selectedMarket === "All Markets" ? null : selectedMarket,
            group: selectedGroup === "All Groups" ? null : selectedGroup,
        };

        resDyn = resDyn.filter(s => s.seriesModel.toLocaleLowerCase().includes(search.value.toLocaleLowerCase()));
        if (search.market) resDyn = resDyn.filter(s => {
            for (const app of s.applications) {
                if (app.application === search.market) return true;
            }
        });
        if (search.group) resDyn = resDyn.filter(s => s.group.group === search.group);
    }

    //Resets search form and clears results of search
    const clear = () => {
        selectedGroup = "All Groups";
        selectedMarket = "All Markets";
        searchVal = "";

        search();
    }

    //Returns tailwind css classes for each product grid item depending on index
    const getClasses = (index: number) => {
        let res;

        if ((index + 1) % 3 === 2) {
            res = "lg:px-1.5";
        } else if ((index + 1) % 3 === 1) {
            res = "lg:pr-1.5 lg:pl-0";
        } else {
            res = "lg:pl-1.5 lg:pr-0";
        }

        if ((index + 1) % 2 === 0) {
            res = res + " md:pl-1.5";
        } else {
            res = res + " md:pr-1.5";
        }

        return res;
    }

    onMount(() => search());
</script>

<div class="md:w-4/5 sm:w-full m-auto p-3 mt-[80px]">
    <h1 class="{medTitle}">Imagine Displays' Series</h1>
    <!--Panel search form-->
    <div class="flex flex-col md:flex-row justify-between md:items-end mt-5">
        <div class="w-full mr-3">
            <TextInput label="Search" bind:value={searchVal} tag="search" color="blue" large/>
        </div>
        <div class="w-full md:w-100 mr-3">
            <SelectInput tag="market" label="Market" defaultVal="All Markets" bind:selectedOption={selectedMarket} options={markets} large/>
        </div>
        <div class="w-full md:w-100 mr-3">
            <SelectInput tag="group" label="Group" defaultVal="All Groups" bind:selectedOption={selectedGroup} options={groups} large/>
        </div>
        <button class="h-[50px] {mediumAccentGlassButton} my-4 md:my-0 md:mr-3 p-0" onclick={search}>Search</button>
        <button class="h-[50px] {flatGlassButton}" onclick={clear}>Clear</button>
    </div>

    <!--Panel grid list-->
    <div class="mt-5 flex flex-wrap items-stretch">
        {#each resDyn as series, index (index)}
            <div class="w-full h-auto md:w-1/2 lg:w-1/3 mb-3 {getClasses(index)}">
                <Card title={series.seriesModel} subtitle="{series._count.products} panels in this series!" src={series.photo} alt={series.seriesModel} to="/panels/{series.seriesModel}">
                    <p>{series.shortDescription}</p>
                </Card>
            </div>
        {:else}
            <span class="{medTitle} m-auto my-7">No Panels Available</span>
            <div class="h-screen"></div>
        {/each}
    </div>
</div>