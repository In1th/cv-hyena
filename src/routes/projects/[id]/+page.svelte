<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<h1>{data.meta.title}</h1>
<p>{data.meta.description}</p>

<svelte:component this={data.content}/>
