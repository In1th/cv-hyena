<script lang="ts">
    import { fade } from "svelte/transition";

    export let id = '';
    export let title = 'title';
    export let tags: string[] = [];
    export let imgUrl = 'placeholder_hero.jpg';
</script>


<a href={`/projects/${id}`} class="border-background border-2 flex flex-col max-h-[500px] p-3 gap-5 cursor-pointer">
    <img src={imgUrl} alt='placeholder' class='max-h-[80%] aspect-square object-top object-cover'/>
    <h2 class="text-4xl">{title}</h2>
</a>