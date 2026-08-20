
<script lang="ts">
    import {medTitle, smallTitle} from "$lib/styles/styles.ts";
    import ProductCard from "$lib/components/ProductCard.svelte";

    import { Building, House, School } from '@lucide/svelte'

    let { data } = $props();
</script>

{#snippet seriesInfo(title: string, text: string)}
    <div class="my-3 z-10">
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

{#snippet product(title: string, subtitle: string, download: () => void, disabled: boolean)}
    <div class="w-full md:w-1/2 lg:w-1/3 p-1.5">
        <ProductCard title={title} subtitle={subtitle} download={download} disabled={disabled}>
            <ul class="mt-5">
                <li>
                    <div class="flex justify-between">
                        <p>Some Spec:</p>
                        <p>Some Value</p>
                    </div>
                    <hr class="text-gray-600"/>
                </li>

                <li>
                    <div class="flex justify-between">
                        <p>Some Spec:</p>
                        <p>Some Value</p>
                    </div>
                    <hr class="text-gray-600"/>
                </li>

                <li>
                    <div class="flex justify-between">
                        <p>Some Spec:</p>
                        <p>Some Value</p>
                    </div>
                    <hr class="text-gray-600"/>
                </li>
            </ul>

            <ul class="mt-5">
                <li>
                    <div class="flex justify-between">
                        <p>Some Spec:</p>
                        <p>Some Value</p>
                    </div>
                    <hr class="text-gray-600"/>
                </li>

                <li>
                    <div class="flex justify-between">
                        <p>Some Spec:</p>
                        <p>Some Value</p>
                    </div>
                    <hr class="text-gray-600"/>
                </li>

                <li>
                    <div class="flex justify-between">
                        <p>Some Spec:</p>
                        <p>Some Value</p>
                    </div>
                    <hr class="text-gray-600"/>
                </li>
            </ul>

            <ul class="mt-5">
                <li>
                    <div class="flex justify-between">
                        <p>Some Spec:</p>
                        <p>Some Value</p>
                    </div>
                    <hr class="text-gray-600"/>
                </li>

                <li>
                    <div class="flex justify-between">
                        <p>Some Spec:</p>
                        <p>Some Value</p>
                    </div>
                    <hr class="text-gray-600"/>
                </li>

                <li>
                    <div class="flex justify-between">
                        <p>Some Spec:</p>
                        <p>Some Value</p>
                    </div>
                    <hr class="text-gray-600"/>
                </li>
            </ul>
        </ProductCard>
    </div>
{/snippet}

<img class="w-full h-[250px] md:h-[550px] fixed top-0 min-z" src="/test_gradient.jpg" alt="sample"/>
<div class="relative md:w-4/5 sm:w-full m-auto p-3 mt-[250px] md:mt-[550px] max-z">
    <div class="bg-[#12131a] p-5 rounded-2xl">
        <h1 class="my-3 {medTitle}">{ data.series }</h1>
        <hr class="mb-3"/>

        {@render seriesInfo("What is It:", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")}
        {@render seriesInfo("What is It:", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")}
        {@render seriesInfo("What is It:", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")}
        {@render seriesInfo("What is It:", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")}
    </div>

    <h2 class="mt-6 {medTitle}">Ideal Applications In:</h2>
    <hr class="my-3"/>

    <div class="flex flex-wrap justify-between">
        {@render market("Some Market", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")}
        {@render market("Some Market", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")}
        {@render market("Some Market", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")}
    </div>

    <h2 class="mt-6 {medTitle}">Available Panels:</h2>
    <hr class="my-3"/>

    <div class="flex flex-wrap align-stretch">
        {@render product("Product Title", "Active", () => console.log("downloading"), false)}
        {@render product("Product Title", "Active", () => console.log("downloading"), false)}
        {@render product("Product Title", "Active", () => console.log("downloading"), false)}
        {@render product("Product Title", "Active", () => console.log("downloading"), false)}
        {@render product("Product Title", "Active", () => console.log("downloading"), true)}
    </div>
</div>

<style>
    .min-z {
        z-index: 0;
    }

    .max-z {
        z-index: 10;
    }

    .max-z * {
        z-index: 10;
    }
</style>