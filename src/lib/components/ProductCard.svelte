
<script lang="ts">

    import {flatGlassButton, smallTitle} from "$lib/styles/styles.ts";

    import { Download } from "@lucide/svelte";

    let { title, subtitle, download, disabled, children } = $props();

</script>

<div class="bg-gray-500/50 p-3 rounded-md backdrop-blur-md shadow-lg border border-gray-500/40">
    <h3 class="{smallTitle}">{title}</h3>
    <h4 class="font-semibold text-2xl">{subtitle}</h4>
    <hr />
    {@render children()}

    <div class="flex justify-end mt-3">
        <button class="{flatGlassButton} bg-cyan-500/25 flex justify-between w-35" onclick={() => download()} disabled={disabled}>
            Download
            <Download />
        </button>
    </div>
</div>