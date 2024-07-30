<script lang="ts">
	
	import { base } from '$app/paths';

	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { Observer } from 'gsap/dist/Observer';

	if (typeof window !== 'undefined') {
		gsap.registerPlugin(ScrollTrigger);
		gsap.registerPlugin(Observer);

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
			const ctx: gsap.Context = gsap.context(() => {

				//NAVBAR
				const open = document.querySelector('.container');
				const close = document.querySelector('.close');
				var tl = gsap.timeline({ defaults: { duration: 0.6, ease: 'expo.inOut' } });
				open.addEventListener('click', () => {
					if (tl.reversed()) {
						tl.play();
					} else {
						tl.to('nav', { right: 0 })
							.to('nav', { height: '100vh' }, '-=.1')
							.to('nav ul li a', { opacity: 1, pointerEvents: 'all', stagger: .2 }, '-=.8')
							.to('.close', { opacity: 1, pointerEvents: 'all' }, "-=.8")
							.to('nav h2', { opacity: 1 }, '-=1');
					}
				});

				close.addEventListener('click', () => {
					tl.reverse();
				});
				////////////////


				let sections = document.querySelectorAll('section'),
					images = document.querySelectorAll('.bg'),
					headings = gsap.utils.toArray<HTMLElement>('.section-heading'),
					outerWrappers = gsap.utils.toArray<HTMLElement>('.outer'),
					innerWrappers = gsap.utils.toArray<HTMLElement>('.inner'),
					currentIndex = -1,
					wrap = gsap.utils.wrap(0, sections.length),
					animating;

				// Divide el texto en caracteres y guarda las referencias
				const splitHeadingsChars = splitTextToChars(headings);

				gsap.set(outerWrappers, { yPercent: 100 });
				gsap.set(innerWrappers, { yPercent: -100 });

				function gotoSection(index, direction) {
					index = wrap(index); // Asegúrate de que sea válido
					animating = true;
					let fromTop = direction === -1,
						dFactor = fromTop ? -1 : 1,
						tl = gsap.timeline({
							defaults: { duration: 1.25, ease: 'power1.inOut' },
							onComplete: () => (animating = false)
						});
					if (currentIndex >= 0) {
						gsap.set(sections[currentIndex], { zIndex: 0 });
						tl.to(images[currentIndex], { yPercent: -15 * dFactor }).set(sections[currentIndex], {
							autoAlpha: 0
						});
					}
					gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });
					tl.fromTo(
						[outerWrappers[index], innerWrappers[index]],
						{
							yPercent: (i) => (i ? -100 * dFactor : 100 * dFactor)
						},
						{
							yPercent: 0
						},
						0
					)
						.fromTo(images[index], { yPercent: 15 * dFactor }, { yPercent: 0 }, 0)
						.fromTo(
							splitHeadingsChars[index],
							{
								// Accede a los caracteres divididos
								autoAlpha: 0,
								yPercent: 150 * dFactor
							},
							{
								autoAlpha: 1,
								yPercent: 0,
								duration: 1,
								ease: 'power2',
								stagger: {
									each: 0.02,
									from: 'random'
								}
							},
							0.2
						);

					currentIndex = index;
				}

				Observer.create({
					type: 'wheel,touch,pointer',
					wheelSpeed: -1,
					onDown: () => !animating && gotoSection(currentIndex - 1, -1),
					onUp: () => !animating && gotoSection(currentIndex + 1, 1),
					tolerance: 10,
					preventDefault: true
				});
				// Desplazamiento automático cada 5 segundos
				setInterval(() => {
                    if (!animating) {
                        gotoSection(currentIndex + 1, 1);
                    }
                }, 6000);

				gotoSection(0, 1);
			});
		});
	}
</script>




<header>
	<div><a href="{base}/"><img alt="SEXANDPSICO" src="nav-logo.png" class="invert-colors" style="width: 88%;"/></a></div>

	<div class="container">
		<div class="bars"></div>
	</div>
	
	<nav>
		<div class="close">
			<div></div>
		</div>
		<ul>
			<li><a href="#">HOME</a></li>
			<li><a href="#">PROCESO</a></li>
			<li><a href="#">ESPACIOS</a></li>
			<li><a href="#">HISTORIA</a></li>
			<li><a href="#">CONTACTO</a></li>
		</ul>
	</nav>
	

</header>
<section class="first">
	<div class="outer">
		<div class="inner">
			<div class="bg one">
				<h2 class="section-heading">DESLIZA</h2>
			</div>
		</div>
	</div>
</section>
<section class="second">
	<div class="outer">
		<div class="inner">
			<div class="bg">
				<h2 class="section-heading">VIVE UNA VIDA ORGÁSMICA</h2>
			</div>
		</div>
	</div>
</section>
<section class="third">
	<div class="outer">
		<div class="inner">
			<!-- <div class="bg">
				<h5 class="section-heading">DESNUDA TUS VERDADEROS DESEOS</h5>
			</div> -->

			<div class="bg">
				<h2 style="color: #000" class="section-heading">DESCUBRE, COMPRENDE Y DISFRUTA TU PERSONALIDAD SEXUAL</h2>
			</div>
		</div>
	</div>
</section>
<section class="fourth">
	<div class="outer">
		<div class="inner">
			<div class="bg">
				<h2 style="color: #fff" class="section-heading">COMPRENDE LO QUE TE GUSTA DE VERDAD Y REDIMENSIONA TU PLACER DENTRO Y FUERA DE LA CAMA</h2>
			</div>
		</div>
	</div>
