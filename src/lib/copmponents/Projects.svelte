<script lang="ts">
    import type { Project as ProjectType } from "$lib/types";
    import Project from "./Project.svelte";

    export let projects: ProjectType[] = [];
    let more = false;
    const noOfRows = 2;

    $: visibleProjects = more? projects: (() => {
        let score = 0;
        let idx = 0;
        const res: ProjectType[] = [];
        while (score < noOfRows * 3 && idx < projects.length) {
            res.push(projects[idx])
            score += projects[idx].weight;
            idx++;
        }
        return res
    })();

</script>
<section class="relative bg-text text-background flex flex-col">
    <h1 class=" font-bold text-8xl p-16">My projects</h1>
    <section class="grid grid-cols-3 px-32 pt-32 pb-16 gap-16">
        {#each visibleProjects as project}
            <Project {...project}/>
        {/each}
    </section>
    <button class="mb-16 mx-auto border-background border-2 w-fit py-3 px-16" on:click={() => more = !more}><b>{more? 'Less projects': 'More projects'}</b></button>
    <p class="p-3 absolute bottom-0 right-0 text-xl" style="writing-mode: vertical-rl;">PROJECTS ///</p>
</section>