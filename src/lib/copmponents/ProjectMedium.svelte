<script lang="ts">
    export let id = '';
    export let title: string = 'title';
    export let tags: string[] = [];
    export let image: string = 'placeholder_hero.jpg';
</script>

<article class="col-span-2 border-background border-2 flex max-h-[500px] p-3">
    <img src={image} alt='placeholder'  style:--id="image-{id}" class=' max-w-[60%] aspect-square object-[0_-10rem] object-cover'/>
    <div class="flex flex-col p-6 flex-grow">
        <h2 class="text-4xl " style:--title="title-{id}">{title}</h2>
        <div class="flex flex-col gap-4 text-accent pt-8 text-2xl">
            {#each tags as tag}
                <p>{tag}</p>
            {/each}
        </div>
        <a class="mt-auto flex" href={`/projects/${id}`}>
            <button class=" text-text bg-primary ml-auto h-fit p-5 my-auto"><b>Learn more ></b></button>
        </a>
    </div>
</article>

<style>
	img {
		view-transition-name: var(--id);
	}
	h2 {
		view-transition-name: var(--title);
	}
</style>