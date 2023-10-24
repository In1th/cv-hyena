<script lang="ts">
    export let id = '';
    export let title = 'title';
    export let tags: string[] = [];
    export let imgUrl = 'placeholder_hero.jpg';

    $: tagArr = tags.join(' /// ').split(' ')
</script>

<article class="col-span-3 border-background border-2 flex flex-col max-h-[500px] p-3" >
    <img src={imgUrl} alt='placeholder' class='max-h-[80%] aspect-square object-[0_-40rem] object-cover'/>
    <div class="flex-grow flex align-center px-5">
        <h2 class="text-4xl my-auto">{title}</h2>
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
        <a href={`/projects/${id}`} class="ml-auto h-fit my-auto">
            <button class=" text-text bg-primary p-5"><b>Learn more ></b></button>
        </a>
    </div>
</article>