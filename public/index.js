console.log("Hola Mundo desde js");
const brn = document.getElementById("btn");
const box = document.getElementById("box");

const peticionPrincipal = async () => {

    const response = await fetch('http://localhost:3000/');
    const data = await response.json();

    console.log("dataPrueba");

    console.log(data);

    data.forEach((usuario) => {
        box.innerHTML += `<p>${usuario.nombre}</p>
        <p>${usuario.email}</p>`;
    });

}

peticionPrincipal();