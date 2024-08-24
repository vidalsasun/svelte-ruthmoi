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
				<div class="row" style="margin-bottom: 30px;">
					<h2 class="section-heading">EL CÓDIGO DE LA COCREACION</h2>
				</div>
				<div class="row">
					<h1 class="section-heading">
						SIEMPRE TE HAN DICHO QUE EL SEXO ES ALGO ANIMAL Y UN ELEMENTO DE PLACER AISLADO.
					</h1>
				</div>
                <div class="row">
					<h1 class="section-heading">
						LA REALIDAD ES QUE, COMO SERES HUMANOS, NUNCA ESTAREMOS COMPLETOS SI NO ESTAMOS SATISFECHOS CON NUESTRA VIDA SEXUAL.
					</h1>
				</div>
                <div class="row">
					<h1 class="section-heading">
						POR QUE LOS SERES HUMANOS SOMOS UN ÚNICO SISTEMA, CON LA MISMA BASE BIOQUÍMICA PARA TODO Y CUANDO UNO FALLA, TODO FALLA.
					</h1>
				</div>
                <div class="row">
					<h1 class="section-heading">
						POR ESO, CUANDO NO ESTÁS SATISFECHO EN LA CAMA, SIEMPRE HAY ALGO QUE FALLA EN TU DÍA A DÍA: YA SEA EN LA ESFERA ÍNTIMA, LA PRIVADA, LA SOCIAL O LA LABORAL.
					</h1>
				</div>
                <div class="row">
					<h1 class="section-heading">
						CUANDO ERES CAPAZ DE RELACIONAR LO QUE OCURRE EN TU SEXUALIDAD CON TU PERSONALIDAD Y TU FORMA DE VIVIR, CON CÓMO AFRONTAS LO QUE PIENSAS, SIENTES Y HACER, ES CUANDO REALMENTE ERES CAPAZ DE REDIMENSIONAR EL PLACER, EN LA CAMA Y FUERA DE ELLA.
					</h1>
				</div>

                <div class="row">
					<h1 class="section-heading">
						Y ESO SÓLO LO LOGRAS CUANDO DESCUBRES TU <b>PERSONALIDAD SEXUAL.</b>
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
						<h3 class="text-p">DESEO</h3>
						<h2 class="text-p">EL DESEO</h2>
                        <h3 class="text-p">UNIENDO LOS PRINCIPIOS DE LA PSICOLOGÍA Y LA SEXOLOGÍA, HE CREADO UN PROCESO LLAMADO <b>DESEO</b>, CUYO ÚNICO OBJETIVO ES AYUDARTE A DESCUBRIR Y DISFRUTAR DE TU ENERGÍA VITAL.</h3>
                        <h3 class="text-p">PARA LOGRARLO TRABAJAMOS EN TRES FASES.</h3>
                    </div>
					<div class="split-right">
						<div class="grid-container">
    						<div class="grid-item">
                                <img src="../content/procedimiento-fractal2.png" alt="fractal-1" />
                                <h2 class="text-p-left">
                                    <b>FASE INCONSCIENTE</b>
                                </h2>
                            </div>
    						<div class="grid-item">
                                <img src="../content/procedimiento-fractal3.png" alt="fractal-2" />
                                <h2 class="text-p-left">
                                    <b>FASE PRECONSCIENTE</b>
                                </h2>
                            </div>
    						<div class="grid-item">
                                <img src="../content/procedimiento-fractal1.png" alt="fractal-3" />
                                <h2 class="text-p-left">
                                    <b>FASE CONSCIENTE</b>
                                </h2>
                            </div>
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

	.outer,
	.inner,
	.bg {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		box-sizing: border-box; /* Incluye el padding en el tamaño total del elemento */
	}

	.row {
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
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


    .text-p-left {
		font-size: 2.5rem;
		color: #000;
		margin-top: 30px;
        text-align: left;
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
		align-items: center; /* Alinea el contenido verticalmente en el centro */
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

	.split-left h2,
	.split-right h2 {
		font-size: clamp(1.5rem, 1vw, 2rem);
		font-weight: 400;
		letter-spacing: 0.2em;
		color: #000;
		margin: 0;
	}



	@media (max-width: 768px) {
		.split-left,
		.split-right {
			flex-direction: column; /* Coloca el texto encima de la imagen en pantallas pequeñas */
			align-items: center; /* Centra el contenido horizontalmente en pantallas pequeñas */
			width: 100%; /* Cada div ocupa el 100% del ancho en pantallas pequeñas */
			margin-bottom: 10px; /* Espacio entre los divs */
			text-align: center; /* Centra el texto en pantallas pequeñas */
		}

		.split-left h2,
		.split-right h2 {
			margin-bottom: 10px; /* Espacio entre el texto y la imagen en pantallas pequeñas */
			margin-right: 0; /* Elimina el margen derecho en pantallas pequeñas */
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
				font-size: 1.5rem;
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
