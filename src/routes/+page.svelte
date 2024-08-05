<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import Newsstream from '$lib/components/news/newsstream.svelte';
	import DynamicContent from '$lib/components/dynamic-content/dynamic-content.svelte';
	import Nav from '$lib/components/nav/nav.svelte';

	if (typeof window !== 'undefined') {

		onMount(() => {
			const ctx: gsap.Context = gsap.context(() => {
				// Floating div news
				const floatingDiv = document.querySelector('.floating-div');
				const arrowUp = document.getElementById('arrow-up');
				const arrowDown = document.getElementById('arrow-down');
				const header = document.querySelector('header');

				const showContent = () => {
					//gsap.to(floatingDiv, { y: 0, duration: 0.5 });
					gsap.to(floatingDiv, { height: '85vh', duration: 0.5 });
					arrowUp.style.display = 'none';
					arrowDown.style.display = 'block';
				};

				const hideContent = () => {
					gsap.to(floatingDiv, { height: '25vh', duration: 0.5 });
					arrowUp.style.display = 'block';
					arrowDown.style.display = 'none';
				};

				arrowUp.addEventListener('click', showContent);
				arrowDown.addEventListener('click', hideContent);

				// Inicialmente, muestra solo la flecha hacia arriba
				arrowDown.style.display = 'none';

				/////////////////////////
			});
		});
	}
</script>

<Nav />
<DynamicContent />

<div class="floating-div">
	<div class="floating-div-content">
		<div class="arrow" id="arrow-up"><img src="arrow_up_icon.svg" alt="News up" /></div>
		<div class="arrow" id="arrow-down"><img src="arrow_down_icon.svg" alt="News down" /></div>
		<div class="news-content">
			<Newsstream />
		</div>
	</div>
</div>
<style lang="scss">
	body {
		margin: 0;
		padding: 0;
		height: 100vh;
		color: white;
		background: black;
		font-family: 'Cormorant Garamond', serif;
		text-transform: uppercase;
	}

	.floating-div {
		position: fixed;
		bottom: 0;
		overflow-y: hidden;
		width: 100%;
		left: -1px;
		border-radius: 4px;
		height: 25vh;
		background-color: rgba(255, 255, 255, 0.7);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 2;
		@media (min-width: 768px) {
			width: 25%;
			left: 37.5%;
		}
	}

	.floating-div-content {
		width: 100%;
		height: 100%;
		overflow-y: auto;
		text-align: center;
	}

	.arrow {
		cursor: pointer;
		font-size: 2em;
		color: white;
	}


</style>
