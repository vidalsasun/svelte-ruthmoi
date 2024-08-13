<script lang="ts">
		import { base } from '$app/paths';

	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import Nav from './nav/nav.svelte';
	import ScrollingText from './scroling-text/scrollingtext.svelte';

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
	const messages = [
		{
			message: 'LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADISCING ELIT',
			user: 'ANA',
			age: '53 AÑOS'
		},
		{ message: 'SOME OTHER TEXT FOR ANIMATION', user: 'JUAN', age: '30 AÑOS' },
		{ message: 'ANOTHER MESSAGE TO SCROLL', user: 'MARTA', age: '45 AÑOS' }
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
											<a href="{base}/" class="button-text">MAS</a>
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
				<div class="split-section">
					<div class="split-left">
						<p class="text-p">18 AÑOS DE EXPERIENCIA</p>
						<img src="../content/arrow-index.png" alt="index" class="arrow-icon" />
					</div>
					<div class="split-right">
						<p class="text-p">MÁS DE 5.000 VIDAS TRANSFORMADAS</p>
						<img src="../content/arrow-index.png" alt="index" class="arrow-icon" />
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
			<div class="split-left-boys">
			  <ScrollingText {messages} />
			</div>
			<div class="split-right-boys">
			  <img class="img-boys" src="../content/boys_960.png" alt="index" />
			</div>
		  </div>
		</div>
	  </div>
	</div>
  </section>

  <section class="scroll-section" style="background-color: #aa0d22;">
	<div class="outer">
		<div class="inner">
			<div class="bg upper-row">
				<!-- Row 1 -->
				<div class="row" style="margin-bottom: 30px;">
					<h3 class="section-heading">NI VANILLA, NI PORNO</h3>
				</div>
				<!-- Row 2 -->
				<div class="row">
					<h2 class="section-heading">SE TRATA DE SEXO REAL</h2>
				</div>
				<!-- Row 3 -->
				<div class="row description" style="margin-top: 30px;">
					<h3 class="section-heading">
						SEX AND PSICO NACE PARA RESOLVER TUS PROBLEMAS SEXUALES DESDE DENTRO: COMPRENDER QUÉ ES LO QUE TÚ REALMENTE DESEAS, QUÉ ESPERAR DE CADA RELACIÓN Y COMO REENFOCAR TU VIDA SEXUAL PARA QUE DISFRUTES AL 100%, SIN ADITIVOS.
					</h3>
				</div>

				<div class="row description" style="margin-top: 30px;">
					<button class="image-button">
						<img src="../content/conocenos.png" alt="Conócenos" />
						<span class="button-text">CONÓCENOS</span>
					</button>
					</div>

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
		margin-right: 10px;
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

	/**/

	.img-boys {
		border-radius: 15px; /* Redondea las esquinas de la imagen */
	}

	.text-p {
		font-size: 1.5rem;
		color: #000;
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

	.arrow-icon {
		width: 20px; /* Ajusta el tamaño de la imagen */
		height: auto; /* Mantiene la proporción de la imagen */
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
	.split-left-boys,
.split-right-boys {
  flex: 1; /* Cada div ocupa el 50% del ancho en pantallas grandes */
  display: flex;
  align-items: center; /* Alinea el contenido verticalmente en el centro */
  justify-content: center; /* Alinea el contenido horizontalmente en el centro */
  padding: 20px;
  box-sizing: border-box;
  text-align: center; /* Alinea el texto al centro dentro del div */
  gap: 10px; /* Espacio entre el texto y la imagen */
  flex-wrap: wrap; /* Permite que el contenido se envuelva en pantallas pequeñas */
}

.split-left-boys h2,
.split-right-boys h2 {
  font-size: clamp(1.5rem, 1vw, 2rem); /* Tamaño del texto adaptativo */
  font-weight: 400;
  letter-spacing: 0.2em;
  color: #000;
  margin: 0;
}

.img-boys {
  border-radius: 15px; /* Redondea las esquinas de la imagen */
  width: 100%; /* Asegura que la imagen no se expanda más allá del contenedor */
  height: auto; /* Mantiene la proporción de la imagen */
}

/* Estilo específico para pantallas pequeñas */
@media (max-width: 768px) {
  .split-left-boys,
  .split-right-boys {
    flex-direction: column; /* Apila el contenido verticalmente en pantallas pequeñas */
    align-items: center; /* Centra el contenido horizontalmente */
    width: 100%; /* Cada div ocupa el 100% del ancho en pantallas pequeñas */
    margin-bottom: 10px; /* Espacio entre los divs */
    text-align: center; /* Centra el texto en pantallas pequeñas */
  }

  .split-left-boys h2,
  .split-right-boys h2 {
    margin-bottom: 10px; /* Espacio entre el texto y la imagen en pantallas pequeñas */
    margin-right: 0; /* Elimina el margen derecho en pantallas pequeñas */
  }
}
/**/

.scroll-container {
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
}

.scroll-text {
  display: flex;
  flex-direction: row;
  will-change: transform; // Mejora el rendimiento de la animación
}

.text-item {
  min-width: 100%;
  text-align: center;
  padding: 10px;
  box-sizing: border-box;
}



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
}





</style>
