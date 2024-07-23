<script>
    import row1left from '$lib/assets/content/womanizer-toys-ttkdsqltdtg-unsplash.jpg?enhanced';
    import row1right from '$lib/assets/content/charlesdeluvio-64bVu0xAOzY-unsplash.jpg?enhanced';
    import row2right1 from '$lib/assets/content/womanizer-toys-gmFZ0qxd_cg-unsplash.jpg?enhanced';
    import row2right2 from '$lib/assets/content/ian-dooley-VMnOvYo9fVY-unsplash.jpg?enhanced';
    import row2right3 from '$lib/assets/content/womanizer-toys-9HIXiGwifMw-unsplash.jpg?enhanced';
    import row31 from '$lib/assets/content/charlesdeluvio-JtX2OR6bNAE-unsplash.jpg?enhanced';
    import row32 from '$lib/assets/content/pexels-cottonbro-studio-5771281.jpg?enhanced';
    import row33 from '$lib/assets/content/Home 2b-85.png?enhanced';
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="text-center flex flex-col items-center">
		<div class="row row-1">
			<div class="col"><enhanced:img class="rounded-corners" alt="SEXANDPSICO" src={row1left} /></div>
			<div class="col"><enhanced:img class="rounded-corners" alt="SEXANDPSICO" src={row1right} /></div>
		  </div>
		
		  <!-- Row 2 -->
		  <div class="row row-2">
			<div class="col rounded-corners" style="background-color: #e5cac6;"><h1>COMPRENDE Y DISFRUTA TU PERSONALIDAD SEXUAL</h1></div>
			<div class="col col-2">
			  <div class="sub-col"><enhanced:img class="rounded-corners img-top-height" alt="SEXANDPSICO" src={row2right1} /></div>
			  <div class="sub-col"><enhanced:img class="rounded-corners img-top-height" alt="SEXANDPSICO" src={row2right2} /></div>
			  <div class="sub-col"><enhanced:img class="rounded-corners img-top-height" alt="SEXANDPSICO" src={row2right3} /></div>
			</div>
		  </div>
		
		  <!-- Row 3 -->
		  <div class="row row-3">
			<div class="col"><enhanced:img class="rounded-corners img-top-height" alt="SEXANDPSICO" src={row31} /></div>
			<div class="col"><enhanced:img class="rounded-corners img-top-height" alt="SEXANDPSICO" src={row32} /></div>
			<div class="col"><enhanced:img class="rounded-corners img-top-height" alt="SEXANDPSICO" src={row33} /></div>
		  </div>
		
		  <!-- Row 4 -->
		  <div class="row row-4">
			<div class="col"><enhanced:img class="rounded-corners" alt="SEXANDPSICO" src={row2right1} /></div>
			<div class="col"><enhanced:img class="rounded-corners" alt="SEXANDPSICO" src={row2right1} /></div>
			<div class="col"><enhanced:img class="rounded-corners" alt="SEXANDPSICO" src={row2right1} /></div>
		  </div>
		
		  <!-- Row 5 -->
		  <div class="row">
			<div class="col"><enhanced:img class="rounded-corners" alt="SEXANDPSICO" src={row2right1} /></div>
		  </div>
		
		  <!-- Row 6 -->
		  <div class="row row-6">
			<div class="col"><enhanced:img class="rounded-corners" alt="SEXANDPSICO" src={row2right1} /></div>
			<div class="col"><enhanced:img class="rounded-corners" alt="SEXANDPSICO" src={row2right1} /></div>
		  </div>
		
		  <!-- Row 7 -->
		  <div class="row">
			<div class="col"><enhanced:img class="rounded-corners" alt="SEXANDPSICO" src={row2right1} /></div>
		  </div>
		</div>
	</div>


<style lang="postcss">
	html, body {
      height: 100%;
      margin: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
    }
	.img-top-height
	{
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
		animation: pulse 5s cubic-bezier(0, 0, 0, 0.5) infinite,
			glow 5s linear infinite;
	}
	.rounded-corners {
    	border-radius: 15px; /* Ajusta este valor según tus necesidades */
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
</style>
