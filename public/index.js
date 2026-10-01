let data = [];   // inicializamos como array vacío para evitar errores
const btn = document.getElementById("btn");
const box = document.getElementById("box");
const form = document.getElementById("form");

const peticionPrincipal = async () => {
    try {
        const response = await fetch('http://localhost:3000/usuarios');
        data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error al obtener usuarios:", error);
    }
};

btn.addEventListener('click', () => {
    box.innerHTML = '';
    data.forEach((usuario) => {
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="usuarioTarjeta">
            <p>${usuario.nombre}</p>
            <p>${usuario.email}</p>
        </div>
        `;
        box.appendChild(div);
    });
});

btnx.addEventListener('click', () => {
    box.innerHTML = '';
});

form.addEventListener('submit', async (event) => {
    event.preventDefault(); // Evita que el formulario se envíe de la manera tradicional

    const url = 'http://localhost:3000/usuarios';

    const inputNombre = document.getElementById('input_nombre');
    const inputEmail = document.getElementById('input_email');

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nombre: inputNombre.value,
            email: inputEmail.value
        })
    });

    // const usuario = {
    //     nombre: inputNombre.value,
    //     email: inputEmail.value
    // };

    // const response = await fetch(url, {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(usuario)
    // });
    
    // response.status === 201 ? alert('Usuario creado con éxito') : alert('Error al crear usuario');

});
peticionPrincipal();