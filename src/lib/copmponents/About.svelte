<script>
    import { inview } from "svelte-inview";
    import { fade, slide } from "svelte/transition";

    let isInView = false;
</script>
<section class="mx-6 my-16 md:mx-32 md:my-64 min-h-[500px]" 
    use:inview={{ unobserveOnEnter: true, rootMargin: "-20%" }}
    on:change={(/** @type {{ detail: { inView: boolean; }; }} */ event) => {
        isInView = event.detail.inView;
    }}>
    {#if isInView}
    <div in:fade class="border-2 flex flex-col relative z-10">
        <div class="m-auto">
            <h1 class="text-4xl md:text-7xl bg-background h-fit w-fit p-4 px-10 relative bottom-10 md:bottom-16 z-10 text-center">About me</h1>
        </div>
        <div class="flex flex-wrap justify-center p-16 min-[2118px]:px-0 pt-0 w-full gap-20" >
            <div class="max-w-[800px] w-[90%] aspect-[16/9]">
                <iframe class="w-full h-full" src="https://www.youtube.com/embed/3Q38nxKabHs;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>        
           </div>
            <div class="border-text w-full border-t-[2px] 
                          min-[2118px]:border-r-[2px] min-[2118px]:border-t-0 min-[2118px]:w-0"
            ></div>
            <div class="max-w-[800px] w-[90%] flex items-center text-center md:text-justify"> 
                <p>I am a young engineer with a solid theoretical foundation and extensive practical experience gained over the years through the implementation of various interdisciplinary projects. I undertake work both within academic environments and on my own initiative and passion. I have experience in design, additive and subtractive manufacturing, mechanical and electronic component implementation, as well as embedded systems programming. Currently working in R&D of consumer electronics for high volume production.</p>
            </div>
        </div>
    </div>
    {/if}
    <!-- <div class="h-full w-full border-2 border-primary absolute z-0 translate-x-[8px] translate-y-[-8px]"></div> -->
</section>