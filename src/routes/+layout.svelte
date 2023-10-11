<script>
    import Footer from '$lib/copmponents/Footer.svelte';
import '../app.css';
</script>

<svelte:head>
    <title>Jakub Tymiński</title>
</svelte:head>

<main class="flex flex-col min-h-screen min-w-screen">
    <section class="flex-grow flex flex-col">
        <slot/>
    </section>
    <Footer/>
</main>