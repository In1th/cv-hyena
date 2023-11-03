<script>
// @ts-nocheck

    import { inview } from "svelte-inview";
    import { fade } from "svelte/transition";
    
    export let id = '';
    export let title = 'title';
    export let image = 'placeholder_hero.jpg';

    let isInView = false;
</script>

<div class="max-h-[500px]"
use:inview={{ unobserveOnEnter: true }}
    on:change={(event) => {
        isInView = event.detail.inView;
    }}>
    {#if isInView}
        <a href={`/projects/${id}`} class="border-background border-2 h-64 md:h-full flex flex-col p-3 gap-5 cursor-pointer" in:fade={{delay: 300, duration: 200}}>
            <img src={image} alt='placeholder' style:--id="image-{id}" class='max-h-[70%] aspect-square object-top object-cover'/>
            <h2 class="text-4xl" style:--title="title-{id}">{title}</h2>
        </a>
    {/if}
</div>

<style>
	img {
		view-transition-name: var(--id);
	}
	h2 {
		view-transition-name: var(--title);
	}
</style>