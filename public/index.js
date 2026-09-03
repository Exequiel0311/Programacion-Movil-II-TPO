console.log("Hola Mundo desde js");

const peticionPrincipal = async () => {

    const response = await fetch('http://localhost:3000/');
    const data = await response.json();

    console.log(data);
    
}

peticionPrincipal();