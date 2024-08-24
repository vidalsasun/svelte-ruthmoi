<!-- src/routes/+layout.svelte -->
<script>
    import "tailwindcss/tailwind.css";
    import '../global.scss';
    import gsap from '$lib/global-libraries'; // Carga GSAP desde la ubicación global
	  import { setContext } from "svelte";
    setContext('gsap', gsap);
  </script>
  
  <slot />