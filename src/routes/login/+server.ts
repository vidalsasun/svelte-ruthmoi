export async function POST({ request }) {
    const formData = await request.formData();
    const name = formData.get('name');
    const email = formData.get('email');

    // Procesar los datos del formulario según sea necesario, por ejemplo, almacenarlos en una base de datos

    // Devolver una respuesta JSON
    return new Response(JSON.stringify({ success: true, name, email }), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
    });
}