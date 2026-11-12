
<script lang="ts">
    import { Label, Select } from "bits-ui";
    import {glassMenu, glassMenuItem} from "$lib/styles/styles.ts";
    import {ChevronDown} from "@lucide/svelte";

    let { options, selectedOption = $bindable<string>(''), label, defaultVal, large = false, tag } = $props();
</script>

<Label.Root for="group" class="m-0 p-0 text-sm font-medium">{label}</Label.Root>
<Select.Root type="single" bind:value={selectedOption} onValueChange={v => selectedOption = v} name={tag}>
    <Select.Trigger class="w-full {large ? 'h-[50px]' : 'p-1.5'} flex justify-between items-center px-3 border border-gray-500 rounded-md hover:cursor-pointer transition-colors duration-300 ease-in-out focus:border-(--site-red)">
        <Select.Value placeholder={defaultVal} />
        <ChevronDown />
    </Select.Trigger>
    <Select.Portal>
        <Select.Content class={glassMenu} sideOffset={12} side="bottom">
            <Select.Viewport>
                {#each options as option (option)}
                    <Select.Item
                            class={glassMenuItem}
                            value={option}
                            label={option}
                    >
                        {option}
                    </Select.Item>
                {/each}
            </Select.Viewport>
        </Select.Content>
    </Select.Portal>
</Select.Root>