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
				var tl = gsap.timeline({ defaults: { duration: 0.3, ease: 'expo.inOut' } });
				
				open.addEventListener('click', () => {
					if (tl.reversed()) {
						tl.play();
					} else {
						tl.to(open, { rotation: 90, opacity: 0, pointerEvents: 'none' }) // Animación de rotación y desaparición del botón
							.to('nav', { right: '0px' })
							.to('nav', { height: '100vh' })
							.to('nav', { paddingLeft: '5%' })
							.to('nav ul li a', { opacity: 1, pointerEvents: 'all', stagger: 0.1 })
							.to('.close', { opacity: 1, pointerEvents: 'all' });
					}
				});

				close.addEventListener('click', () => {
					tl.reverse().then(() => {
						gsap.to(open, { rotation: 0, opacity: 1, pointerEvents: 'all' }); // Restaura el botón de menú cuando se cierra el menú
					});
				});
				////////////////
			});
		});
	}
</script>


<header class="header">
	<div>
		<a href="{base}/">
			<img alt="SEXANDPSICO" src="{base}/nav-logo.png" style="width: 80%;padding-left: 5%;" /></a
		>
	</div>
	<div class="container">
		<div class="bars"></div>
	</div>
	<nav>
		<div class="close">
			<div></div>
		</div>
		<ul>
			<li><a href="{base}/">HOME</a></li>
			<li><a href="{base}/proceso">PROCESO</a></li>
			<li><a href="{base}/espacios">ESPACIOS</a></li>
			<li><a href="{base}/historia">HISTORIA</a></li>
			<li><a href="{base}/contacto">CONTACTO</a></li>
			<li><a href="{base}/porque">PORQUÉ</a></li>
		</ul>
	</nav>
</header>

<style lang="scss">
	//CUSTOM
	.header{
		background-color: #fff;
		position: fixed; /* Fija la navegación en la parte superior */
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10; /* Asegura que la navegación esté por encima de otros contenidos */
    background-color: #fff; /* Asegura que tenga un fondo si es necesario */
	}

	//CUSTOM


	//NAVBAR
	
	.container {
		cursor: pointer;
		position: absolute;
		right: 5%;
		width: 30px;
		height: 20px;
	}

	.bars {
		width: 30px;
		height: 4px;
		background: #000;
	}

	.bars::before,
	.bars::after {
		content: '';
		position: absolute;
		width: 30px;
		height: 4px;
		background: #000;
	}

	.bars::before {
		margin-top: 9px;
	}

	.bars::after {
		margin-top: 18px;
	}

	nav {
		position: absolute;
		width: 100%;
		height: 30px;
		background: #9e827d;
		top: 0vh;
		display: flex;
		/*justify-content: center;*/
		align-items: center;
		right: -200vw;
	}

	nav ul {
		list-style: none;
	}

	nav ul li {
		margin: 50px 0;
	}

	nav ul li a {
		color: #fafafa;
		font-size: 2em;
		text-decoration: none;
		font-weight: 500;
		position: relative;
		opacity: 0;
		pointer-events: none;
	}

	nav ul li a:after {
		content: '';
		width: 100%;
		position: absolute;
		height: 3px;
		border-radius: 5px;
		background: #fff;
		bottom: -10px;
		left: 0;
		transform-origin: left;
		transition: transform 0.5s ease;
		transform: scaleX(0);
	}

	nav ul li a:hover:after {
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

	nav .close div::before,
	nav .close div::after {
		content: '';
		position: absolute;
		width: 30px;
		height: 4px;
		background: #fff;
		transition: background 0.5s ease;
	}
	nav .close div::before {
		transform: rotate(-45deg);
	}

	nav .close div::after {
		transform: rotate(45deg);
	}

	nav .close:hover div::before,
	nav .close:hover div::after {
		background: #000;
	}

	///////////////////
    /// 
    /// 
    /// 
    
	@media (min-width: 768px) {
		header {
		position: fixed;
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		z-index: 3;
		height: 4em;
		font-family: 'Bebas Neue', sans-serif;
		font-size: clamp(0.66rem, 2vw, 1rem);
		letter-spacing: 0.5em;
	}
	}
	@media (max-width: 768px) {
		header {
		position: fixed;
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		z-index: 3;
		height: 6em;
		font-family: 'Bebas Neue', sans-serif;
		font-size: clamp(0.66rem, 2vw, 1rem);
		letter-spacing: 0.5em;
	}
	}

</style>

