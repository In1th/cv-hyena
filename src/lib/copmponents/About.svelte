<script>
    import { inview } from "svelte-inview";
    import { fade, slide } from "svelte/transition";

    let isInView = false;
</script>
<section class="mx-32 my-64 min-h-[500px]" 
    use:inview={{ unobserveOnEnter: true, rootMargin: "-20%" }}
    on:change={(/** @type {{ detail: { inView: boolean; }; }} */ event) => {
        isInView = event.detail.inView;
    }}>
    {#if isInView}
    <div in:fade class="border-2 flex flex-col relative z-10">
        <div class="m-auto">
            <h1 class="text-7xl bg-background h-fit w-fit p-4 px-10 relative bottom-16 z-10">About me</h1>
        </div>
        <div class="flex flex-wrap justify-center p-16 pt-0 w-full gap-32" >
            <div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=pJoRYMx4TSRF_OmH&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>        
           </div>
            <div class="w-px bg-text"></div>
            <div class="max-w-[600px] flex items-center text-justify"> 
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam tempore perferendis delectus minima quam assumenda est magnam? Distinctio libero omnis adipisci est, cumque voluptatibus iure. Ut iure veniam perspiciatis vitae?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam tempore perferendis delectus minima quam assumenda est magnam? Distinctio libero omnis adipisci est, cumque voluptatibus iure. Ut iure veniam perspiciatis vitae?</p>
            </div>
        </div>
    </div>
    {/if}
    <!-- <div class="h-full w-full border-2 border-primary absolute z-0 translate-x-[8px] translate-y-[-8px]"></div> -->
</section>