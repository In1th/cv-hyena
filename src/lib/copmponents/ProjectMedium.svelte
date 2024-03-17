<script >
    import { goto } from "$app/navigation";
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
    export let image2 = 'placeholder_hero.jpg';

    let isInView = false;

    $: outerWidth = 0;

    const onClick = () => {
        goto(`/projects/${id}`)
    }
</script>

<svelte:window bind:outerWidth/>

<button 
    class="2xl:col-span-2 max-h-[800px] text-left"
    on:click={onClick}
    disabled={outerWidth >= 768}
    use:inview={{ unobserveOnEnter: true}}
    on:change={(/** @type {{ detail: { inView: boolean; }; }} */ event) => {
        isInView = event.detail.inView;
    }}>
    {#if isInView}
        <article class=" border-background border-2 h-full flex flex-col md:flex-row p-3" in:fade={{delay: 100, duration: 200}}>
            <img src={image} alt='placeholder'  style:--id="image-{id}" class='max-h-[80%] md:max-h-full md:max-w-[40%] aspect-square object-cover'/>
            <div class="flex flex-col p-6 flex-grow">
                <h2 class="text-4xl " style:--title="title-{id}">{title}</h2>
                <div class="flex flex-wrap gap-4 text-accent pt-8 text-2xl">
                    {#each tags as tag}
                        <p>{tag}</p>
                    {/each}
                </div>
                <p class="hidden md:flex py-8" style="text-align: justify;">{description}</p>
                <a class="hidden md:flex mt-auto" href={`/projects/${id}`}>
                    <button class=" text-text bg-primary ml-auto h-fit p-5 my-auto flex">
                        <b>Learn more</b>
                        <Right/>
                    </button>
                </a>
            </div>
        </article>
    {/if}
</button>

<style>
	img {
		view-transition-name: var(--id);
	}
	h2 {
		view-transition-name: var(--title);
        text-align: justify;
	}
    p {
    text-align: justify;
    }
</style>