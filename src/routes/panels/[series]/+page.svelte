
<script lang="ts">
    import {medTitle, smallTitle} from "$lib/styles/styles.ts";
    import ProductCard from "$lib/components/ProductCard.svelte";

    import { Building, House, School } from '@lucide/svelte'
    import type {CostCalculation, ProductRetrieval} from "$lib/model/ledPanels.ts";

    let { data } = $props();
    let descriptions = $derived(data.panelData.description.filter(d => !d.isVerticalMarket));
    let markets = $derived(data.panelData.description.filter(d => d.isVerticalMarket));

    //Future adjustment: mt-[-116px]
</script>

<!--Snippet for each of the series information paragraphs-->
{#snippet seriesInfo(title: string, text: string)}
    <div class="my-3 z-10">
        <h3 class="{smallTitle}">{title}</h3>
        <p>{text}</p>
    </div>
{/snippet}

<!--Snippet for each of the series market blurbs-->
{#snippet market(market: string, text: string)}
    <div class="flex justify-between items-stretch p-3 w-full md:w-1/2 text-blue-500">
        <Building class="w-[25%]" size="auto" />
        <div class="border rounded-full mx-3"></div>
        <div class="w-[70%]">
            <h3 class="{smallTitle}">{market}</h3>
            <hr />
            <p>{text}</p>
        </div>
    </div>
{/snippet}

<!--Product card wrapper-->
{#snippet product(product: ProductRetrieval, costCalculation: CostCalculation)}
    <div class="w-full md:w-1/2 lg:w-1/3 p-1.5">
        <ProductCard product={product} costCalculation={costCalculation}></ProductCard>
    </div>
{/snippet}

<img class="w-full h-[250px] md:h-[620px] min-z mt-0 md:mt-[80px]" src={data.panelData.photoUrl} alt={data.panelData.series}/>
<!--Series information-->
<div class="relative md:w-4/5 sm:w-full m-auto p-3 z-5">
    <!--Information blurbs-->
    <div class="bg-(--site-background) p-5 rounded-2xl">
        <h1 class="my-3 {medTitle}">{ data.series }</h1>
        <hr class="mb-3"/>

        {#each descriptions as description (description.title.title)}
            {@render seriesInfo(description.title.title, description.text) }
        {/each}
    </div>

    <h2 class="mt-6 {medTitle}">Ideal Applications In:</h2>
    <hr class="my-3"/>

    <!--Market Blurbs-->
    <div class="flex flex-wrap justify-between">
        {#each markets as mark (mark.title.title)}
            {@render market(mark.title.title, mark.text)}
        {/each}
    </div>

    <h2 class="mt-6 {medTitle}">Available Panels:</h2>
</div>

<!--Series product cards-->
<div class="bg-dots">
    <div class="flex flex-wrap align-stretch m-auto md:w-4/5 sm:w-full py-3">
        {#each data.panelData.products as prod (prod.partNumber)}
            {@render product(prod, data.panelData.costCalculation)}
        {/each}
    </div>
</div>

<style>
    .min-z {
        z-index: 0;
    }

    .bg-dots {
        background-image: url('/dots2.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }
</style>