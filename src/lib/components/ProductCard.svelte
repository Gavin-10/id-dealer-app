
<script lang="ts">

    import {flatGlassButton, mediumAccentGlassButton, smallTitle} from "$lib/styles/styles.ts";

    import { Download } from "@lucide/svelte";

    let { title, subtitle, download, disabled, children } = $props();

</script>

<div class="bg-gray-700/40 p-3 rounded-xl backdrop-blur-sm">
    <h3 class="{smallTitle}">{title}</h3>
    <h4 class="font-semibold text-2xl">{subtitle}</h4>
    <hr />
    {@render children()}

    <div class="flex justify-end mt-3">
        <button class="{mediumAccentGlassButton} flex justify-between w-40" onclick={() => download()} disabled={disabled}>
            Download
            <Download />
        </button>
    </div>
</div>