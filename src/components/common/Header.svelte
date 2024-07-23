<script>
	import '../../app.postcss';
	import logo from '$lib/assets/nav-logo.png?enhanced';
	import AnimatedHamburger from './AnimatedHamburger.svelte'
	
	let showMenu = false;
  
	function toggleNavbar() {
	  showMenu = !showMenu;
	}
  </script>
  
  <div>
	<div>
	  <nav
		class="container px-6 py-8 mx-auto md:flex md:justify-between md:items-center"
	  >
		<div class="flex items-center justify-between" style="position: absolute;left: 50%;	transform: translateX(-50%);">
			<a class="text-xl font-bold text-gray-800 md:text-2xl hover:text-blue-400" href="/home">
				<enhanced:img alt="SEXANDPSICO" src={logo} style="max-width:185px" />
			</a>
		  
		</div>
  
		<!-- Mobile Menu open: "block", Menu closed: "hidden" -->
		<div style="display: flex;
		align-items: center;"
		  class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0 {showMenu
			? 'flex'
			: 'hidden'}"
		>
			<a class="text-gray-800 hover:text-blue-400" href="/site/home">HOME</a>
			<a class="text-gray-800 hover:text-blue-400" href="/site/proceso">PROCESO</a>
			<a class="text-gray-800 hover:text-blue-400" href="/site/espacios">ESPACIOS</a>
			<a class="text-gray-800 hover:text-blue-400" href="/site/historia">HISTORIA</a>
		</div>

		<div style="display: flex;
		align-items: center;">
		<a class="text-gray-800 hover:text-blue-400" href="/">CONTACTO</a>
		<AnimatedHamburger  />

		
		</div>
	  </nav>
	</div>
  </div>
  
<slot></slot>