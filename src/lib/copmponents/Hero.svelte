<script>
    import Line from "./Line.svelte";
import Socials from "./Socials.svelte";

</script>
<section class="relative flex flex-col content-center w-full  overflow-hidden">
    <div class="absolute w-full h-full flex m-auto justify-center content-center ">
        <div class="hidden xl:block border-primary h-[800px] aspect-square absolute z-0 border-8 border-dashed rounded-full animate-[spin_180s_linear_infinite]"></div>
        <div class="hidden xl:block border-secondary border-t-4 w-[1000px] bottom-48 right-32 absolute z-10"></div>
        <div class="hidden min-[1570px]:block w-[300px] h-[100px] bottom-16 right-32 absolute z-10" id="box"></div>
        <div class="relative max-w-[700px] h-fit">
            <img src="photo_main.PNG" alt="me" 
            class="z-10 relative"
            />
            <div class="top-0 w-full h-[101%] absolute z-20 bg-gradient-to-b from-[transparent] from-20% to-background to-90%"></div>
        </div>
    </div>
    <div class="mt-[400px] md:mt-0 flex min-h-[90vh] justify-center">
        <div class="z-30 basis-1/2 flex flex-col flex-wrap justify-center md:pl-32 text-center md:text-left">
            <h1 class=" font-bold text-5xl sm:text-8xl text-primary">Jakub</h1>
            <h1 class="text-text font-bold text-5xl sm:text-8xl mb-5">Tymiński</h1>
            <div class="md:w-1/2">
                <Line disableX/>
            </div>
            <p class="text-2xl">Inżynier</p>
            <div class="flex flex-col md:flex-row mt-4 gap-2 justify-center md:justify-normal">
                <svg class="mx-auto md:mx-0 my-auto" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path class="fill-primary" d="M12.398 19.804L12.8585 20.6917L12.8585 20.6917L12.398 19.804ZM11.602 19.804L11.1415 20.6917L11.1415 20.6917L11.602 19.804ZM18 11C18 13.1458 16.9079 14.9159 15.545 16.2906C14.183 17.6644 12.6342 18.555 11.9376 18.9163L12.8585 20.6917C13.6448 20.2838 15.397 19.2805 16.9653 17.6987C18.5326 16.1178 20 13.8706 20 11H18ZM12 5C15.3137 5 18 7.68629 18 11H20C20 6.58172 16.4183 3 12 3V5ZM6 11C6 7.68629 8.68629 5 12 5V3C7.58172 3 4 6.58172 4 11H6ZM12.0624 18.9163C11.3658 18.555 9.81702 17.6644 8.45503 16.2906C7.09211 14.9159 6 13.1458 6 11H4C4 13.8706 5.46741 16.1178 7.03474 17.6987C8.60299 19.2805 10.3552 20.2838 11.1415 20.6917L12.0624 18.9163ZM11.9376 18.9163C11.9514 18.9091 11.9733 18.9023 12 18.9023C12.0267 18.9023 12.0486 18.9091 12.0624 18.9163L11.1415 20.6917C11.6831 20.9726 12.3169 20.9726 12.8585 20.6917L11.9376 18.9163ZM14 11C14 12.1046 13.1046 13 12 13V15C14.2091 15 16 13.2091 16 11H14ZM12 9C13.1046 9 14 9.89543 14 11H16C16 8.79086 14.2091 7 12 7V9ZM10 11C10 9.89543 10.8954 9 12 9V7C9.79086 7 8 8.79086 8 11H10ZM12 13C10.8954 13 10 12.1046 10 11H8C8 13.2091 9.79086 15 12 15V13Z"/>
                </svg>                
                <p class="text-2xl">Wrocław, Poland</p>
            </div>
        </div>
        <div class="hidden md:z-30 md:basis-1/2 md:flex md:flex-col md:pr-32 md:mb-40">
            <div class="mt-auto flex">
                <div class="ml-auto">
                    <Socials/>
                </div>
            </div>
        </div>
    </div>    
    
    <div class="flex justify-center z-30 text-text pt-2">
        <svg class='w-12 aspect-square fill-text' x="0px" y="0px" viewBox="0 0 79.37 122.88" style="enable-background:new 0 0 79.37 122.88" xml:space="preserve">
            <g>
                <path d="M50.2,121.63c6.71-1.85,12.72-5.44,17.51-10.23c7.19-7.19,11.65-17.11,11.65-28.03V39.68c0-10.92-4.46-20.84-11.65-28.03 C60.52,4.46,50.6,0,39.68,0C28.77,0,18.84,4.46,11.65,11.65C4.46,18.84,0,28.77,0,39.68v43.68c0,10.92,4.46,20.84,11.65,28.03 c5.59,5.59,12.82,9.53,20.89,11.01C37.42,123.3,45.7,122.87,50.2,121.63L50.2,121.63L50.2,121.63z M39.23,92.06 c4.15,0,7.55-3.4,7.55-7.55v-7.78c0-4.15-3.4-7.55-7.55-7.55c-4.15,0-7.55,3.4-7.55,7.55v7.78C31.68,88.66,35.07,92.06,39.23,92.06 L39.23,92.06z M61.08,104.77c-5.49,5.49-13.07,8.91-21.4,8.91c-8.33,0-15.9-3.41-21.4-8.91c-5.49-5.49-8.91-13.07-8.91-21.4V39.68 c0-8.33,3.41-15.9,8.91-21.4c5.49-5.49,13.07-8.91,21.4-8.91c8.33,0,15.9,3.41,21.4,8.91c5.49,5.49,8.91,13.07,8.91,21.4v43.68 C69.99,91.7,66.58,99.27,61.08,104.77L61.08,104.77L61.08,104.77z"/>
            </g>
        </svg>
    </div>
</section>

<style>
    #box {
        background: repeating-linear-gradient( -45deg, theme('colors.accent'), theme('colors.accent') 1rem, transparent 5px, transparent 25px );
    }
</style>
