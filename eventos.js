const div = document.getElementById("contenedor")
const boton = document.getElementById("boton")

div.addEventListener ("click", function () {
    if (event.target===boton){
        return;
    } else {
        alert("Hola! Soy el div!")
    }
    
});