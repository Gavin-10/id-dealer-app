<script lang="ts">
	import './layout.css';

	const { children } = $props();
</script>

<div class="w-full h-[66px] px-4">
    <img class="logo" src="/logo_clear.png" alt="Imagine Display Logo" />
</div>

{@render children()}

<style>
    .logo {
        height: 100%;
    }
</style>

