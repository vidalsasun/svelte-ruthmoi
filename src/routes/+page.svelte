<script lang="ts">

import row1left from '$lib/assets/content/pizza-girl_960.jpg?enhanced';
	import row1right from '$lib/assets/content/red-fruit_960.jpg?enhanced';
	import row2right1 from '$lib/assets/content/red-purse_960.jpg?enhanced';
	import row2right2 from '$lib/assets/content/lips-letters_960.jpg?enhanced';
	import row2right3 from '$lib/assets/content/pizza-girls_960.jpg?enhanced';
	import row31 from '$lib/assets/content/fruits.jpg?enhanced';
	import row32 from '$lib/assets/content/flexible-girl-red.jpg?enhanced';
	import row33 from '$lib/assets/content/girl-black-and-white.png?enhanced';



import { ClipboardCopy, File, FileSignature, Table } from 'lucide-svelte';
	import BentoGrid from '../components/ui/BentoGrid/BentoGrid.svelte';
	import BentoGridItem from '../components/ui/BentoGrid/BentoGridItem.svelte';

	const items = [
		{
			title: 'The Dawn of Innovation',
			description: 'Explore the birth of groundbreaking ideas and inventions.',
			className: 'md:col-span-2',      
			icon: ClipboardCopy
		},
		{
			title: 'The Digital Revolution',
			description: 'Dive into the transformative power of technology.',
			className: 'md:col-span-1',
			icon: File
		},
		{
			title: 'The Art of Design',
			description: 'Discover the beauty of thoughtful and functional design.',
			className: 'md:col-span-1',
			icon: FileSignature
		},
		{
			title: 'The Power of Communication',
			description: 'Understand the impact of effective communication in our lives.',
			className: 'md:col-span-2',
			icon: Table    
		}
	];



  import HeroParallax from '../components/ui/HelloParallax/HelloParallax.svelte';

const products = [
  {
    title: 'Moonbeam',
    link: 'https://gomoonbeam.com',
    thumbnail: '$../../../lib/assets/content/pizza-girl_960.jpg'
  },
  {
    title: 'Cursor',
    link: 'https://cursor.so',
    thumbnail: '$../../../lib/assets/content/pizza-girl_960.jpg'
  },
  {
    title: 'Rogue',
    link: 'https://userogue.com',
    thumbnail: '$../../../lib/assets/content/pizza-girl_960.jpg'
  },

  {
    title: 'Editorially',
    link: 'https://editorially.org',
    thumbnail: '$../../../lib/assets/content/pizza-girl_960.jpg'
  },
  {
    title: 'Editrix AI',
    link: 'https://editrix.ai',
    thumbnail: '$../../../lib/assets/content/pizza-girl_960.jpg'
  },
  {
    title: 'Pixel Perfect',
    link: 'https://app.pixelperfect.quest',
    thumbnail: '$../../../lib/assets/content/pizza-girl_960.jpg'
  },

  {
    title: 'Algochurn',
    link: 'https://algochurn.com',
    thumbnail: '$../../../lib/assets/content/pizza-girl_960.jpg'
  },
  {
    title: 'Aceternity UI',
    link: 'https://ui.aceternity.com',
    thumbnail: '$../../../lib/assets/content/pizza-girl_960.jpg'
  },
  {
    title: 'Tailwind Master Kit',
    link: 'https://tailwindmasterkit.com',
    thumbnail: '$../../../lib/assets/content/pizza-girl_960.jpg'
  },
  {
    title: 'SmartBridge',
    link: 'https://smartbridgetech.com',
    thumbnail: '$../../../lib/assets/content/pizza-girl_960.jpg'
  },
  {
    title: 'Renderwork Studio',
    link: 'https://renderwork.studio',
    thumbnail: '$../../../lib/assets/content/pizza-girl_960.jpg'
  },

  {
    title: 'Creme Digital',
    link: 'https://cremedigital.com',
    thumbnail: '$../../../lib/assets/content/pizza-girl_960.jpg'
  },
  {
    title: 'Golden Bells Academy',
    link: 'https://goldenbellsacademy.com',
    thumbnail: '$../../../lib/assets/content/pizza-girl_960.jpg'
  },
  {
    title: 'Invoker Labs',
    link: 'https://invoker.lol',
    thumbnail: '$../../../lib/assets/content/pizza-girl_960.jpg'
  },
  {
    title: 'E Free Invoice',
    link: 'https://efreeinvoice.com',
    thumbnail: '$../../../lib/assets/content/pizza-girl_960.jpg'
  }
];  

