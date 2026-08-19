
<script lang="ts">
    import {medTitle, smallTitle} from "$lib/styles/styles.ts";

    import { Building, House, School } from '@lucide/svelte'

    let { data } = $props();
</script>

{#snippet seriesInfo(title: string, text: string)}
    <div class="my-3">
        <h3 class="{smallTitle}">{title}</h3>
        <p class="text-lg">{text}</p>
    </div>
{/snippet}

{#snippet market(market: string, text: string)}
    <div class="flex justify-between items-stretch p-3 w-full md:w-1/2 text-blue-500">
        <Building class="w-[25%]" size="auto"/>
        <div class="border rounded-full mx-3"></div>
        <div class="w-[70%]">
            <h3 class="{smallTitle}">{market}</h3>
            <hr />
            <p>{text}</p>
        </div>
    </div>
{/snippet}

<img class="w-full h-[550px]" src="/test_gradient.jpg" alt="sample"/>
<div class="md:w-4/5 sm:w-full m-auto p-3">
    <h1 class="my-3 {medTitle}">{ data.series }</h1>
    <hr class="mb-3"/>

    {@render seriesInfo("What is It:", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")}
    {@render seriesInfo("What is It:", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")}
    {@render seriesInfo("What is It:", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")}
    {@render seriesInfo("What is It:", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")}

    <h2 class="mt-6 {medTitle}">Ideal Applications In:</h2>
    <hr class="my-3"/>

    <div class="flex flex-wrap justify-between">
        {@render market("Some Market", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")}
        {@render market("Some Market", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")}
        {@render market("Some Market", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")}
    </div>

    <h2 class="mt-6 {medTitle}">Available Panels:</h2>
    <hr class="my-3"/>
</div>