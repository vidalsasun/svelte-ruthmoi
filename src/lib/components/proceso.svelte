<script lang="ts">
	import { base } from '$app/paths';

import { onMount } from 'svelte';
	import gsap from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import Nav from './nav/nav.svelte';
	import RedSection from './sections/red-section.svelte';
	import Experience from './sections/experience.svelte';
	import Reviews from './sections/reviews.svelte';
	
	const fases = [
		{
			title: 'FASE INCONSCIENTE',
			image: '../content/procedimiento-fractal2.png',
			description: 'LAS FANTASÍAS SEXUALES SON UNA ELABORACIÓN MENTAL VIVA QUE SE HA IDO COMPLETANDO Y TRANSFORMANDO A LO LARGO DE TODA TU VIDA, POR ESO, ADEMÁS DE EXCITARTE Y AYUDARTE A LLEGAR AL ORGASMO, SIRVEN PARA COMPRENDER DESDE EL INCONSCIENTE. PARA ESO, EN NUESTRO PROGRAMA EMPEZAMOS EXPLORANDO QUE TIPOS EXISTEN, CÓMO SE HAN FORMADO Y PARA QUÉ SIRVEN, CON EL OBJETIVO DE AYUDARTE A CONECTAR CON TUS VERDADEROS DESEOS.'
		},
		{
			title: 'FASE PRECONSCIENTE',
			image: '../content/procedimiento-fractal3.png',
			description: 'UNA VEZ ENTENDIDO QUÉ SON LAS FANTASÍAS, A PARTIR DE TU PROPIO RELATO ERÓTICO DESCUBRIRÁS TU ARQUETIPO SEXUAL Y CÓMO SE ASOCIA CON TU PERSONALIDAD Y CON TU VIDA. TE PERMITIRÁ SER MÁS CONSCIENTE DE CÓMO TE HAN AFECTADO TUS EXPERIENCIAS Y TRABAJARÁS TUS CREENCIAS ERRÓNEAS.'
		},
		{
			title: 'FASE CONSCIENTE',
			image: '../content/procedimiento-fractal1.png',
			description: 'HAY DOS GRANDES ENEMIGOS DE LA SEXUALIDAD SATISFACTORIA A LOS QUE INEVITABLEMENTE	ESTAMOS EXPUESTOS SOCIALMENTE: LA REPRESIÓN Y LA MITIFICACIÓN. POR UN LADO EL SEXO SIGUEN SIENDO TABÚ Y POR OTRO ESTÁ TOTALMENTE ESTEREOTIPADO Y ROMANTIZADO, COMPRENDER LA DIFERENCIA ENTRE LO QUE ES UNA SEXUALIDAD SATISFACTORIA Y LOS ESTEREOTIPOS SOCIALES ACTUALES HARÁ QUE ESTÉS CON LOS PIES EN LA TIERRA PARA QUE NO TENGAS UNAS EXPECTATIVAS TOTALMENTE IRREALES.'
		}
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
				let rows = gsap.utils.toArray<HTMLElement>('.row, .row-left');
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
				<div class="row-left">
					<b><h3 class="section-heading">EL CÓDIGO DE LA COCREACION</h3></b>
				</div>
				<div class="row-left">
					<h1 class="section-heading">
						SIEMPRE TE HAN DICHO QUE EL SEXO ES ALGO ANIMAL Y UN ELEMENTO DE PLACER AISLADO.
					</h1>
				</div>
				<div class="row-left">
					<h2 class="section-heading">
						LA REALIDAD ES QUE, COMO SERES HUMANOS, NUNCA ESTAREMOS COMPLETOS SI NO ESTAMOS
						SATISFECHOS CON NUESTRA VIDA SEXUAL.
					</h2>
				</div>
				<div class="row-left">
					<h2 class="section-heading">
						POR QUE LOS SERES HUMANOS SOMOS UN ÚNICO SISTEMA, CON LA MISMA BASE BIOQUÍMICA PARA TODO
						Y CUANDO UNO FALLA, TODO FALLA.
					</h2>
				</div>
				<div class="row-left">
					<h2 class="section-heading">
						POR ESO, CUANDO NO ESTÁS SATISFECHO EN LA CAMA, SIEMPRE HAY ALGO QUE FALLA EN TU DÍA A
						DÍA: YA SEA EN LA ESFERA ÍNTIMA, LA PRIVADA, LA SOCIAL O LA LABORAL.
					</h2>
				</div>
				<div class="row-left">
					<h2 class="section-heading">
						CUANDO ERES CAPAZ DE RELACIONAR LO QUE OCURRE EN TU SEXUALIDAD CON TU PERSONALIDAD Y TU
						FORMA DE VIVIR, CON CÓMO AFRONTAS LO QUE PIENSAS, SIENTES Y HACER, ES CUANDO REALMENTE
						ERES CAPAZ DE REDIMENSIONAR EL PLACER, EN LA CAMA Y FUERA DE ELLA.
					</h2>
				</div>

				<div class="row-left">
					<h2 class="section-heading">
						Y ESO SÓLO LO LOGRAS CUANDO DESCUBRES TU <b>PERSONALIDAD SEXUAL.</b>
					</h2>
				</div>
			</div>
		</div>
	</div>
</section>
<div class="img-division">
    <img src="../content/arrow-index.png" alt="index" class="arrow-icon" />
</div>
<section>
	<div class="outer">
		<div class="inner">
			<div class="bg upper-row">
				<div class="row-left">
					<b><h3 class="section-heading">DESEO</h3></b>
				</div>
				<div class="row-left">
					<h1 class="section-heading">
						EL DESEO
					</h1>
				</div>
				<div class="row-left">
					<h2 class="section-heading">
						UNIENDO LOS PRINCIPIOS DE LA PSICOLOGÍA Y LA SEXOLOGÍA, HE CREADO UN PROCESO LLAMADO <b
				>DESEO</b
			>, CUYO ÚNICO OBJETIVO ES AYUDARTE A DESCUBRIR Y DISFRUTAR DE TU ENERGÍA VITAL.
					</h2>
				</div>
				<div class="row-left">
					<h2 class="section-heading">
						PARA LOGRARLO TRABAJAMOS EN TRES FASES
					</h2>
				</div>
				
			</div>
		</div>
	</div>
</section>




<section class="scroll-section">
	<div class="outer">
		<div class="inner">
			<div class="bg">
				<div class="grid-container">
					<!-- Renderiza dinámicamente las tarjetas a partir del JSON -->
					{#each fases as item}
						<div class="grid-item">
							<!-- Usa las clases de DaisyUI para las tarjetas -->
							<div class="card w-96 bg-base-100 shadow-xl">
								<figure>
									<img src={item.image} alt={item.title} />
								</figure>
								<div class="card-body">
									<div class="card-content">
										<div class="card-text">
											<p class="card-title">{item.title}</p>
											<p>{item.description}</p>
										</div>
										
									</div>
								</div>
							</div>
						</div>
					{/each}
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
		justify-content: center;
		text-align: center;
		margin: 0;
		width: 100%;
	}
	.row-left {
		display: flex;
		align-items: flex-start;
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
	.grid-container {
		display: grid;
		grid-template-columns: repeat(1, 1fr); /* 1 columna en móviles */
		grid-template-rows: repeat(auto-fill, minmax(200px, 1fr)); /* Ajusta la altura de las filas */
		gap: 20px;
		margin: 0 auto;

		@media (min-width: 768px) {
			grid-template-columns: repeat(3, 1fr); /* 3 columnas en pantallas grandes */
		}
	}
	.section-heading {
		margin-bottom: 10px;
	}
	.arrow-icon {
		width: 30px; /* Ajusta el tamaño de la imagen */
		height: auto; /* Mantiene la proporción de la imagen */
		margin-top: 7px;
	}
	.img-division{
		display: flex;
		justify-content: center;
	}
</style>
