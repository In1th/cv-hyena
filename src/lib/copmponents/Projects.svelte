<script>
    import Project from "./Project.svelte";
import ProjectLarge from "./ProjectLarge.svelte";
    import ProjectMedium from "./ProjectMedium.svelte";

</script>
<section class="relative bg-text text-background flex flex-col">
    <h1 class=" font-bold text-8xl p-16">My projects</h1>
    <section class="grid grid-cols-3 grid-rows-4 px-32 pt-32 pb-16 gap-16">
        <ProjectLarge/>
        <ProjectMedium/>
        <Project/>
        <Project/>
        <Project/>
        <Project/>
        <Project/>
        <Project/>
        <Project/>
    </section>
    <button class="mb-16 mx-auto border-background border-2 w-fit py-3 px-16"><b>More projects</b></button>
    <p class="p-3 absolute bottom-0 right-0 text-xl" style="writing-mode: vertical-rl;">PROJECTS ///</p>
</section>