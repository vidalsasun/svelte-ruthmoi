<script lang="ts">
	import { useTransform, Motion, useViewportScroll } from 'svelte-motion';
    import { cn } from '../../../lib/utils/cn';
	import { onMount } from 'svelte';

	export let users: {
		name: string;
		designation: string;
		image: string;
		badge?: string;
	}[];

	let containerRef: HTMLDivElement;
	let { scrollYProgress } = useViewportScroll();

	let isMobile: boolean = false;

	onMount(() => {
		const checkMobile = () => {
			isMobile = window.innerWidth <= 768;
		};
		checkMobile();
		window.addEventListener('resize', checkMobile);
		return () => {
			window.removeEventListener('resize', checkMobile);
		};
	});

	const scaleDimensions = () => {
		return isMobile ? [0.7, 0.9] : [1.05, 1];
	};

	$: rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
	$: scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
	$: translate = useTransform(scrollYProgress, [0, 1], [0, -100]);
</script>

<div class="relative flex items-center justify-center px-16" bind:this={containerRef}>
	<div class="relative w-full py-40" style="perspective: 1000px;">
		<Motion
			let:motion
			style={{
				translateY: translate
			}}
		>
			<div use:motion class="div mx-auto max-w-5xl text-center">
				<slot name="titleComponent" />
			</div>
		</Motion>
		<Motion
			let:motion
			style={{
				rotateX: rotate, // rotate in X-axis
				scale,
				boxShadow:
					'0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003'
			}}
		>
			<div
				use:motion
				class="mx-auto -mt-12 h-[30rem] w-full max-w-5xl rounded-[30px] border-4 border-[#6C6C6C] bg-[#222222] p-6 shadow-2xl md:h-[40rem]"
			>
				<div
					class="grid h-full w-full grid-cols-1 gap-4 overflow-hidden rounded-2xl bg-gray-100 p-4 md:grid-cols-3 lg:grid-cols-5"
				>
					{#each users as user, idx (`user-${idx}`)}
						<Motion
							let:motion
							style={{ translateY: translate }}
							whileHover={{
								boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)'
							}}
						>
							<div use:motion class="relative cursor-pointer rounded-md bg-white">
								<div
									class="absolute right-2 top-2 rounded-full bg-white px-2 py-1 text-xs font-bold"
								>
									{user.badge}
								</div>
								<img src={user.image} class="rounded-tl-md rounded-tr-md text-sm" alt="thumbnail" />
								<div class="p-4">
									<h2 class="text-sm font-semibold">{user.name}</h2>
									<h3 class=" text-xs text-gray-500">{user.designation}</h3>
								</div>
							</div>
						</Motion>
					{/each}
				</div>
			</div>
		</Motion>
	</div>
</div>