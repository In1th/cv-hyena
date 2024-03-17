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
    export let number_of_tiles: number;
    export let image1 = 'Placeholder_photo.png';
    export let Text1 = 'Text1';
    export let Text_size_1: number;
    export let image2 = 'Placeholder_photo.png';
    export let Text2 = 'Text2';
    export let Text_size_2: number;
    export let image3 = 'Placeholder_photo.png';
    export let Text3 = 'Text3';
    export let Text_size_3: number;
    export let image4 = 'Placeholder_photo.png';
    export let Text4 = 'Text3';
    export let Text_size_4: number;
    export let image5 = 'Placeholder_photo.png';
    export let Text5 = 'Text3';
    export let Text_size_5: number;
    export let image6 = 'Placeholder_photo.png';
    export let Text6 = 'Text3';
    export let Text_size_6: number;
    export let Gallery_image1 = 'Placeholder_photo.png';
    export let Gallery_image2 = 'Placeholder_photo.png';
    export let Gallery_image3 = 'Placeholder_photo.png';
    
    const props = {id, title, image,number_of_tiles,image1,Text1,Text_size_1,image2,Text2,Text_size_2,image3,Text3,Text_size_3,image4,Text4,Text_size_4,image5,Text5,Text_size_5,image6,Text6,Text_size_6,Gallery_image1,Gallery_image2,Gallery_image3}
</script>

{#if weight === 3}
    <ProjectLarge {...props} tags={tags}/>
{:else if  weight === 2}
    <ProjectMedium {...props} tags={tags} description={description}/>
{:else}
    <ProjectSmall {...props} />
{/if}