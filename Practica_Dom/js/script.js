const parrafo = document.getElementById('parrafo');
const contenedor = document.getElementById('contenedor');
const contenedor2 = document.getElementById('contenedor2');
const btn = document.getElementById('btn');

parrafo.textContent = 'Este es un párrafo modificado desde JavaScript.';
parrafo.style.color = '#00f';
parrafo.style.fontWeight = 'bold';
parrafo.style.fontSize = '20px';

contenedor.style.width = '100px';
contenedor.style.height = '100px';
contenedor.style.borderRadius = '16px';
contenedor.style.marginTop = '20px';
contenedor.style.marginBottom = '20px';

btn.addEventListener('mouseover', () => {
    contenedor.style.backgroundColor = '#00f';
    btn.style.backgroundColor = '#f55';
});

btn.addEventListener('mouseout', () => {
    contenedor.style.backgroundColor = '';
    btn.style.backgroundColor = '';
});

btn.addEventListener('click', () => {
    if (contenedor.style.backgroundColor === '') {
        contenedor.style.backgroundColor = '#00f';
        btn.style.backgroundColor = '#f55';
    } else {
        contenedor.style.backgroundColor = '';
    btn.style.backgroundColor = '';
    }
});

// InnerHTML es para setear contenido HTML dentro de un elemento. Se puede usar para agregar texto, etiquetas HTML, etc.
contenedor2.innerHTML += '<p class="p_cambiado">Este es un párrafo dentro del contenedor 2.</p>';
contenedor2.innerHTML += '<p class="p_cambiado">Este es el 2do párrafo dentro del contenedor 2.</p>';
const nombre = 'Daniel';
contenedor2.innerHTML += `<p class="p_cambiado">Este es el 3er párrafo dentro del contenedor 2 creado por ${nombre}.</p>`;
const obj = {
    id: 1,
    nombre: 'Daniel',
    email: 'daniel@example.com'
}
contenedor2.innerHTML += `<p class="p_cambiado">Este es el 4to párrafo dentro del contenedor 2 creado por ${obj.nombre} de id: ${obj.id}.</p>`; 

obj2 = {
    id: 2,
    nombre: 'Juan',
    email: 'juan@example.com'
}

obj3 = {
    id: 3,
    nombre: 'Pedro',
    email: 'pedro@example.com'
}

const listaObjetos = [obj, obj2, obj3];
listaObjetos.forEach((objeto) => {
    contenedor3.innerHTML += `<p class="p_cambiado">Este es un párrafo dentro del contenedor 2 creado por ${objeto.nombre} de </p>
    <p class="p_cambiado">id: ${objeto.id}.</p>
    <p class="p_cambiado">email: ${objeto.email}.</p>`;
})