<script lang="ts">
    import Footer from './footer/footer.svelte';
    import Nav from './nav/nav.svelte';

    let contactName = "";
    let contactEmail = "";
    let contactMessage = "";
</script>

<Nav />
<section>
    <div class="image-container">
        <div class="image-wrapper">
            <img alt="milk-lips" src="../content/milk-lips_960.jpg" />
        </div>
    </div>
    <div class="content-container">
        <div class="text-section">
            <p>CONTACTA CON NOSOTROS</p>
            <h1>CONTACTO</h1>
        </div>
        <div class="form-section">
            <form method="POST" action="/contacto/nuevo">
                <fieldset>
                    <label>
                        <input type="text" name="contactName" bind:value={contactName} placeholder="NOMBRE" required />
                    </label>
                    <br/>
                    <label>                     
                        <input type="email" name="contactEmail" bind:value={contactEmail} placeholder="EMAIL" required />
                    </label>
                    <br />
                    <label>
                        <textarea name="contactMessage" bind:value={contactMessage} placeholder="MENSAJE" required></textarea>
                    </label>
                    <br/>
                    <button class="image-button">
                        <img src="../content/contact-button.png" alt="Enviar" />
                        <span class="button-text">ENVIAR</span>
                    </button>
                </fieldset>
            </form>
        </div>
    </div>
</section>
<style>
    @media (min-width: 768px) {
        section {
            display: flex;
            flex-direction: column;
            background-color: #e5cac6;
            justify-content: flex-start;
            margin-top: 60px;
            align-items: center;
            min-height: 100vh;
            text-align: center;            
        }
        
        .content-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            width: 70%;
            max-width: 100%;
            padding-left: 20px;
            padding-right: 20px;
            align-items: start;
            margin-top: 75px;
        }
    }
    
    @media (max-width: 768px) {
        section {
            display: flex;
            flex-direction: column;
            background-color: #e5cac6;
            justify-content: flex-start;
            margin-top: 60px;
            align-items: center;
            min-height: 100vh;
            text-align: center;
            margin-top: 70px; /* Espacio para evitar solapamiento con la navegación */
        }

        .content-container {
            display: flex;
            flex-direction: column;
            width: 100%;
            padding: 20px;
            gap: 20px;
           
        }
    }

    .image-container {
        margin-bottom: 5px;
        width: 99%;
        position: relative;
        background-color: #f1dfdf;
        display: flex;
        justify-content: center;
    }

   

    @media (min-width: 768px) {
        .image-wrapper {
        position: relative;
        width: 100%;
        max-width: 400px; /* Ajusta según sea necesario */
    }

    }
    
    @media (max-width: 768px) {
        .image-wrapper {
        position: relative;
        width: 60%;
        max-width: 400px; /* Ajusta según sea necesario */
    }

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
    width: 100%; /* Asegura que la imagen ocupe el 100% del botón */
    height: auto; /* Mantiene la proporción de la imagen */
}




    .image-wrapper::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: radial-gradient(circle, rgba(241, 223, 223, 0) 0%, rgba(241, 223, 223, 1) 70%);
        z-index: 1;
        pointer-events: none;
    }

    .image-wrapper img {
        display: block;
        width: 100%;
        height: auto;
        position: relative;
        z-index: 0;
    }

    .text-section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        color:#000;
    }

  

    @media (min-width: 768px) {
        .text-section h1 {
        font-size: 4rem; /* Tamaño grande */
        margin: 0;
    }

    .text-section p {
        font-size: 1.5rem; /* Tamaño más pequeño */
        margin: 0;
    }

    }
    
    @media (max-width: 768px) {
        .text-section h1 {
        font-size: 2rem; /* Tamaño grande */
        margin: 0;
    }

    .text-section p {
        font-size: 1rem; /* Tamaño más pequeño */
        margin: 0;
    }

    }






    .form-section {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    form {
        width: 100%;
        max-width: 100%; /* Asegura que el formulario use el ancho completo disponible */
    }

    fieldset {
        padding: 5px;
        width: 100%;
        max-width: 90%;
    }

    label {
        display: block;
        margin-bottom: 10px;
    }

    input {
        width: 100%;
        padding: 8px;
        margin-top: 5px;
        background-color: transparent;
        border-bottom: 1px solid black; 
    }

    textarea {
        width: 100%;
        padding: 8px;
        margin-top: 5px;
        background-color: transparent;
        border: 1px solid black; 
        height: 70px;
    }

    button {
        padding: 10px 20px;
        background-color: #007BFF;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }


    input::placeholder,
    textarea::placeholder {
        color: #938988;
        opacity: 1;
    }
</style>
