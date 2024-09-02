<script lang="ts">
    import { base } from '$app/paths';
</script>

<footer class="footer">
    <div class="footer-content">
      
        <div class="footer-row info-row">
            <div class="column contact-info">
                <h4>Contacto:</h4>
                <h4>Calle mayor 25, 07010, Palma de Mallorca</h4>
                <h4>info@sedandpsico.com</h4>
            </div>
            <div class="column about-info">
                <div>Acerca de nosotros</div>
                <div>Quienes somos</div>
                <div>Portfolio</div>
            </div>
            
            <input type="email" placeholder="Tu correo electrónico" class="input input-bordered w-full max-w-xs" />

            <button class="image-button">
                <img src="../content/contact-button.png" alt="Enviar" />
                <span class="button-text">SUBSCRIBIR</span>
            </button>


        </div>
    </div>
</footer>

<style lang="scss">
.footer {
    background-color: #fff;
    position: fixed; /* Fija el footer en la parte inferior */
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 10; /* Asegura que el footer esté por encima de otros contenidos */
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1em 0;
}

.footer-content {
    width: 100%;
    max-width: 1200px; /* Ajusta el ancho máximo según tus necesidades */
    padding: 0 1em;
}

.footer-row {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1em;
}



.image-button {
    position: relative; /* Posiciona los elementos de forma relativa para superponer el texto */
    border: none; /* Elimina el borde del botón */
    padding: 0; /* Elimina el padding por defecto */
    background: none; /* Elimina el fondo por defecto */
    cursor: pointer; /* Cambia el cursor para indicar que es un botón */
}

.image-button img {
    display: block; /* Elimina el espacio inferior alrededor de la imagen */
    width: 60%; /* Asegura que la imagen ocupe el 100% del botón */
    height: auto; /* Mantiene la proporción de la imagen */
}



.info-row {
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: 1em;
}

.column {
    flex: 1;
    padding: 0 1em;
}

.contact-info,
.about-info {
    text-align: center;
}



@media (min-width: 768px) {
    .footer-row {
        flex-direction: row;
    }

    .column {
        text-align: left;
    }
   
}

@media (max-width: 768px) {
    .footer-row {
        flex-direction: column;
    }

    .info-row {
        flex-direction: column;
        align-items: center;
    }
    .footer{
        display: none;
    }
}

</style>