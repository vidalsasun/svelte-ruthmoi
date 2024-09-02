<script lang="ts">
import ScrollingText from '../scroling-text/scrollingtext.svelte';

const messages = [
		{
			message: 'LOREM IPSUM DOLOR SIT AMET',
			user: 'ANA',
			age: '53 AÑOS'
		},
		{ message: 'SOME OTHER TEXT FOR ANIMATION', user: 'JUAN', age: '30 AÑOS' },
		{ message: 'ANOTHER MESSAGE TO SCROLL', user: 'MARTA', age: '45 AÑOS' }
	];
</script>

<div class="split-section">
    <div class="split-left-boys">
        <ScrollingText {messages} />
    </div>
    <div class="split-right-boys">
        <img class="img-boys" src="../content/boys_960.png" alt="index" />
    </div>
</div>

<style lang="scss">

.split-section {
		display: flex;
		flex-wrap: wrap; /* Permite que los divs se envuelvan en pantallas pequeñas */
		width: 100%;
		box-sizing: border-box;
	}
    .split-left-boys,
	.split-right-boys {
		flex: 1; /* Cada div ocupa el 50% del ancho en pantallas grandes */
		display: flex;
		align-items: center; /* Alinea el contenido verticalmente en el centro */
		justify-content: center; /* Alinea el contenido horizontalmente en el centro */
		padding: 20px;
		box-sizing: border-box;
		text-align: center; /* Alinea el texto al centro dentro del div */
		gap: 10px; /* Espacio entre el texto y la imagen */
		flex-wrap: wrap; /* Permite que el contenido se envuelva en pantallas pequeñas */
		width: 50%;
	}



	.img-boys {
		border-radius: 15px; /* Redondea las esquinas de la imagen */
		width: 100%; /* Asegura que la imagen no se expanda más allá del contenedor */
		height: auto; /* Mantiene la proporción de la imagen */
	}

	/* Estilo específico para pantallas pequeñas */
	@media (max-width: 768px) {
		.split-left-boys,
		.split-right-boys {
			flex-direction: column; /* Apila el contenido verticalmente en pantallas pequeñas */
			align-items: center; /* Centra el contenido horizontalmente */
			width: 100%; /* Cada div ocupa el 100% del ancho en pantallas pequeñas */
			margin-bottom: 10px; /* Espacio entre los divs */
			text-align: center; /* Centra el texto en pantallas pequeñas */
		}	
	}
</style>