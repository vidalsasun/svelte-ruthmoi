<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import NewsCard from './newscard.svelte';

	let news = [
		{ type: 'text', content: 'Noticia 1' },
		{ type: 'text', content: 'Noticia 2' }
		/*{ type: 'image', content: 'news-image1.jpg', alt: 'News Image 1' },
      { type: 'video', content: 'news-video.mp4' }*/
	];

	onMount(() => {
		gsap.from('.news-card', {
			opacity: 0,
			y: 20,
			duration: 0.5,
			stagger: 0.3
		});
	});
</script>
	{#each news as item}
  		<div class="news-content">
			<NewsCard {item} />
  		</div>
	{/each}

<style lang="scss">
	.news-content {
		padding: 1em;
	}
  
</style>
