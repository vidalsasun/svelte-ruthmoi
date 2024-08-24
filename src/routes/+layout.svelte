<!-- src/routes/+layout.svelte -->
<script>
    import "tailwindcss/tailwind.css";
    import '../global.scss';
    import gsap from '$lib/global-libraries'; // Carga GSAP desde la ubicación global
	  import { setContext } from "svelte";
    setContext('gsap', gsap);


    export let title = 'SEXANDPSICO';
    export let description = 'We help you with your sexual life through psychology with a unique methodology.';
  </script>
  <svelte:head>
    <meta name="description" content="{description}" />
    <meta name="robots" content="index, follow" />
    <meta property="og:title" content="{title}" />
    <meta property="og:description" content="{description}" />
  </svelte:head>

<main>
  <slot />
</main>