import { ContainerScrollAnimation } from '../components/ui/ContainerScrollAnimation/index';

	export const users = [
		{
			name: 'Manu Arora',
			designation: 'Founder, Algochurn',
			image: '$../../../lib/assets/content/pizza-girl_960.jpg',
			badge: 'Mentor'
		},
		{
			name: 'Sarah Singh',
			designation: "Founder, Sarah's Kitchen",
			image: '$../../../lib/assets/content/pizza-girl_960.jpg',
			badge: 'Mentor'
		},
		{
			name: 'John Doe',
			designation: 'Software Engineer, Tech Corp',
			image: '$../../../lib/assets/content/pizza-girl_960.jpg',
			badge: 'Mentor'
		},
		{
			name: 'Jane Smith',
			designation: 'Product Manager, Innovate Inc',
			image: '$../../../lib/assets/content/pizza-girl_960.jpg',
			badge: 'Mentor'
		},
		{
			name: 'Robert Johnson',
			designation: 'Data Scientist, DataWorks',
			image: '$../../../lib/assets/content/pizza-girl_960.jpg',
			badge: 'Mentor'
		},
		{
			name: 'Emily Davis',
			designation: 'UX Designer, DesignHub',
			image: '$../../../lib/assets/content/pizza-girl_960.jpg',
			badge: 'Mentor'
		},
		{
			name: 'Michael Miller',
			designation: 'CTO, FutureTech',
			image: '$../../../lib/assets/content/pizza-girl_960.jpg',
			badge: 'Mentor'
		},
		{
			name: 'Sarah Brown',
			designation: 'CEO, StartUp',
			image: '$../../../lib/assets/content/pizza-girl_960.jpg',
		},
		{
			name: 'James Wilson',
			designation: 'DevOps Engineer, CloudNet',
			image: '$../../../lib/assets/content/pizza-girl_960.jpg',
			badge: 'Something'
		},
		{
			name: 'Patricia Moore',
			designation: 'Marketing Manager, MarketGrowth',
			image: '$../../../lib/assets/content/pizza-girl_960.jpg',
			badge: 'Mentor'
		},
		{
			name: 'Richard Taylor',
			designation: 'Frontend Developer, WebSolutions',
			image: '$../../../lib/assets/content/pizza-girl_960.jpg',
		},
		{
			name: 'Linda Anderson',
			designation: 'Backend Developer, ServerSecure',
			image: '$../../../lib/assets/content/pizza-girl_960.jpg',
		},
		{
			name: 'William Thomas',
			designation: 'Full Stack Developer, FullStack',
			image: '$../../../lib/assets/content/pizza-girl_960.jpg',
			badge: 'Badger'
		},
		{
			name: 'Elizabeth Jackson',
			designation: 'Project Manager, ProManage',
			image: '$../../../lib/assets/content/pizza-girl_960.jpg',
			badge: 'Mentor'
		},
		{
			name: 'David White',
			designation: 'Database Administrator, DataSafe',
			image: '$../../../lib/assets/content/pizza-girl_960.jpg',
			badge: 'Advocate'
		},
		{
			name: 'Jennifer Harris',
			designation: 'Network Engineer, NetConnect',
			image: '$../../../lib/assets/content/pizza-girl_960.jpg',
		},
		{
			name: 'Charles Clark',
			designation: 'Security Analyst, SecureIT',
			image: '$../../../lib/assets/content/pizza-girl_960.jpg',
		},
		{
			name: 'Susan Lewis',
			designation: 'Systems Analyst, SysAnalyse',
			image: '$../../../lib/assets/content/pizza-girl_960.jpg',
		},
		{
			name: 'Joseph Young',
			designation: 'Mobile Developer, AppDev',
			image: '$../../../lib/assets/content/pizza-girl_960.jpg',
			badge: 'Mentor'
		},
		{
			name: 'Margaret Hall',
			designation: 'Quality Assurance, BugFree',
			image: '$../../../lib/assets/content/pizza-girl_960.jpg',
			badge: 'Developer'
		}
	];

  import { NavbarMenu, HoveredLink, MenuItem, ProductItem } from '../components/ui/NavbarMenu/index';

let active: string | null = null;

//import { PinContainer } from '../components/ui/ThreeDPin/index';

</script>

