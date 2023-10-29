<script lang="ts">
    export let disableX = false;
    export let disableY = false;
    export let horizontal = true;
    export let variant: 'white' | 'accent' = 'white';
</script>

<div 
    class:mx-8={!disableX} class:my-8={!disableY}
    class:white={variant === 'white'}
    class:accent={variant === 'accent'}
    class:horizontal={horizontal}
    class:vertical={!horizontal}
></div>


<style>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    .white {
        @apply border-text;
    }
    
    .accent {
        @apply border-accent;
    }

    .horizontal {
        @apply border-t-[2px] w-full 2xl:border-r-[2px] 2xl:border-t-0 2xl:w-0;
    }

    .vertical {
        @apply border-t-[2px] lg:border-r-[2px];
    }
</style>