<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	//import logo from '$lib/assets/nav-logo.png?enhanced';
	

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<!-- App Shell -->
<AppShell>
<!-- 	<svelte:fragment slot="header">
		<AppBar>
			<div class="flex items-center justify-between" style="position: absolute;left: 50%;	transform: translateX(-50%);">
				<a class="text-xl font-bold text-gray-800 md:text-2xl hover:text-blue-400" href="/home">
					<enhanced:img alt="SEXANDPSICO" src={logo} style="max-width:185px" />
				</a>
			  
			</div>
			<svelte:fragment slot="trail">
				<a class="text-gray-800 hover:text-blue-400" href="/site/home">HOME</a>
			<a class="text-gray-800 hover:text-blue-400" href="/site/proceso">PROCESO</a>
			<a class="text-gray-800 hover:text-blue-400" href="/site/espacios">ESPACIOS</a>
			<a class="text-gray-800 hover:text-blue-400" href="/site/historia">HISTORIA</a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
 -->	
	<slot />
</AppShell>

