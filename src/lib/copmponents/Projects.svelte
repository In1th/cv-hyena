<script lang="ts">
    import type { Project as ProjectType } from "$lib/types";
    import Project from "./Project.svelte";

    export let projects: ProjectType[] = [];
    let more = false;
    const noOfRows = 2;

    $: outerWidth = 0;
    $: projectsToPick = [...projects].sort((p1, p2) => -(p1.weight - p2.weight));
    $: visibleProjects = more? projectsToPick: trimProjects(projectsToPick);

    const trimProjects = (prjs: ProjectType[]) => {
        let score = 0;
        let idx = 0;
        const res: ProjectType[] = [];
        while (score < noOfRows * 3 && idx < prjs.length) {
            res.push(prjs[idx])
            score += prjs[idx].weight;
            idx++;
        }
        return res
    }

</script>

<svelte:window bind:outerWidth/>

<section class="relative bg-text text-background flex flex-col">
    <h1 class=" font-bold text-5xl md:text-8xl p-16">My projects</h1>
    <section class="grid grid-cols-1 mx-6 md:px-32 pt-12 md:pt-32 pb-16 gap-8 md:gap-16">
        {#each visibleProjects as project}
            <Project {...project}/>
        {/each}
    </section>
    
    <button class="mb-16 mx-auto border-background border-2 w-fit py-3 px-16" on:click={() => more = !more}><b>{more? 'Less projects': 'More projects'}</b></button>
    <p class="p-3 absolute bottom-0 right-0 text-xl" style="writing-mode: vertical-rl;">PROJECTS ///</p>
</section>