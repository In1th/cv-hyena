<script>
	import Line from "$lib/copmponents/Line.svelte";
    import Left from "$lib/icons/Left.svelte";
	import { inview } from "svelte-inview";
	import { fade, slide } from "svelte/transition";

	/** @type {import('./$types').PageData} */
	export let data;

	let isInView = false;
</script>

<div
	class="relative"
	use:inview={{ unobserveOnEnter: true, rootMargin: "-20%" }}
	on:change={(/** @type {{ detail: { inView: boolean; }; }} */ event) => {
		isInView = event.detail.inView;
	}}
>
	<img
		src={`/${data.meta.image}`}
		alt={data.id}
		style:--id="image-{data.id}"
		class="h-[800px] w-screen aspect-square object-cover" style="object-position: center 30%;"

	/>

	<button
		on:click={() => history.back()}
		title="Go back"
		class="group absolute top-2 p-4 left-2 z-20 bg-secondary opacity-50 xl:bg-[transparent] xl:opacity-100 hover:bg-secondary hover:opacity-50 rounded-xl transition">
		<Left/>
	</button>

	<div class="absolute z-10 bottom-24 px-4 w-full">
		<div class="h-9 md:h-24 z-20">
			{#if isInView}
			<h2 style:--title="title-{data.id}" class="text-1xl md:text-8xl text-primary" style="font-size: calc(5vw)" in:slide={{duration: 200}}>
				{data.meta.title}
			</h2>
			{/if}
		</div>
		<Line disableX />
		<div class="h-40">
			{#if isInView}
				<p class="text-1xl p-4 text-text" style="text-align: justify; font-size: calc(1.5vw);" in:fade={{duration: 400}}>{data.meta.description}</p>
			{/if}
		</div>
	</div>
	<div
		class="top-0 w-full h-full absolute z-0 bg-gradient-to-b from-[transparent] from-20% to-background to-95%"
	/>
</div>

<section class="mx-16 markdown">
	<svelte:component this={data.content} />
</section>

<style>
	img {
		view-transition-name: var(--id);
	}

	t {
    text-align: justify;
    }

	@media (max-width: 768px) {
    t {
        font-size: 0.5em;
    }
}
</style>




