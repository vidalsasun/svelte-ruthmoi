<script lang="ts">
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import Nav from './nav/nav.svelte';
	import RedSection from './sections/red-section.svelte';
	import Experience from './sections/experience.svelte';
	import Reviews from './sections/reviews.svelte';



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
								each: 0.001,
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

<section class="image-section section-pink">
	<div class="image-container">
		<img alt="lying" src="../content/historia_header.jpg" />
	</div>
</section>

<section class="scroll-section section-pink">
	<div class="outer">
		<div class="inner">
			<div class="bg">
				<div class="split-section">
					<div class="split-left">
						<div class="row" style="margin-bottom: 30px;">
                            <h1 class="text-p section-heading">LA BASE DE TODO</h1>
                        </div>

						<div class="row" style="margin-bottom: 30px;">
                            <h2 class="text-p section-heading">DESDE QUE EMPECÉ A EJERCER LA PSICOLOGÍA PRIMERO Y LA SEXOLOGÍA DESPUÉS, ME DI CUENTA DE QUE MIS CLIENTES SÓLO ADMITEN SUS PROBLEMAS SEXUALES CUANDO EL PROCESO TERAPÉUTICO YA ESTÁ MUY AVANZADO.</h2>
                        </div>
						<div class="row" style="margin-bottom: 30px;">
                            <h2 class="text-p section-heading">Y LO PEOR DE TODO, SIEMPRE LO HACEN CON VERGÜENZA, SENTIMIENTOD DE FRACASO E INCLUSO DE CULPA.</h2>
                        </div>
						<div class="row" style="margin-bottom: 30px;">
                            <h2 class="text-p section-heading">PORQUE EN PLENO SIGLO XXI, EL SEXO SIGUE SIENDO UN TABÚ, Y, PARA EMPEORAR LAS COSAS, EXISTE TODA ESA CULTURA ALREDEDOR QUE VENDE COMO NORMALES SITUACIONES TOTALMENTE IDEALIZADAS.</h2>
                        </div>
						<div class="row" style="margin-bottom: 30px;">
                            <h2 class="text-p section-heading">LA REALIDAD ES QUE LA SEXUALIDAD, LEJOS DE SER UN MERO INSTINTO ANIMAL O UN PLACER EFÍMERO, ES UN COMPONENTE FUNDAMENTAL DE NUESTRA EXISTENCIA, UNA FUERZA QUE MOLDEA NUESTRAS RELACIONES, NUESTRA AUTOESTIMA Y NUESTRA PERCEPCIÓN DEL MUNDO QUE NOS RODEA.</h2>
                        </div>
						<div class="row" style="margin-bottom: 30px;">
                            <h2 class="text-p section-heading">DESDE LA DEPRESIÓN HASTA LA FALTA DE MOTIVACIÓN, MUCHOS DE ESTOS PROBLEMAS PUEDEN ESTAR ENTRELAZADOS CON NUESTRA VIVENCIA DE LA SEXUALIDAD, UNA DIMENSIÓN QUE A MENUDO SE PASA POR ALTO EN LOS TRATAMIENTOS CONVENCIONALES.</h2>
                        </div>
                    </div>
					<div class="split-right">

                        <div class="row" style="margin-bottom: 30px;">
                            <h1 class="text-p section-heading">LA DICOTOMÍA</h1>
                        </div><div class="row" style="margin-bottom: 30px;">
                            <h2 class="text-p section-heading">HOY EN DIA, CUANDO TIENES UN PROBLEMA SEXUAL, TIENES DOS OPCIONES: IR AL MÉDICO IO IR AL SEXÓLOGO, Y SI ESTÁS DEPRIMIDO O CON FALTA DE MOTIVACIÓN PUEDES IR AL PSIQUIATRA O AL PSICÓLOGO. DESDE LA MEDICINA Y LA PSIQUIATRÍA TRATAN TU PROBLEMA CON MEDICACIÓPN O CON TÉCNICAS BIOMÉDICAS. DESDE LA SEXOLOGÍA Y LA PSICOLOGÍA TE ENSEÑANRÁN TÉCNICAS Y TE DARÁN PAUTAS PARA QUE CAMBIES TU COMPORTAMIENTO O TE ACOMPAÑARÁN EN EL PROCESO DE EXPRESAR TUS EMOCIONES.</h2>
                        </div><div class="row" style="margin-bottom: 30px;">
                            <h2 class="text-p section-heading">PERO NINGUNO DE ELLOS TE PREGUNTARÁ EN QUÉ OTRAS SITUACIONES DE TU VIDA TE SIENTES IMPOTENTE, O QUE DIFICULTADES TIENES PARA ENCONTRAR EL PLACER EN TU DÍA A DÍA, O SI HAS CONSIDERADO QUE TU DESÁNIMO PUEDE ESTAR RELACIONADO CON COMO ESTÁS VIVIENDO TU SEXUALIDAD.</h2>
                        </div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>


