<script>
    import SocialBall from './SocialBall.svelte';
    import Github from '$lib/icons/Github.svelte';
    import Twitter from '$lib/icons/Twitter.svelte';
    import Linkedin from '$lib/icons/Linkedin.svelte';
    export let vertical = false;
</script>

<section class="flex gap-2" class:flex-col={vertical}>

  <SocialBall
  link="https://www.linkedin.com/in/jakub-tymiński"
  description='Linkedin'
  icon={Linkedin}
/>
</section>