import type { RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request }) => {
    try {
        // Obtener los datos del formulario
        
        console.log('1');

        const formData = await request.formData();
        const contactName = formData.get('contactName') as string;
        const contactEmail = formData.get('contactEmail') as string;
        const contactMessage = formData.get('contactMessage') as string;

        console.log('2');

        // Crear el payload para la solicitud de token
        const tokenPayload = new URLSearchParams();
        tokenPayload.append('username', 'admin');
        tokenPayload.append('password', 'adminsexandpsico');

        console.log('3');

        // Obtener el token desde el endpoint
        const tokenResponse = await fetch('https://sexandpsico-fastapi-sqlite-e57bbe1ede4f.herokuapp.com/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'accept': 'application/json'
            },
            body: tokenPayload
        });

        console.log('3');

        if (!tokenResponse.ok) {
            console.error('Error al obtener el token:', tokenResponse.statusText);
            return new Response('Error al obtener el token', { status: 500 });
        }

        const tokenData = await tokenResponse.json();
        const token = tokenData.access_token;
        //return new Response('token: ' + token, { status: 500 });


        console.log(token);

        // Crear el objeto JSON para enviar al endpoint de contactos
        const jsonPayload = {
            name: contactName,
            email: contactEmail,
            message: contactMessage
        };

        // Enviar los datos del contacto con el token de autenticación
        const response = await fetch('https://sexandpsico-fastapi-sqlite-e57bbe1ede4f.herokuapp.com/contacts/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(jsonPayload)
        });

        // Verificar si la solicitud fue exitosa
        if (!response.ok) {
            console.error('Error al enviar los datos:', response.statusText);
            return new Response('Error al enviar los datos: ' + response.statusText, { status: 500 });
        }

        // Redirigir a una página de éxito o mostrar un mensaje de éxito
        return new Response(null, {
            status: 303,
            headers: {
                location: '/gracias' // Cambia esto a la página donde quieras redirigir
            }
        });
    } catch (error) {
        // Manejar errores generales
        console.log('Error en el servidor:', error);
        console.error('Error en el servidor:', error);
        return new Response('Error en el servidor: ' + error, { status: 500 });
    }
};
