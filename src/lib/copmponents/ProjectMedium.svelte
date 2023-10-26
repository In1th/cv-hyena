<script >
    import Right from "$lib/icons/Right.svelte";
import { inview } from "svelte-inview";
    import { fade } from "svelte/transition";

    export let id = '';
    export let title = 'title';
    export let description = '';
    /**
     * @type {string[]}
     */
    export let tags = [];
    export let image = 'placeholder_hero.jpg';

    let isInView = false;
</script>

<div class="col-span-2 max-h-[500px]"
    use:inview={{ unobserveOnEnter: true}}
    on:change={(/** @type {{ detail: { inView: boolean; }; }} */ event) => {
        isInView = event.detail.inView;
    }}>
    {#if isInView}
        <article class=" border-background border-2 h-full flex p-3" in:fade={{delay: 100, duration: 200}}>
            <img src={image} alt='placeholder'  style:--id="image-{id}" class=' max-w-[80%] aspect-square object-[0_-10rem] object-cover'/>
            <div class="flex flex-col p-6 flex-grow">
                <h2 class="text-4xl " style:--title="title-{id}">{title}</h2>
                <div class="flex gap-4 text-accent pt-8 text-2xl">
                    {#each tags as tag}
                        <p>{tag}</p>
                    {/each}
                </div>
                <p class="py-8">{description}</p>
                <a class="mt-auto flex" href={`/projects/${id}`}>
                    <button class=" text-text bg-primary ml-auto h-fit p-5 my-auto flex">
                        <b>Learn more</b>
                        <Right/>
                    </button>
                </a>
            </div>
        </article>
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