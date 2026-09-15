
<script lang="ts">
    import { Label } from 'bits-ui';
    import {blueInput, plainInput, redInput} from "$lib/styles/styles.ts";

    let { label, bindable:value = "", color = "", tag, required } = $props();
</script>

<div class="w-full mr-3">
    <Label.Root for="search" class="m-0 p-0 text-sm font-medium">{label}</Label.Root>
    <input required="{required}" bind:value={value} id={tag} name={tag} class="{color === 'red' ? redInput : color === 'blue' ? blueInput : plainInput}"/>
</div>