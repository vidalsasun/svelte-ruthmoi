<script lang="ts">
	import { base } from '$app/paths';
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import Nav from './nav/nav.svelte';
	import ScrollingText from './scroling-text/scrollingtext.svelte';
	import RedSection from './sections/red-section.svelte';
	import Experience from './sections/experience.svelte';
	import Reviews from './sections/reviews.svelte';

	// Importar el JSON mock
	const gridItems = [
		{
			text: 'UNA METODOLOGÍA QUE COMBINA SEXOLOGÍA Y PSICOLOGÍA PARA QUE PONGAS EL FOCO EN TU SEXUALIDAD Y AUMENTES TU DESEO.'
		},
		{
			text: 'VERDADEROS EXPERTOS ACOMPAÑÁNDOTE A LOGRARLO, A TRABAJARLO Y A SENTIR COMO EMPIEZAS A DISFRUTAR DENTRO Y FUERA DE LA CAMA.'
		},
		{ text: 'UNA DECISIÓN DE COMO QUIERES VIVIR CONECTANDO TODOS LOS ASPECTOS DE TU VIDA.' },
		{
			text: 'UN PROCESO DE TRANSFORMACIÓN TANGIBLE QUE VES Y TOCAS REALMENTE A PARTIR DE DESCUBRIR, COMPRENDER Y DARLE RIENDA SUELTA A TUS DESEOS.'
		},
		{
			text: 'UN PROCESO CON UNOS OBJETIVOS MARCADOS DESDE EL INICIO, FÁCIL DE APLICAR EN TU VIDA PARA QUE TENGAS RESULTADOS REALES.'
		},
		{ text: 'EXPANDE TUS HORIZONTES' }
	];

	
	if (typeof window !== 'undefined') {
		gsap.registerPlugin(ScrollTrigger);

		function splitTextToChars(elements: NodeListOf<HTMLElement>): HTMLElement[][] {
			return Array.from(elements).map((element) => {
				const text = element.textContent || '';
				element.innerHTML = ''; // Limpiar el contenido HTML del elemento

				// Crear un span para cada carácter y evitar que se escape el texto
				const spans = Array.from(text).map((char) => {
					const span = document.createElement('span');
					span.textContent = char;
					element.appendChild(span);
					return span;
				});

				return spans;
			});
		}
		onMount(() => {
			const ctx: gsap.Context = gsap.context(() => {
				let rows = gsap.utils.toArray<HTMLElement>('.row');
				const splitRowsChars = rows.map((row) =>
					splitTextToChars(row.querySelectorAll('.section-heading')).flat()
				);

				rows.forEach((row, index) => {
					const splitChars = splitRowsChars[index];
					gsap.fromTo(
						splitChars,
						{
							autoAlpha: 0,
							yPercent: 100
						},
						{
							autoAlpha: 1,
							yPercent: 0,
							duration: 1,
							stagger: {
								each: 0.01,
								from: 'start'
							},
							delay: index * 0.5
						}
					);
				});
			});

			const sections = gsap.utils.toArray('.scroll-section');
			sections.forEach((section) => {
				gsap.fromTo(
					section,
					{
						y: 100
					},
					{
						y: 0,
						duration: 1,
						scrollTrigger: {
							trigger: section,
							start: 'top bottom-=100px',
							end: 'bottom top+=100px'
						}
					}
				);
			});
		});
	}
</script>

<div class="nav-container">
	<Nav />
</div>

<section class="image-section">
	<div class="image-container">
		<img alt="lying" src="../content/porque_header_960.jpg" />
	</div>
</section>

