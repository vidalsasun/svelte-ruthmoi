<script lang="ts">
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import Nav from './nav/nav.svelte';

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
				const splitRowsChars = rows.map(row => splitTextToChars(row.querySelectorAll('.section-heading')).flat());

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
			sections.forEach(section => {
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
							end: 'bottom top+=100px', // Hasta que el bottom del elemento esté 100px arriba de la parte superior del viewport
							// markers: true // Puedes habilitar los marcadores para depuración
						}
					}
				);
			});
		});
	}
</script>

<Nav />
<section>
	<div class="outer">
		<div class="inner">
			<div class="bg">
				<!-- Row 1 -->
				<div class="row">
					<h3 class="section-heading">MI HISTORIA</h3>
				</div>
				<!-- Row 2 -->
				<div class="row">
					<h2 class="section-heading">LOS ESPACIOS</h2>
				</div>
				<!-- Row 3 -->
				<div class="row description" style="margin-top: 30px;">
					<h3 class="section-heading">NUESTRO OBJETIVO ES QUE CONOZCAS TU PERSONALIDAD SEXUAL PARA QUE DISFRUTES DE TI DENTRO Y FUERA DE LA CAMA, PARA LOGRARLO, TE PROPONEMOS DIFERENTES CAMINOS.</h3>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Sección con animación de scroll -->
<section class="scroll-section">
	<div class="outer">
		<div class="inner">
			<div class="bg">
		
				<div class="grid-container">
					<div class="grid-item">
						<img src="../content/fruits_960.jpg" alt="Descripción de la imagen 1">
						<p>Descripción para la imagen 1.</p>
					</div>
					<div class="grid-item">
						<img src="../content/flexible-girl-red_960.jpg" alt="Descripción de la imagen 2">
						<p>Descripción para la imagen 2.</p>
					</div>
					<div class="grid-item">
						<img src="../content/girl-black-and-white_960.jpg" alt="Descripción de la imagen 3">
						<p>Descripción para la imagen 3.</p>
					</div>
					<div class="grid-item">
						<img src="../content/tent_960.jpg" alt="Descripción de la imagen 4">
						<p>Descripción para la imagen 4.</p>
					</div>
					<div class="grid-item">
						<img src="../content/three-friends_960.jpg" alt="Descripción de la imagen 5">
						<p>Descripción para la imagen 5.</p>
					</div>
					<div class="grid-item">
						<img src="../content/many-fruits_960.png" alt="Descripción de la imagen 6">
						<p>Descripción para la imagen 6.</p>
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
	overflow: hidden;
}

h1 {
	font-size: clamp(1rem, 3vw, 1rem);
	font-weight: 400;
	text-align: center;
	letter-spacing: 0.2em;
	color: #000; /* Cambiado a negro */
	width: 90vw;
	max-width: 1200px;
	margin: 0; /* Elimina márgenes para asegurar centrado vertical */
}

h2 {
	font-size: clamp(1rem, 3vw, 3rem);
	font-weight: 400;
	text-align: center;
	letter-spacing: 0.2em;
	color: #000; /* Cambiado a negro */
	width: 90vw;
	max-width: 1200px;
	margin: 0; /* Elimina márgenes para asegurar centrado vertical */
}
h3 {
	font-size: clamp(1rem, 3vw, 1rem);
	font-weight: 400;
	text-align: center;
	letter-spacing: 0.2em;
	color: #000; /* Cambiado a negro */
	width: 90vw;
	max-width: 1200px;
	margin: 0; /* Elimina márgenes para asegurar centrado vertical */
}

section {
	height: 70vh;
	width: 100%;
	position: relative;
	background-color: #fff;
}

.outer, .inner, .bg {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 70%;
	width: 100%;
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

.section-heading span {
	display: inline-block;
}
.scroll-section {
	padding: 20px;
}

.grid-container {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(2, auto);
	gap: 20px;
	width: 90%;
	max-width: 1200px;
	margin: 0 auto;
}

.grid-item {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
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
	font-size: 1rem;
	color: #333;
}
</style>