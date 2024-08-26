<script lang="ts">
	import { base } from '$app/paths';

	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import Nav from './nav/nav.svelte';
	import RedSection from './sections/red-section.svelte';
	import Experience from './sections/experience.svelte';
	import Reviews from './sections/reviews.svelte';

	const items = [
		{
			title: 'CONSULTORIO SEXUAL',
			image: '../content/fruits_960.jpg',
			description: 'LOREM IPSUM DOLOR SIT AMET'
		},
		{
			title: 'GRUPO DE MUJERES',
			image: '../content/flexible-girl-red_960.jpg',
			description: 'LOREM IPSUM DOLOR SIT AMET'
		},
		{
			title: 'MONOGRÁFICO DE FANTASÍAS NO DESEADAS',
			image: '../content/girl-black-and-white_960.jpg',
			description: 'LOREM IPSUM DOLOR SIT AMET'
		},
		{
			title: 'TALLER DE FANTASIAS',
			image: '../content/tent_960.jpg',
			description: 'LOREM IPSUM DOLOR SIT AMET'
		},
		{
			title: 'MONOGRÁFICO DE FANTASÍAS DESEADAS',
			image: '../content/three-friends_960.jpg',
			description: 'LOREM IPSUM DOLOR SIT AMET'
		},
		{
			title: 'STAGE DE DESCUBRIMIENTO',
			image: '../content/many-fruits_960.png',
			description: 'LOREM IPSUM DOLOR SIT AMET'
		}
	];
	
	if (typeof window !== 'undefined') {
		gsap.registerPlugin(ScrollTrigger);

		function splitTextToChars(elements: NodeListOf<HTMLElement>): HTMLElement[][] {
			return Array.from(elements).map((element) => {
				const text = element.innerHTML;
				element.innerHTML = text
					.split('')
					.map((char) => `<span>${char}</span>`)
					.join('');
				return Array.from(element.querySelectorAll('span'));
			});
		}

		onMount(() => {
			// Animación inicial de carga
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

			// Animación al hacer scroll
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
							start: 'top bottom-=100px', // Cuando el top del elemento llega al 100px desde la parte inferior del viewport
							end: 'bottom top+=100px' // Hasta que el bottom del elemento esté 100px arriba de la parte superior del viewport
							// markers: true // Puedes habilitar los marcadores para depuración
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

<section>
	<div class="outer">
		<div class="inner">
			<div class="bg upper-row">
				<!-- Row 1 -->
				<div class="row" style="margin-bottom: 30px;">
					<b><h3 class="section-heading">MI HISTORIA</h3></b>
				</div>
				<!-- Row 2 -->
				<div class="row">
					<h1 class="section-heading">LOS ESPACIOS</h1>
				</div>
				<!-- Row 3 -->
				<div class="row description" style="margin-top: 30px;">
					<h2 class="section-heading">
						NUESTRO OBJETIVO ES QUE CONOZCAS TU PERSONALIDAD SEXUAL PARA QUE DISFRUTES DE TI DENTRO
						Y FUERA DE LA CAMA, PARA LOGRARLO, TE PROPONEMOS DIFERENTES CAMINOS.
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
					{#each items as item}
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
										<!-- <div class="card-action">
											<a href="{base}/" class="button-text">MAS</a>
											<button class="image-button">
												<img src="../content/arrow-submit.png" alt="Más" />
											</button>
										</div> -->
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
	
	.upper-row {
	
		height: 315px;
	}

	
	.row {
		display: flex;
		align-items: center;
		justify-content: center;
		/*flex: 1;  Asegura que cada fila ocupe todo el espacio disponible */
		text-align: center;
		margin: 0; /* Elimina márgenes */
		width: 100%;
	}
	.nav-container {
		width: 100%;
		position: relative;
		z-index: 10; /* Asegúrate de que el nav esté por encima del contenido */
	}

	.scroll-section {
		padding: 20px;
	}

	.grid-container {
		display: grid;
		grid-template-columns: repeat(1, 1fr); /* 1 columna en móviles */
		grid-template-rows: repeat(auto-fill, minmax(200px, 1fr)); /* Ajusta la altura de las filas */
		gap: 20px;
		max-width: 90%;
		margin: 0 auto;

		@media (min-width: 768px) {
			grid-template-columns: repeat(3, 1fr); /* 3 columnas en pantallas grandes */
		}
	}

	.grid-item {
		display: flex;
		justify-content: center;
		width: 100%; /* Asegura que el item use todo el ancho disponible */
		margin-bottom: 20px;
	}

	.card {
		width: 100%;
		max-width: 100%; /* Evita que la tarjeta se expanda más allá del contenedor */
		display: flex;
		flex-direction: column; /* Permite que el contenido se ajuste verticalmente */
	}

	.card img {
		border-radius: 0.5rem;
		width: 100%; /* Asegura que la imagen se ajuste al ancho de la tarjeta */
		height: auto;
	}

	.card-body {
		display: flex;
		flex-direction: column;
		padding: 10px;
		background-color: #fff;
	}
	.card-content {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
	}
	.card-text {
		flex: 1; /* Toma todo el espacio disponible menos el de la acción */
	}

	.card-action {
		display: flex;
		align-items: center;
		justify-content: flex-end; /* Alinea el enlace "Más" a la derecha */
	}

	.card-title {
		font-size: 1.5rem; /* Tamaño del texto del título */
		margin: 0;
	}

	.card-body p {
		margin: 5px 0;
	}

	.grid-item img {
		width: 100%;
		height: auto;
		object-fit: cover;
		border-radius: 8px;
	}

	.grid-item p {
		text-align: center;
		margin-top: 10px;
		color: #000;
	}

	/**/


	.split-section {
		display: flex;
		flex-wrap: wrap; /* Permite que los divs se envuelvan en pantallas pequeñas */
		width: 100%;
		box-sizing: border-box;
	}

	/**/



	.image-button {
		position: relative; /* Posiciona los elementos de forma relativa para superponer el texto */
		border: none; /* Elimina el borde del botón */
		padding: 0; /* Elimina el padding por defecto */
		background: none; /* Elimina el fondo por defecto */
		cursor: pointer; /* Cambia el cursor para indicar que es un botón */
		margin-top: 45px;
		display: flex;
		justify-content: center;
	}

	.image-button img {
		display: block; /* Elimina el espacio inf1erior alrededor de la imagen */
		width: 60%; /* Asegura que la imagen ocupe el 100% del botón */
		height: auto; /* Mantiene la proporción de la imagen */
	}

	.button-text {
		position: absolute; /* Permite colocar el texto sobre la imagen */
		top: 50%; /* Centra verticalmente el texto */
		left: 30%; /* Centra horizontalmente el texto */
		transform: translate(+20%, -70%); /* Ajusta la posición para centrar exactamente */
		color: #000; /* Cambia el color del texto */
		font-size: 1rem; /* Tamaño del texto */
		font-weight: bold; /* Grosor del texto */
		text-shadow: 1px 1px 2px black; /* Añade sombra al texto para mayor legibilidad */
		pointer-events: none; /* Evita que el texto sea clicable, permitiendo que la imagen actúe como botón */
		margin-right: 10px;
	}

</style>
