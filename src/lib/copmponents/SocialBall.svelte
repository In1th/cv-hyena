<script lang="ts">
    export let icon: any;
    export let link: string;
    export let description: string;
</script>

<a href={link} title={description} class="group bg-text rounded-3xl p-2 flex content-center justify-center flex-wrap">
    <svelte:component this={icon}/>
</a>
