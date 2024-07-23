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
  
<style>
    html, body {
      height: 100%;
      margin: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
    }
  
    .container-wrapper {
      height: 80%; /* Ajusta la altura según tus necesidades */
      width: 80%; /* Ajusta el ancho según tus necesidades */
      overflow: auto;
    }
  
    .container {
      display: grid;
      gap: 1rem;
    }
  
    .row {
      display: grid;
      gap: 1rem;
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
  </style>

<div class="container-wrapper">
  <div class="container px-6 py-8 mx-auto md:flex md:justify-between md:items-center">
    <!-- Row 1 -->
    <div class="row row-1">
      <div class="col"><enhanced:img alt="SEXANDPSICO" src={row1left} /></div>
      <div class="col"><enhanced:img alt="SEXANDPSICO" src={row1right} /></div>
    </div>
  
    <!-- Row 2 -->
    <div class="row row-2">
      <div class="col" style="background-color: #e5cac6;"><h1>COMPRENDE Y DISFRUTA TU PERSONALIDAD SEXUAL</h1></div>
      <div class="col col-2">
        <div class="sub-col"><enhanced:img alt="SEXANDPSICO" src={row2right1} /></div>
        <div class="sub-col"><enhanced:img alt="SEXANDPSICO" src={row2right2} /></div>
        <div class="sub-col"><enhanced:img alt="SEXANDPSICO" src={row2right3} /></div>
      </div>
    </div>
  
    <!-- Row 3 -->
    <div class="row row-3">
      <div class="col"><enhanced:img alt="SEXANDPSICO" src={row31} /></div>
      <div class="col"><enhanced:img alt="SEXANDPSICO" src={row32} /></div>
      <div class="col"><enhanced:img alt="SEXANDPSICO" src={row33} /></div>
    </div>
  
    <!-- Row 4 -->
    <div class="row row-4">
      <div class="col"><enhanced:img alt="SEXANDPSICO" src={row2right1} /></div>
      <div class="col"><enhanced:img alt="SEXANDPSICO" src={row2right1} /></div>
      <div class="col"><enhanced:img alt="SEXANDPSICO" src={row2right1} /></div>
    </div>
  
    <!-- Row 5 -->
    <div class="row">
      <div class="col"><enhanced:img alt="SEXANDPSICO" src={row2right1} /></div>
    </div>
  
    <!-- Row 6 -->
    <div class="row row-6">
      <div class="col"><enhanced:img alt="SEXANDPSICO" src={row2right1} /></div>
      <div class="col"><enhanced:img alt="SEXANDPSICO" src={row2right1} /></div>
    </div>
  
    <!-- Row 7 -->
    <div class="row">
      <div class="col"><enhanced:img alt="SEXANDPSICO" src={row2right1} /></div>
    </div>
  </div>
</div>
  