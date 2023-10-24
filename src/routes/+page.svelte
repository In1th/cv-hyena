<script>
    import About from "$lib/copmponents/About.svelte";
    import Hero from "$lib/copmponents/Hero.svelte";
    import Line from "$lib/copmponents/Line.svelte";
    import Projects from "$lib/copmponents/Projects.svelte";

    export let data;
</script>

<Hero/>
<Line/>
<About/>
<Projects projects={data.projects}/>