<script>
// @ts-nocheck

    import { fade } from "svelte/transition";
    import { inview } from "svelte-inview";

    let isInView = false;
</script>

<div
    use:inview={{ unobserveOnEnter: true, rootMargin: "-20%" }}
    on:change={(event) => {
        console.log(event.detail)
        isInView = event.detail.inView;
    }}
>
    {#if isInView}
        <div in:fade>
            <slot />
        </div>
    {/if}
</div>

