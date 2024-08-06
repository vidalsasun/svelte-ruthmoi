<script>
	import { base } from '$app/paths';
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import NewsCard from './newscard.svelte';


	let news = [
		{
			title: 'Descubre tu sexualidad',
			type: 'text',
			content: 'Descubrir tu sexualidad es un proceso personal y único que puede variar ampliamente de una persona a otra. No hay un camino correcto o incorrecto para explorar y entender tu orientación sexual',
			src: `${base}/content/couple-hands_960.jpg`,
			alt: 'Descubre tu sexualidad',
			link: `${base}/`,
		},
		{
			title: 'Las mil y una maneras de disfrutar del sexo',
			type: 'text',
			content: 'Explorar la sexualidad puede ser una aventura emocionante y gratificante. Hay innumerables formas de disfrutar del sexo, cada una única y personal',
			src: `${base}/content/boy-toy_960.jpg`,
			alt: 'Mil maneras de disfrutar del sexo',
			link: `${base}/`,
		},
		{
			title: 'Nuevo espacio',
			type: 'text',
			content: 'Nuevo espacio disponible',
			src: `${base}/content/tent_960.jpg`,
			alt: 'Nuevo espacio',
			link: `${base}/`,
		}
		/*{ type: 'image', content: 'news-image1.jpg', alt: 'News Image 1' },
      { type: 'video', content: 'news-video.mp4' }*/
	];

	onMount(() => {

		news.forEach(item => {
            console.log(item.src); // Imprimir la ruta de la imagen en la consola
        });

		gsap.from('.news-card', {
			opacity: 0,
			y: 20,
			duration: 0.5,
			stagger: 0.3
		});



	});
</script>

<div class="tooltip" data-tip="Noticias">
	<h1>NOTICIAS</h1>
</div>

{#each news as item}
	<div class="news-content">
		<NewsCard {item} />
	</div>
{/each}

<style lang="scss">
	.news-content {
		padding: 1em;
	}
	.tooltip {
		padding-left: 10px;
		padding-right: 10px;
		color: #fff;
		width: 100%;
		font-weight: bolder;
		font-size: 1.5em;
	}
</style>
