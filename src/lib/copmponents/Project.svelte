<script lang="ts">
    import ProjectLarge from "./ProjectLarge.svelte";
    import ProjectMedium from "./ProjectMedium.svelte";
    import ProjectSmall from "./ProjectSmall.svelte";

    export let id = '';
    export let weight: number;
    export let description = '';
    export let title = 'title';
    export let tags: string[] = [];
    export let image = 'placeholder_hero.jpg';
    
    const props = {id, title, image}
</script>

{#if weight === 3}
    <ProjectLarge {...props} tags={tags}/>
{:else if  weight === 2}
    <ProjectMedium {...props} tags={tags} description={description}/>
{:else}
    <ProjectSmall {...props} />
{/if}