
<script lang="ts">
    let { title, subtitle, src, alt, children, to } = $props();
</script>

<a href={to}>
    <div class="backdrop-blur-md bg-gray-700/50 rounded-md hover:cursor-pointer transition duration-300 ease-in-out hover:-translate-y-1">
        <img class="w-full h-[280px] rounded-t-md" src={src} alt={alt} />
        <div class="p-3">
            <h2 class="font-semibold text-2xl">{title}</h2>
            <h3 class="font-semibold text-lg">{subtitle}</h3>
            <hr />
            {@render children()}
        </div>
    </div>
</a>