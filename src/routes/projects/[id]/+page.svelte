<script>
	import Line from "$lib/copmponents/Line.svelte";
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
		class="h-[700px] w-screen aspect-square object-top object-cover"
	/>
	<!-- svelte-ignore a11y-invalid-attribute -->
	<button
		on:click={() => history.back()}
		class="absolute top-0 p-4 cursor-pointer z-20">></button
	>
	<div class="absolute z-10 bottom-16 px-4 w-full">
		<div class="h-24">
			{#if isInView}
			<h2 style:--title="title-{data.id}" class="text-8xl" in:slide={{duration: 900}}>
				{data.meta.title}
			</h2>
			{/if}
		</div>
		<Line disableX />
		<div class="h-6">
			{#if isInView}
				<p class="text-2xl" in:fade={{duration: 200}}>{data.meta.description}</p>
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
</style>
