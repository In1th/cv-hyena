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
		class="h-[800px] w-screen aspect-square object-cover" style="object-position: center 5%;"

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
			<h2 style:--title="title-{data.id}" class="text-4xl md:text-8xl text-primary" in:slide={{duration: 200}}>
				{data.meta.title}
			</h2>
			{/if}
		</div>
		<Line disableX />
		<div class="h-40">
			{#if isInView}
				<p class="text-2xl p-4 text-text" in:fade={{duration: 400}}>{data.meta.description}</p>
			{/if}
		</div>
	</div>
	<div
		class="top-0 w-full h-full absolute z-0 bg-gradient-to-b from-[transparent] from-20% to-background to-95%"
	/>
</div>

{#if data.meta.number_of_tiles >= 1}
    <!--sekscja 3-->
    <section class="mx-16 markdown flex">
        <div class="flex-1 flex justify-center items-center">
            <!-- data content wyrównane do środka -->
            <t style="white-space: pre-line; font-size: {data.meta.Text_size_1}em; margin-right: 10px;">{data.meta.Text1}</t>
        </div>
      
        <div class="flex-1" style="margin-left: 10px;">
            <!-- obrazek po prawej -->
            <img
                src={`/${data.meta.image1}`}
                alt={data.id}
                style:--id="image-{data.id}"
                class="h-[h-[100%] w-[100%] md:w-[100%] aspect-square object-top object-cover float-left md:mr-8"
            />
        </div>
    </section>
{/if}


<!-- przerwy między sekcjami -->
<div class="my-8"></div>

{#if data.meta.number_of_tiles >= 2}
    <!--sekscja 3-->
    <section class="mx-16 markdown flex">
		<div class="flex-1" style="margin-right: 10px;">
            <!-- obrazek po prawej -->
            <img
                src={`/${data.meta.image2}`}
                alt={data.id}
                style:--id="image-{data.id}"
                class="h-[h-[100%] w-[100%] md:w-[100%] aspect-square object-top object-cover float-left md:mr-8"
            />
        </div>

        <div class="flex-1 flex justify-center items-center">
            <!-- data content wyrównane do środka -->
            <t style="white-space: pre-line; font-size: {data.meta.Text_size_2}em; margin-right: 10px;">{data.meta.Text2}</t>
        </div>
      
        
    </section>
{/if}

<!-- przerwy między sekcjami -->
<div class="my-8"></div>

{#if data.meta.number_of_tiles >= 3}
    <!--sekscja 3-->
    <section class="mx-16 markdown flex">
        <div class="flex-1 flex justify-center items-center">
            <!-- data content wyrównane do środka -->
            <t style="white-space: pre-line; font-size: {data.meta.Text_size_3}em; margin-right: 10px;">{data.meta.Text3}</t>
        </div>
      
        <div class="flex-1" style="margin-left: 10px;">
            <!-- obrazek po prawej -->
            <img
                src={`/${data.meta.image3}`}
                alt={data.id}
                style:--id="image-{data.id}"
                class="h-[h-[100%] w-[100%] md:w-[100%] aspect-square object-top object-cover float-left md:mr-8"
            />
        </div>
    </section>
{/if}

<div class="my-8"></div>

{#if data.meta.number_of_tiles >= 4}
    <!--sekscja 3-->
    <section class="mx-16 markdown flex">
		<div class="flex-1" style="margin-right: 10px;">
            <!-- obrazek po prawej -->
            <img
                src={`/${data.meta.image4}`}
                alt={data.id}
                style:--id="image-{data.id}"
                class="h-[h-[100%] w-[100%] md:w-[100%] aspect-square object-top object-cover float-left md:mr-8"
            />
        </div>

        <div class="flex-1 flex justify-center items-center">
            <!-- data content wyrównane do środka -->
            <t style="white-space: pre-line; font-size: {data.meta.Text_size_4}em; margin-right: 10px;">{data.meta.Text4}</t>
        </div>
      
        
    </section>
{/if}

<div class="my-8"></div>

{#if data.meta.number_of_tiles >= 5}
    <!--sekscja 3-->
    <section class="mx-16 markdown flex">
        <div class="flex-1 flex justify-center items-center">
            <!-- data content wyrównane do środka -->
            <t style="white-space: pre-line; font-size: {data.meta.Text_size_5}em; margin-right: 10px;">{data.meta.Text5}</t>
        </div>
      
        <div class="flex-1" style="margin-left: 10px;">
            <!-- obrazek po prawej -->
            <img
                src={`/${data.meta.image5}`}
                alt={data.id}
                style:--id="image-{data.id}"
                class="h-[h-[100%] w-[100%] md:w-[100%] aspect-square object-top object-cover float-left md:mr-8"
            />
        </div>
    </section>
{/if}

<div class="my-8"></div>

{#if data.meta.number_of_tiles >= 6}
    <!--sekscja 3-->
    <section class="mx-16 markdown flex">
		<div class="flex-1" style="margin-right: 10px;">
            <!-- obrazek po prawej -->
            <img
                src={`/${data.meta.image6}`}
                alt={data.id}
                style:--id="image-{data.id}"
                class="h-[h-[100%] w-[100%] md:w-[100%] aspect-square object-top object-cover float-left md:mr-8"
            />
        </div>

        <div class="flex-1 flex justify-center items-center">
            <!-- data content wyrównane do środka -->
            <t style="white-space: pre-line; font-size: {data.meta.Text_size_6}em; margin-right: 10px;">{data.meta.Text6}</t>
        </div>
      
        
    </section>
{/if}


<!-- przerwy między sekcjami -->
<div class="my-8"></div>


<!--Galeria-->
<section class="mx-16 markdown flex">
    <!-- Pierwszy obrazek -->
    <div class="flex-1" style="margin-right: 10px;">
        <!-- obrazek -->
        <img
            src={`/${data.meta.Gallery_image1}`}
            alt={data.id}
            style:--id="image-{data.id}"
            class="h-[100%] w-[100%] md:w-[100%] aspect-square object-top object-cover float-left mr-4 md:mr-8"
        />
    </div>

    <!-- Drugi obrazek -->
    <div class="flex-1" style="margin-right: 10px;">
        <!-- obrazek -->
        <img
            src={`/${data.meta.Gallery_image2}`}
            alt={data.id}
            style:--id="image-{data.id}"
            class="h-[100%] w-[100%] md:w-[100%] aspect-square object-top object-cover float-left mr-4 md:mr-8"
        />
    </div>

    <!-- Trzeci obrazek -->
    <div class="flex-1" >
        <!-- obrazek -->
        <img
            src={`/${data.meta.Gallery_image3}`}
            alt={data.id}
            style:--id="image-{data.id}"
            class="h-[100%] w-[100%] md:w-[100%] aspect-square object-top object-cover float-left mr-4 md:mr-8"
        />
    </div>
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




