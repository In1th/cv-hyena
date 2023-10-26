<script lang="ts">
    export let id = '';
    export let title = 'title';
    export const tags: string[] = [];
    export let image = 'placeholder_hero.jpg';
</script>


<a href={`/projects/${id}`} class="border-background border-2 flex flex-col max-h-[500px] p-3 gap-5 cursor-pointer">
    <img src={image} alt='placeholder' style:--id="image-{id}" class='max-h-[80%] aspect-square object-top object-cover'/>
    <h2 class="text-4xl" style:--title="title-{id}">{title}</h2>
</a>

<style>
	img {
		view-transition-name: var(--id);
	}
	h2 {
		view-transition-name: var(--title);
	}
</style>