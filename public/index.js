let data = [];   // inicializamos como array vacío para evitar errores
const btn = document.getElementById("btn");
const box = document.getElementById("box");

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
            <p>${usuario.nombre}</p> || <p>${usuario.email}</p>
        `;
        box.appendChild(div);
    });
});

btnx.addEventListener('click', () => {
    box.innerHTML = '';
});

peticionPrincipal();