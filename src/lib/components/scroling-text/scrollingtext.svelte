<script lang="ts">
    import { onMount } from 'svelte';
    import gsap from 'gsap';
  
    export let messages = [];
    export let duration = 60; // Duración de la animación
  
    let pointElements = [];
  
    onMount(() => {
      pointElements = Array.from(document.querySelectorAll(".nav-dot"));
  
      const totalWidth = 100 * (messages.length - 1);
  
      // Configura la animación de GSAP
      gsap.to(".scroll-text", {
        xPercent: -totalWidth,
        duration: duration,
        ease: "none",
        repeat: -1,
        scrollTrigger: {
          trigger: ".scroll-container",
          scrub: true,
          pin: true,
          onUpdate: (self) => {
            const progress = self.progress;
            const currentIndex = Math.round(progress * (messages.length - 1));
            updateActivePoint(currentIndex);
          }
        }
      });
  
      // Inicializar el primer punto como activo
      updateActivePoint(0);
    });
  
    function scrollToText(index) {
      const xPercent = -100 * index;
      gsap.to(".scroll-text", {
        xPercent: xPercent,
        duration: 0.5,
        ease: "power2.inOut"
      });
      updateActivePoint(index);
    }
  
    function updateActivePoint(index) {
      pointElements.forEach((point, i) => {
        if (i === index) {
          point.style.backgroundColor = '#000'; // Color para el punto activo
        } else {
          point.style.backgroundColor = '#fff'; // Color para los puntos inactivos
        }
      });
    }
  </script>
  
  <div class="scroll-container">
    <div class="scroll-text">
      {#each messages as { message, user, age }}
        <div class="text-item">
          <p>{message}</p>
          <p>{user}, {age}</p>
        </div>
      {/each}
    </div>
  </div>
  
  <div class="nav-dots">
    {#each messages as _, index}
      <div class="nav-dot" on:click={() => scrollToText(index)}></div>
    {/each}
  </div>
  
  <style lang="scss">
    .scroll-container {
      overflow: hidden;
      white-space: nowrap;
      width: 100%;
      position: relative;
    }
    
    .scroll-text {
      display: flex;
      flex-direction: row;
      color: #000;
    }
    
    .text-item {
      min-width: 100%;
      text-align: center;
      padding: 10px;
      box-sizing: border-box;
    }
  
    .nav-dots {
      display: flex;
      justify-content: center;
      margin-top: 10px;
    }
  
    .nav-dot {
      width: 12px;
      height: 12px;
      background-color: #fff; /* Color de fondo por defecto */
      border: 2px solid #333; /* Borde del punto */
      border-radius: 50%;
      margin: 0 6px;
      cursor: pointer;
      transition: background-color 0.3s, transform 0.3s; /* Cambio de color y tamaño al hacer clic */
    }
  </style>
  