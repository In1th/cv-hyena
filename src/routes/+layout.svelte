<script>
    import Footer from '$lib/copmponents/Footer.svelte';
    import '../app.css';
    import { onNavigate } from '$app/navigation'

	onNavigate((navigation) => {
		// @ts-ignore
		if (!document.startViewTransition) return

		return new Promise((resolve) => {
			// @ts-ignore
			document.startViewTransition(async () => {
				resolve()
				await navigation.complete
			})
		})
	})
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