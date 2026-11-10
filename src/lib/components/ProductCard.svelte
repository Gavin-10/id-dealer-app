
<script lang="ts">

    import {mediumAccentGlassButton, smallTitle, mediumAccentDisabledGlassButton} from "$lib/styles/styles.ts";

    import { Download } from "@lucide/svelte";
    import { SvelteMap } from 'svelte/reactivity';
    import {onMount} from "svelte";
    import {PUBLIC_API_URL} from "$env/static/public";

    let { product, costCalculation } = $props();
    let formattedDetails = $state<Map<string, string>[]>([]);

    const downloadSpecSheet = async () => {
        const res = await fetch(`${PUBLIC_API_URL}/resources/specSheet/${product.partNumber}`);
        const blob = await res.blob();

        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `${product.partNumber}.pdf`;
        link.click();

        window.URL.revokeObjectURL(url);
    }

    onMount(() => {
        const description: Map<string, string>[] = [];
        const tempDetails = product.additionalDetails as Record<string, string>;

        let items: Map<string, string> = new SvelteMap();
        items.set("Retail Price", (product.landedCost * costCalculation.retailCoefficient).toLocaleString('en-US', { style: 'currency', currency: 'USD' }))
        items.set("Tier 1 Price", (product.landedCost * costCalculation.tierOneCoefficient).toLocaleString('en-US', { style: 'currency', currency: 'USD' }))
        items.set("Tier 2 Price", (product.landedCost * costCalculation.tierTwoCoefficient).toLocaleString('en-US', { style: 'currency', currency: 'USD' }))
        items.set("Tier 3 Price", (product.landedCost * costCalculation.tierThreeCoefficient).toLocaleString('en-US', { style: 'currency', currency: 'USD' }))
        items.set("Preferred Tier Price", (product.landedCost * costCalculation.prefferredCoefficient).toLocaleString('en-US', { style: 'currency', currency: 'USD' }))
        description.push(items);

        items = new SvelteMap();
        items.set("Pixel Pitch", product.pixelPitch.pitch);
        items.set("LED Type", product.ledType.type);
        items.set("Group", product.idModel.group.group);
        items.set("Brightness", tempDetails["Brightness (nits)"] ?? "Undefined");
        items.set("Cabinet Aspect Ratio", tempDetails["Cabinet Aspect Ratio"] ?? "Undefined");
        description.push(items);

        items = new SvelteMap();
        items.set("Frame Rates", tempDetails["Frame Rates (Hz)"] ?? "Undefined");
        items.set("Refresh Rate", tempDetails["Pixel Refresh Rate (Hz)"] ?? "Undefined");
        items.set("Total Pixels", tempDetails["Total Cabinet Pixels"] ?? "Undefined");
        items.set("Bit Depth", tempDetails["Bit Depth"] ?? "Undefined");
        description.push(items);

        items = new SvelteMap();
        items.set("Color Temperature", tempDetails["Color Temperature (K)"] ?? "Undefined");
        items.set("Contrast Ratio", tempDetails["Contrast Ratio"] ?? "Undefined");
        items.set("Gray Scale / Colors", tempDetails["Gray Scale/Colors"] ?? "Undefined");
        description.push(items);

        items = new SvelteMap();
        items.set("Power Consumption - Avg (W)", tempDetails["Power Consumption - Avg (W)"] ?? "Undefined");
        items.set("Power Consumption - Max (W)", tempDetails["Power Consumption - Max (W)"] ?? "Undefined");
        items.set("Input Voltage Range (V)", tempDetails["Input Voltage Range (V)"] ?? "Undefined");
        description.push(items);

        items = new SvelteMap();
        items.set("Height", tempDetails["Cabinet Height (mm)"] + "mm");
        items.set('Width', tempDetails['Cabinet Width (mm)'] + 'mm');
        items.set('Depth', tempDetails['Cabinet Depth (mm)'] + 'mm');
        const annoyingConversion = (Number.parseInt(tempDetails['Diagonal (inches)']) ?? 0) * 25.4;
        items.set("Diagonal", annoyingConversion.toFixed(0).toString() + "mm");
        items.set("Weight per Cabinet (Lbs)", tempDetails["Weight per Cabinet (Lbs)"] ?? "Undefined");
        items.set("Weight per Cabinet (kg)", tempDetails["Weight per Cabinet (kg)"] ?? "Undefined");
        description.push(items);

        items = new SvelteMap();
        items.set("Dimming Capability", tempDetails["Dimming Capability"] ?? "Undefined");
        items.set("Lifetime (hours)", tempDetails["Lifetime (hours)"] ?? "Undefined");
        items.set("Viewing Angle (H/V)", tempDetails["Viewing Angle (H/V)"] ?? "Undefined");
        description.push(items);

        items = new SvelteMap();
        items.set("Operating Temperature C", tempDetails["Operating Temperature C"] ?? "Undefined");
        items.set("Storage Temperature", tempDetails["Storage Temperature"] ?? "Undefined");
        items.set("Ingress Protection (Front/Rear)", tempDetails["Ingress Protection (Front/Rear)"] ?? "Undefined");
        items.set("Serviceability", tempDetails["Serviceability"] ?? "Undefined");
        description.push(items);

        formattedDetails = description;
    })
</script>

<div class="bg-gray-700/40 p-3 rounded-xl backdrop-blur-md">
    <h3 class="{smallTitle}">{product.partNumber}</h3>
    <h4 class="font-semibold text-2xl">{product.status.status}</h4>
    <hr />

    {#each formattedDetails as detailGroup, index (index)}
        <ul class="mt-5">
            {#each detailGroup as detail, index (index)}
                <div class="flex justify-between">
                    <p>{detail[0]}:</p>
                    <p>{detail[1]}</p>
                </div>
                <hr class="text-gray-600"/>
            {/each}
        </ul>
    {/each}

    <div class="flex justify-end mt-3">
        <button class="{product.hasSpecSheet ? mediumAccentGlassButton : mediumAccentDisabledGlassButton} flex justify-between w-40" onclick={async () => await downloadSpecSheet()} disabled={!product.hasSpecSheet}>
            Download
            <Download />
        </button>
    </div>
</div>