<section>
	<div class="outer">
		<div class="inner">
			<div class="bg upper-row">
				<!-- Row 1 -->
				<div class="row" style="margin-bottom: 30px;">
					<b><h3 class="section-heading">¿POR QUE SEX & PSICO?</h3></b>
				</div>
				<!-- Row 2 -->
				<div class="row">
					<h1 class="section-heading">
						PORQUE PUEDES DISFRUTAR PLENAMENTE SIN TENER QUE ELEGIR ENTRE EL SEXO VAINILLA O EL
						PORNO
					</h1>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="scroll-section">
	<div class="outer">
		<div class="inner">
			<div class="bg">
				<div class="split-section">
					<div class="split-left">
						<b><h2 class="text-p">
							SE TRATA DE CONOCERTE Y SABER QUÉ ES LO QUE TE GUSTA A TI. SIN COMPARARTE CON
							ESTEREOTIPOS MITIFICADOS. SIN REPRIMIR TUS DESEOS Y TUS FANTASÍAS. SIN TENER
							EXPECTATIVAS BASADAS EN LO QUE VES, LEES O ESCUCHAS.
						</h2></b>
						<b><h2 class="text-p">
							PORQUE DISFRUTAS MÁS Y MEJOR, DENTRO Y FUERA DE LA CAMA, CUANDO PONES TU SEXUALIDAD EN
							EL CENTRO DE TU VIDA.
						</h2></b>
					</div>
					<div class="split-right">
						<div class="grid-container">
							{#each gridItems as item}
								<div class="grid-item">
									<h3 class="card-title">{item.text}</h3>
									<img src="../content/arrow-index.png" alt="index" class="arrow-icon" />
								</div>
							{/each}
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Otra sección con animación de scroll -->
<section class="scroll-section">
	<div class="outer">
		<div class="inner">
			<div class="bg">
				<div class="split-section">
					<Experience />
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Otra sección con animación de scroll -->
<section class="scroll-section">
	<div class="outer">
		<div class="inner">
			<div class="bg">
				<Reviews />
			</div>
		</div>
	</div>
</section>

<section class="scroll-section" style="background-color: #aa0d22;">
	<div class="outer">
		<div class="inner">
			<div class="bg upper-row">
				<RedSection />
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	

	.upper-row {
		margin-bottom: 50px;
	}

	section {
		width: 100%;
		position: relative;
		background-color: #fff;
		padding: 20px; /* Añade relleno para asegurar que el contenido no se sobreponga */
		box-sizing: border-box; /* Incluye el padding en el tamaño total del elemento */
	}
	.row {
		display: flex;
		align-items: center;
		justify-content: flex-start;		
		margin: 0;
		width: 100%;
	}

	.nav-container {
		width: 100%;
		position: relative;
		z-index: 10; /* Asegúrate de que el nav esté por encima del contenido */
	}

	.image-section {
		width: 100%;
		height: 40vh; /* Ocupa el 50% de la altura del viewport */
	}

	.image-container {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
	}

	.image-container img {
		width: 100%;
		height: 100%;
		object-fit: cover; /* Asegura que la imagen cubra completamente el contenedor */
	}


	.scroll-section {
		padding: 20px;
	}

	.split-section {
		display: flex;
		flex-wrap: wrap; /* Permite que los divs se envuelvan en pantallas pequeñas */
		width: 100%;
		box-sizing: border-box;
	}

	.split-left,
	.split-right {
		flex: 1; /* Cada div ocupa el 50% del ancho en pantallas grandes */
		display: flex;
		align-items: flex-start;
		padding: 20px;
		box-sizing: border-box;
		text-align: left; /* Alinea el texto a la izquierda dentro del div */
		gap: 10px; /* Espacio entre el texto y la imagen */
		flex-wrap: wrap;
	}

	.split-left {
		justify-content: center; /* Alinea el contenido al principio en pantallas grandes */
	}

	.split-right {
		justify-content: center; /* Alinea el contenido al principio en pantallas grandes */
	}



	.arrow-icon {
		width: 30px; /* Ajusta el tamaño de la imagen */
		height: auto; /* Mantiene la proporción de la imagen */
		margin-top: 7px;
	}

	@media (max-width: 768px) {
		.split-left,
		.split-right {
			flex-direction: column; /* Coloca el texto encima de la imagen en pantallas pequeñas */
			align-items: center; /* Centra el contenido horizontalmente en pantallas pequeñas */
			width: 100%; /* Cada div ocupa el 100% del ancho en pantallas pequeñas */
			margin-bottom: 10px; /* Espacio entre los divs */		
		}

	}


	.split-right {
		display: flex;
		padding: 20px;
		text-align: left;
		gap: 10px;
		flex-wrap: wrap;

		.grid-container {
			display: grid;
			grid-template-columns: repeat(2, 1fr); /* Dos columnas */
			gap: 10px; /* Espacio entre los elementos */
			width: 100%; /* Asegura que el grid ocupe todo el ancho */
		}
        @media (min-width: 768px) {
            .grid-item {
			padding: 10px;
			font-size: 1rem;
			color: #000;
		}
        }
        @media (max-width: 768px) {
            .grid-item {
			padding: 10px;
			font-size: 1rem;
			color: #000;
		}
        }
		
	}
</style>