</section>
<section class="fifth">
	<div class="outer">
		<div class="inner">
			<div class="bg">
				<h2 style="color: #fff" class="section-heading">POTENCIA TU DESEO Y DESCUBRE UNA VIDA SEXUAL MAS CENTRADA EN EL PLACER</h2>
			</div>
		</div>
	</div>
</section>

<section class="sixth">
	<div class="outer">
		<div class="inner">
			<div class="bg">
				<h2 class="section-heading">DISFRUTA DEL SEXO DESDE TU REALIDAD Y OLVÍDATE DE LOS ESTEREOTIPOS IMPUESTOS</h2>
			</div>
		</div>
	</div>
</section>


<style lang="scss">
	@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond&display=swap');

	$bg-gradient: linear-gradient(180deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.3) 100%);

	* {
		box-sizing: border-box;
		user-select: none;
	}

	a {
		color: #fff;
		text-decoration: none;
	}

	body {
		margin: 0;
		padding: 0;
		height: 100vh;
		color: white;
		background: black;
		font-family: 'Cormorant Garamond', serif;
		text-transform: uppercase;
	}

	h2 {
		font-size: clamp(1rem, 5vw, 5rem);
		font-weight: 400;
		text-align: center;
		letter-spacing: 0.2em;
		margin-right: -0.5em;
		color: hsl(0, 0%, 80%);
		width: 90vw;
		max-width: 1200px;
	}

	header {
		position: fixed;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 5%;
		width: 100%;
		z-index: 3;
		height: 7em;
		font-family: 'Bebas Neue', sans-serif;
		font-size: clamp(0.66rem, 2vw, 1rem);
		letter-spacing: 0.5em;
	}

	section {
		height: 100%;
		width: 100%;
		top: 0;
		position: fixed;
		visibility: hidden;

		.outer,
		.inner {
			width: 100%;
			height: 100%;
			overflow-y: hidden;
		}

		.bg {
			display: flex;
			align-items: center;
			justify-content: center;
			position: absolute;
			height: 100%;
			width: 100%;
			top: 0;
			background-size: cover;
			background-position: center;

			h2 {
				z-index: 2;
			}

			.clip-text {
				overflow: hidden;
			}
		}
	}

	.first {
		.bg {
			background-image: $bg-gradient, url('$lib/assets/content/pizza-girl_960.jpg');
		}
	}

	.second {
		.bg {
			background-image: $bg-gradient, url('$lib/assets/content/red-fruit_960.jpg');
		}
	}

	.third {
		.bg {
			/*background-image: $bg-gradient, url('$lib/assets/content/red-purse_960.jpg');*/
			background-color: #e5cac6;
		}
	}

	.fourth {
		.bg {
			background-image: $bg-gradient,
				url('$lib/assets/content/red-purse_960.jpg');
		}
	}

	.fifth {
		.bg {
			background-image: $bg-gradient,
				url('$lib/assets/content/lips-letters_960.jpg');
			background-position: 50% 45%;
		}
	}
	.sixth {
		.bg {
			background-image: $bg-gradient,
				url('$lib/assets/content/pizza-girls_960.jpg');
			background-position: 50% 45%;
		}
	}
	h2 * {
		will-change: transform;
	}

	//CUSTOM
	.invert-colors {
		filter: invert(100%) brightness(2) contrast(0.8);
	}
	//CUSTOM


	* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

body {
	font-family: "Montserrat", sans-serif;
	background: #e9e9e9;
	width: 100%;
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
}

h1 {
	font-size: 40px;
  text-align: center;
}

.container{
	cursor: pointer;
	position: absolute;
	right: 5%;
	width: 30px;
	height: 20px;
}

.bars{
	width: 30px;
	height: 4px;
	background: #000;
}

.bars::before,
.bars::after{
	content: '';
	position: absolute;
	width: 30px;
	height: 4px;
	background: #fff;
}

.bars::before{
	margin-top: 9px;
}

.bars::after{
	margin-top: 18px;
}

nav{
	position: absolute;
	width: 100%;
	height: 30px;
	background: #9e827d;
	top:0vh;
	display: flex;
	justify-content: center;
	align-items: center;
	right: -200vw;
}

nav ul {
	list-style: none;
}

nav ul li{
	margin: 50px 0;
}

nav ul li a{
	color: #fafafa;
	font-size: 2em;
	text-decoration: none;
	font-weight: 500;
	position: relative;
	opacity: 0;
	pointer-events: none;
}

nav ul li a:after{
	content: '';
	width: 100%;
	position: absolute;
	height: 3px;
	border-radius: 5px;
	background: #fff;
	bottom: -10px;
	left: 0;
	transform-origin: left;
	transition: transform .5s ease;
	transform: scaleX(0);
}


nav ul li a:hover:after{
	transform: scaleX(1);
}

nav .close {
	width: 30px;
	height: 30px;
	position: absolute;
	right: 5%;
	cursor: pointer;
	opacity: 0;
	pointer-events: none;
}

nav h2{
	position: absolute;
	left: 5%;
	opacity: 0;
	pointer-events: none;
	color: #fff;
	font-size: 2em;
}

nav .close div::before,
nav .close div::after{
	content: '';
	position: absolute;
	width: 30px;
	height: 4px;
	background: #fff;
	transition: background .5s ease;
}
nav .close div::before{
	transform: rotate(-45deg);
}

nav .close div::after{
	transform: rotate(45deg);
}

nav .close:hover div::before,
nav .close:hover div::after{
	background: #000;
}

@media (max-width: 992px){
  h1{
    font-size: 25px;
  }
}

</style>
