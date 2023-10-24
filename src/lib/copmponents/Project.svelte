<script lang="ts">
    import ProjectLarge from "./ProjectLarge.svelte";
    import ProjectMedium from "./ProjectMedium.svelte";
    import ProjectSmall from "./ProjectSmall.svelte";

    export let id = '';
    export let weight: number;
    export let title = 'title';
    export let tags: string[] = [];
    export let imgUrl = 'placeholder_hero.jpg';

    const props = {id, title, tags, imgUrl}
</script>

{#if weight === 3}
    <ProjectLarge {...props} />
{:else if  weight === 2}
    <ProjectMedium {...props} />
{:else}
    <ProjectSmall {...props} />
{/if}