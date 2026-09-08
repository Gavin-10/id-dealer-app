
<script lang="ts">
    import {container, medTitle, smallTitle} from '$lib/styles/styles.ts';
</script>

<img class="fixed top-0 left-0 w-full h-full" src="/pixels.png" alt="background image" />
<div class="h-[80px] relative"></div>
<div class="{container} relative z-5">
    <h1 class="{medTitle}">Manage Your Orders</h1>

    <div class="w-full mt-5 p-3 rounded-2xl backdrop-blur-md">
        <h2 class="{smallTitle}">Cart</h2>
        <hr/>
    </div>

    <div class="w-full mt-5 p-3 rounded-2xl backdrop-blur-md">
        <h2 class="{smallTitle}">Placed Orders</h2>
        <hr/>
    </div>
</div>
