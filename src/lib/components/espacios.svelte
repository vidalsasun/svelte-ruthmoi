<script lang="ts">
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import Nav from './nav/nav.svelte';

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
						opacity: 0,
						y: 100
					},
					{
						opacity: 1,
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
					<h3 class="section-heading">MI HISTORIA</h3>
				</div>
				<!-- Row 2 -->
				<div class="row">
					<h2 class="section-heading">LOS ESPACIOS</h2>
				</div>
				<!-- Row 3 -->
				<div class="row description" style="margin-top: 30px;">
					<h3 class="section-heading">
						NUESTRO OBJETIVO ES QUE CONOZCAS TU PERSONALIDAD SEXUAL PARA QUE DISFRUTES DE TI DENTRO
						Y FUERA DE LA CAMA, PARA LOGRARLO, TE PROPONEMOS DIFERENTES CAMINOS.
					</h3>
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
										<div class="card-action">
											<a href="/" class="button-text">MAS</a>
											<button class="image-button">
												<img src="../content/arrow-submit.png" alt="Más" />
											</button>
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
				<h2>Sección de Scroll 2</h2>
				<p>Contenido para la segunda sección animada al hacer scroll.</p>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	body {
		margin: 0;
		padding: 0;
		height: 100vh;
		color: #000;
		background: #fff;
		font-family: 'Cormorant Garamond', serif;
		text-transform: uppercase;
		overflow-x: hidden; /* Oculta el desbordamiento horizontal */
	}
	h1 {
		font-size: clamp(1rem, 2vw, 2rem); /* Ajusta los valores según sea necesario */
		font-weight: 400;
		text-align: center;
		letter-spacing: 0.2em;
		color: #000;
		width: 90vw;
		max-width: 1200px;
		margin: 0;
	}

	h2 {
		font-size: clamp(1.5rem, 4vw, 4rem); /* Ajusta los valores según sea necesario */
		font-weight: 400;
		text-align: center;
		letter-spacing: 0.2em;
		color: #000;
		width: 90vw;
		max-width: 1200px;
		margin: 0;
	}

	h3 {
		font-size: clamp(1rem, 3vw, 2rem); /* Ajusta los valores según sea necesario */
		font-weight: 400;
		text-align: center;
		letter-spacing: 0.2em;
		color: #000;
		width: 90vw;
		max-width: 1200px;
		margin: 0;
	}
	.upper-row {
		margin-top: 50px;
		margin-bottom: 50px;
		height: 500px;
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
	.card-title {
		font-size: 1.5rem;
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
	.section-heading span {
		display: inline-block;
	}
	.scroll-section {
		padding: 20px;
	}
	.button-text {
		font-weight: bold;
		font-size: 1.5rem;
		margin-right: 5px;
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
		color: #333;
	}

	.btn-primary {
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
		color: #333;
	}
</style>
