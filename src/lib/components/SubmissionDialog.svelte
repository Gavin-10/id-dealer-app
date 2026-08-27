<script lang='ts'>
    import { AlertDialog } from "bits-ui";
    import {mediumGlass, transitionSizeLarge} from "$lib/styles/styles.ts";
    let { isOpen = $bindable(false), success } = $props();

    let borderColor = $derived(success ? 'border-green-300/15' : 'border-red-300/15');
    let bottomBorderColor = $derived(success ? 'border-b-green-500/30' : 'border-b-red-500/30');
    let textColor = $derived(success ? 'text-green-400' : 'text-red-500');
    let shadow = $derived(success ? 'shadow-green-500/20' : 'shadow-red-500/20');

</script>

<AlertDialog.Root bind:open={isOpen}>
    <AlertDialog.Portal>
        <AlertDialog.Overlay class="bg-black/40 backdrop-blur-md fixed inset-0 z-50"/>
        <AlertDialog.Content class="{mediumGlass} shadow-lg {shadow} p-4 w-md border {borderColor} {bottomBorderColor} fixed left-[50%] translate-x-[-43%] top-[10%] z-50 bg-[#171717]">
            <AlertDialog.Title class="text-center text-3xl font-medium">Form Process{success ? "ed Successfully" : " Failed"}</AlertDialog.Title>
            <AlertDialog.Cancel class="{transitionSizeLarge} {textColor} mt-8 w-full p-2 rounded-md text-lg">Dismiss</AlertDialog.Cancel>
        </AlertDialog.Content>
    </AlertDialog.Portal>
</AlertDialog.Root>