const nombre = document.getElementById("txtnombre");
const mostrar = document.getElementById("uno");

nombre.addEventListener("input", mostrarNombre);

function mostrarNombre() {
    if (nombre.value ==""){
        mostrar.innerHTML = "LOREM IPSUM";
    }
    else
    mostrar.innerHTML = `
<p style="color:red">Hola, ${nombre.value}</p>`;
}