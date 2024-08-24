<script lang="ts">
	import { onMount } from 'svelte';
	//import Newsstream from '$lib/components/news/newsstream.svelte';
	import DynamicContent from '$lib/components/dynamic-content/dynamic-content.svelte';
	import Nav from '$lib/components/nav/nav.svelte';
	import Footer from '$lib/components/footer/footer.svelte';

	if (typeof window !== 'undefined') {		
	}
</script>
<Nav />
<DynamicContent />
<Footer />
