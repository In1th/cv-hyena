<script>
    import { goto } from "$app/navigation";
    import Right from "$lib/icons/Right.svelte";
import { inview } from "svelte-inview";
    import { fade } from "svelte/transition";

    export let id = "";
    export let title = "title";
    /** @type {string[]} */
    export let tags = [];
    export let image = "placeholder_hero.jpg";

    $: tagArr = tags.join(" /// ").split(" ");

    let isInView = false;

    $: outerWidth = 0;

    const onClick = () => {
        goto(`/projects/${id}`)
    }
</script>

<svelte:window bind:outerWidth/>

<button
    class="2xl:col-span-3 max-h-[500px]"
    use:inview={{ unobserveOnEnter: true}}
    on:change={(/** @type {{ detail: { inView: boolean; }; }} */ event) => {
        isInView = event.detail.inView;
    }}
    on:click={onClick}
    disabled={outerWidth >= 1024}
>
    {#if isInView}
        <article class="border-background border-2 flex flex-col h-full p-3" in:fade={{duration: 600}}>
            <img
                src={image}
                alt="placeholder"
                style:--id="image-{id}"
                class="max-h-[80%] aspect-square object-cover"
            />
            <div class="flex-grow flex flex-wrap align-center px-5">
                <h2 class="text-4xl my-auto" style:--title="title-{id}">
                    {title}
                </h2>
                <div class="flex gap-8 text-2xl text-accent my-auto px-16">
                    {#each tagArr as tag}
                        <p>{tag}</p>
                    {/each}
                    <!-- <p>Word 1</p>
                     <p>///</p>
                     <p>Word 2</p>
                     <p>///</p>
                     <p>Word 3</p> -->
                </div>
                <a href={`/projects/${id}`} class="hidden lg:block ml-auto h-fit my-auto">
                    <button class=" text-text bg-primary p-5 flex">
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
    }
</style>