<section class="scroll-section section-pink">
	<div class="outer">
		<div class="inner">
			<div class="bg upper-row">
				<!-- Row 1 -->
				<div class="row" style="margin-bottom: 30px;">
					<h1 class="section-heading">TRATAMOS NUESTRA VIDA SEXUAL COMO SI FUERA UN ACCESORIO INDEPENDIENTE Y NO COMO PARTE INTEGRAL DE NUESTRA VIDA. Y POR ESO VAMOS PONIENDO PARCHES CUANDO NECESITAMOS SOLUCIONES.</h1>
				</div>
				
			</div>
		</div>
	</div>
</section>



<section class="scroll-section section-pink">
	<div class="outer">
		<div class="inner">
			<div class="bg">
				<div class="split-section">
					<div class="split-left">
						<div class="row" style="margin-bottom: 30px;">
                            <h1 class="text-p section-heading">UN NUEVO ENFOQUE</h1>
                        </div>

						<div class="row" style="margin-bottom: 30px;">
                            <h2 class="text-p section-heading">ES HORA DE SUPERAR LA DUALIDAD ENTRE LA MEDICINA Y LA PSICOLOGÍA, ENTRE EL TRATAMIENTO DE LOS SÍNTOMAS Y LA COMPRENSIÓN DE LAS CAUSAS SUBYACENTES.</h2>
                        </div>
						<div class="row" style="margin-bottom: 30px;">
                            <h2 class="text-p section-heading">ES HORA DE RECONOCER QUE LA SEXUALIDAD NO ES UN COMPARTIMENTO ESTANCO DE NUESTRAS VIDAS, SINO UN HILO CONDUCTOR QUE UNE NUESTRAS EXPERIENCIAS, NUESTRA PERSONALIDAD Y NUESTRO ENTORNO SOCIAL.</h2>
                        </div>
						<div class="row" style="margin-bottom: 30px;">
                            <h2 class="text-p section-heading">PORQUE SABEMOS QUE TENEMOS TRES CEREBROS (EL CONGINITIVO, EL EMOCIONAL Y EL INSTINTIVO) Y NO PODEMOS MANEJAR LO QUE NOS OCURRE ATENDIENDO SÓLO A NUESTROS PENSAMIENTOS. TAMBIÉN TENEMOS QUE ATENDER NUESTRAS EMOCIONES Y NUESTRO INSTINTO.</h2>
                        </div>
                    </div>
					<div class="split-right">
                        <div class="row" style="margin-bottom: 30px;">
                            <h2 class="text-p section-heading">EN ESTE CONTEXTO, SURGE EL ENFOQUE DESEO: UNA SÍNTESIS ENTRE LA PSICOLOGÍA Y LA SEXOLOGÍA QUE BUSCA RESTAURAR LA CONEXIÓN PERDIDA CON NUESTRA ENERGÍA VITAL, A TARVÉS DE UN PROCESO INTEGRAL Y HOLÍSTICO, EXPLORAMOS LAS PROFUNDIDADES DE LA MENTE HUMANA, DESDE LAS FANTASÍAS SEXUALES QUE HABITAN EN NUESTRO INCONSCIENTE HASTA LAS CREENCIAS ARRAIGADAS QUE MOLDEAN NUESTRA EXPERIENCIA DEL PLACER Y EL DESEO.</h2>
                        </div><div class="row" style="margin-bottom: 30px;">
                            <h2 class="text-p section-heading">NO SE TRATA SIMPLEMENTE DE RESOLVER PROBLEMAS SEXUALES, SINO DE REDESCUBRIR NUESRTRA IDENTIDAD, NUESTRA AUTOESTIMA Y NUESTRA CAPACIDAD PARA VIVIR UNA VIDA PLENA Y SATISFACTORIA, SE TRATA DE DESCUBRIR NUESTRA PERSONALIDAD SEXUAL.</h2>
                        </div><div class="row" style="margin-bottom: 30px;">
                            <h2 class="text-p section-heading">BIENVENIDO A NUESTRO ENFOQUE DE LA SEXUALIDAD, DONDE EL DESEO NO ES SÓLO UN IMPULSO, SINO UN CAMINO HACIA LA INTEGRIDAD Y EL BIENESTAR, EN ESTE ESPACIO, TE INVITAMOS A EXPLORAR LAS MÚLTIPLES DIMENSIONES DE TU SER, A ENCONTRAR RESPUESTAS DONDE SÓLO HABÍA PREGUNTAS Y A DESCUBRIR EL PODER TRANSFORMADOR DE UNA SEXUALIDAD PLENA Y CONSCIENTE.</h2>
                        </div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<!-- Otra sección con animación de scroll -->
<section class="scroll-section section-white">
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
<section class="scroll-section section-white">
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

	.section-pink {		
        background-color: #e5cac6;       		
	}
	.section-white {		
        background-color: #fff;       		
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
		align-items: flex-start;
	}

	.split-left,
	.split-right {
		@media (min-width: 768px) {
			flex: 1; /* Cada div ocupa el 50% del ancho en pantallas grandes */
		}
		
		display: flex;
		align-items: center; /* Alinea el contenido verticalmente en el centro */
		padding: 20px;
		box-sizing: border-box;
		text-align: left; /* Alinea el texto a la izquierda dentro del div */
		gap: 10px; /* Espacio entre el texto y la imagen */
		flex-wrap: wrap;
		align-content: flex-start;
	}



	
</style>