<!-- <div class="flex h-[40rem] w-full items-center justify-center">
	<PinContainer title="/aceternity.sveltekit.io" href="https://aceternity.sveltekit.io">
		<div
			class="flex h-[20rem] w-[20rem] basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2"
		>
			<h3 class="!m-0 max-w-xs !pb-2 text-base font-bold text-slate-100">Aceternity UI</h3>
			<div class="!m-0 !p-0 text-base font-normal">
				<span class="text-slate-500">
					Customizable Tailwind CSS and Framer Motion Components.
				</span>
			</div>
			<div
				class="mt-4 flex w-full flex-1 rounded-lg bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500"
			/>
		</div>
	</PinContainer>
</div> -->
<div class="relative flex w-full items-center justify-center">
	<div class={'fixed inset-x-0 top-12 z-50 mx-auto max-w-2xl'}>
		<NavbarMenu>
			<MenuItem {active} item="Services">
				<div class="flex flex-col space-y-4 text-sm">
					<HoveredLink href="#">Web Development</HoveredLink>
					<HoveredLink href="#">Interface Design</HoveredLink>
					<HoveredLink href="#">Search Engine Optimization</HoveredLink>
					<HoveredLink href="#">Branding</HoveredLink>
				</div>
			</MenuItem>
			<MenuItem {active} item="Products">
				<div class="  grid grid-cols-2 gap-10 p-4 text-sm">
					<ProductItem
						title="Algochurn"
						href="#"
						src="https://images.pexels.com/photos/1031659/pexels-photo-1031659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
						description="Prepare for tech interviews like never before."
					/>
					<ProductItem
						title="Tailwind Master Kit"
						href="#"
						src="https://images.pexels.com/photos/733071/pexels-photo-733071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
						description="Production ready Tailwind css components for your next project"
					/>
					<ProductItem
						title="Moonbeam"
						href="#"
						src="https://images.pexels.com/photos/730424/pexels-photo-730424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
						description="Never write from scratch again. Go from idea to blog in minutes."
					/>
					<ProductItem
						title="Rogue"
						href="#"
						src="https://images.pexels.com/photos/745243/pexels-photo-745243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
						description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
					/>
				</div>
			</MenuItem>
			<MenuItem {active} item="Pricing">
				<div class="flex flex-col space-y-4 text-sm">
					<HoveredLink href="#">Hobby</HoveredLink>
					<HoveredLink href="#">Individual</HoveredLink>
					<HoveredLink href="#">Team</HoveredLink>
					<HoveredLink href="#">Enterprise</HoveredLink>
				</div>
			</MenuItem>
		</NavbarMenu>
	</div>
	<p class="text-black dark:text-white">The Navbar will show on top of the page</p>
</div>



<div class="flex flex-col overflow-hidden">
	<ContainerScrollAnimation {users}>
		<h2 slot="titleComponent" class="text-4xl font-semibold text-black dark:text-white">
			Unleash the power of <br />
			<span class="mt-1 text-4xl font-bold leading-none md:text-[6rem]"> Scroll Animations </span>
		</h2>
	</ContainerScrollAnimation>
</div>



<div class="container mx-auto w-[80vw] lg:w-[60vw]">
	<HeroParallax {products} />
</div>

<BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
	{#each items as item, i (i)}
		<BentoGridItem title={item.title} description={item.description} className={item.className}>
			<div
				slot="header"
				class="flex h-full min-h-[6rem] w-full flex-1 rounded-xl border border-transparent bg-neutral-100 bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] dark:border-white/[0.2] dark:bg-black dark:bg-dot-white/[0.2]"
			></div>
			<svelte:component this={item.icon} slot="icon" class="h-4 w-4 text-neutral-500" />
		</BentoGridItem>
	{/each}
</BentoGrid>


<section>
<div class="container h-full mx-auto flex justify-center items-center">
	<div class="text-center flex flex-col items-center">
		<div class="row row-1">
			<div class="col">
				<enhanced:img class="rounded-corners" alt="SEXANDPSICO" src={row1left} />
			</div>
			<div class="col">
				<enhanced:img class="rounded-corners" alt="SEXANDPSICO" src={row1right} />
			</div>
		</div>

		<!-- Row 2 -->
		<div class="row row-2">
			
				<div class="col rounded-corners border-blocks" style="background-color: #e5cac6;">
					<h1>COMPRENDE Y DISFRUTA TU PERSONALIDAD SEXUAL</h1>
				</div>
			

			<div class="col col-2">
				
					<div class="sub-col">
						<enhanced:img
							class="rounded-corners img-top-height"
							alt="SEXANDPSICO"
							src={row2right1}
						/>
					</div>
			

			
					<div class="sub-col">
						<enhanced:img
							class="rounded-corners img-top-height"
							alt="SEXANDPSICO"
							src={row2right2}
						/>
					</div>
					<div class="sub-col">
						<enhanced:img
							class="rounded-corners img-top-height"
							alt="SEXANDPSICO"
							src={row2right3}
						/>
					</div>
			</div>
		</div>

		<!-- Row 3 -->
		<div class="row row-3">
			<div class="col">
				<enhanced:img class="rounded-corners img-top-height" alt="SEXANDPSICO" src={row31} />
			</div>
			<div class="col">
				<enhanced:img class="rounded-corners img-top-height" alt="SEXANDPSICO" src={row32} />
			</div>
			<div class="col">
				<enhanced:img class="rounded-corners img-top-height" alt="SEXANDPSICO" src={row33} />
			</div>
		</div>

		<!-- Row 4 -->
		<div class="row row-4">
			<div class="col">
				<enhanced:img class="rounded-corners" alt="SEXANDPSICO" src={row2right1} />
			</div>
			<div class="col">
				<enhanced:img class="rounded-corners" alt="SEXANDPSICO" src={row2right1} />
			</div>
			<div class="col">
				<enhanced:img class="rounded-corners" alt="SEXANDPSICO" src={row2right1} />
			</div>
		</div>

		<!-- Row 5 -->
		<div class="row">
			<div class="col">
				<enhanced:img class="rounded-corners" alt="SEXANDPSICO" src={row2right1} />
			</div>
		</div>

		<!-- Row 6 -->
		<div class="row row-6">
			<div class="col">
				<enhanced:img class="rounded-corners" alt="SEXANDPSICO" src={row2right1} />
			</div>
			<div class="col">
				<enhanced:img class="rounded-corners" alt="SEXANDPSICO" src={row2right1} />
			</div>
		</div>

		<!-- Row 7 -->
		<div class="row">
			<div class="col">
				<enhanced:img class="rounded-corners" alt="SEXANDPSICO" src={row2right1} />
			</div>
		</div>
	</div>
</div>
</section>
<style lang="postcss">
	html,
	body {
		height: 100%;
		margin: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		overflow: hidden;
	}
	.img-top-height {
		/*max-height: 550px;*/
	}
	.container-wrapper {
		height: 80%; /* Ajusta la altura según tus necesidades */
		width: 80%; /* Ajusta el ancho según tus necesidades */
		overflow: auto;
	}

	.container {
		display: grid;
	}

	.row {
		display: grid;
	}

	.row-1,
	.row-2,
	.row-6 {
		grid-template-columns: 1fr 1fr;
	}

	.col{
		border: 1px solid #fff;
	}

	.row-2 .col-2 {
		display: grid;
		grid-template-rows: repeat(3, 1fr);
	}

	.row-3,
	.row-4 {
		grid-template-columns: repeat(3, 1fr);
	}

	@media (max-width: 768px) {
		.row-1,
		.row-2,
		.row-3,
		.row-4,
		.row-6 {
			grid-template-columns: 1fr;
		}

		.row-2 .col-2 {
			grid-template-rows: none;
			grid-template-columns: 1fr;
		}
	}
	figure {
		@apply flex relative flex-col;
	}
	figure svg,
	.img-bg {
		@apply w-64 h-64 md:w-80 md:h-80;
	}
	.img-bg {
		@apply absolute z-[-1] rounded-full blur-[50px] transition-all;
		animation:
			pulse 5s cubic-bezier(0, 0, 0, 0.5) infinite,
			glow 5s linear infinite;
	}
	.rounded-corners {
		border-radius: 0px; /* Ajusta este valor según tus necesidades */
	}
	@keyframes glow {
		0% {
			@apply bg-primary-400/50;
		}
		33% {
			@apply bg-secondary-400/50;
		}
		66% {
			@apply bg-tertiary-400/50;
		}
		100% {
			@apply bg-primary-400/50;
		}
	}
	@keyframes pulse {
		50% {
			transform: scale(1.5);
		}
	}

/* ----------------------------------------------
   * Animations below by Animista on 2020-7-11
   * Licensed under FreeBSD License.
   * See http://animista.net/license for more info. 
   * w: http://animista.net, t: @cssanimista
   * ---------------------------------------------- */
  
   @keyframes -global-scale-in-center {
      0% {
        transform: scale(0);
        opacity: 1;
      }
      100% {
        transform: scale(1);
        opacity: 1;
      }
    }
  
    @keyframes -global-rotate-in-center {
      0% {
        transform: rotate(-360deg);
        opacity: 0;
      }
      100% {
        transform: rotate(0);
        opacity: 1;
      }
    }
  
    @keyframes -global-slide-in-top {
      0% {
        transform: translateY(-1000px);
        opacity: 0;
      }
      100% {
        transform: translateY(0);
        opacity: 1;
      }
    }
  
    @keyframes -global-slide-in-fwd-tr {
      0% {
        transform: translateZ(-1200px) translateY(-700px) translateX(500px);
        opacity: 0;
      }
      100% {
        transform: translateZ(0) translateY(0) translateX(0);
        opacity: 1;
      }
    }
  
    @keyframes -global-slide-in-elliptic-top-fwd {
      0% {
        transform: translateY(-600px) rotateX(-30deg) scale(0);
        transform-origin: 50% 100%;
        opacity: 0;
      }
      100% {
        transform: translateY(0) rotateX(0) scale(1);
        transform-origin: 50% 1400px;
        opacity: 1;
      }
    }
  
    @keyframes -global-roll-in-left {
      0% {
        transform: translateX(-800px) rotate(-540deg);
        opacity: 0;
      }
      100% {
        transform: translateX(0) rotate(0deg);
        opacity: 1;
      }
    }
  
    @keyframes -global-roll-in-blurred-left {
      0% {
        transform: translateX(-1000px) rotate(-720deg);
        filter: blur(50px);
        opacity: 0;
      }
      100% {
        transform: translateX(0) rotate(0deg);
        filter: blur(0);
        opacity: 1;
      }
    }
  
    @keyframes -global-tilt-in-fwd-tr {
      0% {
        transform: rotateY(20deg) rotateX(35deg) translate(300px, -300px)
          skew(-35deg, 10deg);
        opacity: 0;
      }
      100% {
        transform: rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg);
        opacity: 1;
      }
    }
  
    @keyframes -global-swing-in-top-fwd {
      0% {
        transform: rotateX(-100deg);
        transform-origin: top;
        opacity: 0;
      }
      100% {
        transform: rotateX(0deg);
        transform-origin: top;
        opacity: 1;
      }
    }
  
    @keyframes -global-puff-in-center {
      0% {
        transform: scale(2);
        filter: blur(4px);
        opacity: 0;
      }
      100% {
        transform: scale(1);
        filter: blur(0px);
        opacity: 1;
      }
    }
  
    @keyframes -global-fade-in {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  
    /* EXITS */
    @keyframes -global-scale-out-center {
      0% {
        transform: scale(1);
        opacity: 1;
      }
      100% {
        transform: scale(0);
        opacity: 1;
      }
    }
  
    @keyframes -global-rotate-out-center {
      0% {
        transform: rotate(0);
        opacity: 1;
      }
      100% {
        transform: rotate(-360deg);
        opacity: 0;
      }
    }
  
    @keyframes -global-rotate-out-2-cw {
      0% {
        transform: rotate(0);
        opacity: 1;
      }
      100% {
        transform: rotate(45deg);
        opacity: 0;
      }
    }
  
    @keyframes -global-swirl-out-bck {
      0% {
        transform: rotate(0) scale(1);
        opacity: 1;
      }
      100% {
        transform: rotate(-540deg) scale(0);
        opacity: 0;
      }
    }
  
    @keyframes -global-flip-out-hor-top {
      0% {
        transform: rotateX(0);
        opacity: 1;
      }
      100% {
        transform: rotateX(70deg);
        opacity: 0;
      }
    }
  
    @keyframes -global-slide-out-top {
      0% {
        transform: translateY(0);
        opacity: 1;
      }
      100% {
        transform: translateY(-1000px);
        opacity: 0;
      }
    }
  
    @keyframes -global-slide-out-fwd-center {
      0% {
        transform: translateZ(1);
        opacity: 1;
      }
      100% {
        transform: translateZ(600px);
        opacity: 0;
      }
    }
  
    @keyframes -global-slide-out-elliptic-top-bck {
      0% {
        transform: translateY(0) rotateX(0) scale(1);
        transform-origin: 50% 1400px;
        opacity: 1;
      }
      100% {
        transform: translateY(-600px) rotateX(-30deg) scale(0);
        transform-origin: 50% 100%;
        opacity: 1;
      }
    }


</style>
