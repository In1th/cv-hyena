<script>
    export let disableX = false;
    export let disableY = false;
    export let horizontal = true;
</script>

{#if horizontal}
     <div class='bg-white border-t-[2px]' class:mx-8={!disableX} class:my-8={!disableY}></div>
{:else}
     <div class='bg-white border-r-[2px]' class:mx-8={!disableX} class:my-8={!disableY}></div>
{/if}