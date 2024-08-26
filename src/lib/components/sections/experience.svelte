

    <div class="split-left">
        <p class="card-title">18 AÑOS DE EXPERIENCIA</p>
        <img src="../content/arrow-index.png" alt="index" class="arrow-icon" />
    </div>
    <div class="split-right">
        <p class="card-title">MÁS DE 5.000 VIDAS TRANSFORMADAS</p>
        <img src="../content/arrow-index.png" alt="index" class="arrow-icon" />
    </div>




<style lang="scss">
.split-left,
	.split-right {
		flex: 1; /* Cada div ocupa el 50% del ancho en pantallas grandes */
		display: flex;
		align-items: center; /* Alinea el contenido verticalmente en el centro */
		padding: 20px;
		box-sizing: border-box;
		text-align: left; /* Alinea el texto a la izquierda dentro del div */
		gap: 10px; /* Espacio entre el texto y la imagen */
	}

	.split-left {
		justify-content: center; /* Alinea el contenido al principio en pantallas grandes */
	}

	.split-right {
		justify-content: center; /* Alinea el contenido al principio en pantallas grandes */
	}



	.arrow-icon {
		width: 30px; /* Ajusta el tamaño de la imagen */
		height: auto; /* Mantiene la proporción de la imagen */
	}

	@media (max-width: 768px) {
		.split-left,
		.split-right {
			flex-direction: column; /* Coloca el texto encima de la imagen en pantallas pequeñas */
			align-items: center; /* Centra el contenido horizontalmente en pantallas pequeñas */
			width: 100%; /* Cada div ocupa el 100% del ancho en pantallas pequeñas */
			margin-bottom: 10px; /* Espacio entre los divs */
			text-align: center; /* Centra el texto en pantallas pequeñas */
		}	
	}

</style>