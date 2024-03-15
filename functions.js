let parrafo = document.getElementById("p");
let btn = document.getElementById("dark-mode");

const maquinadeescribir = (text = "", tiempo = 200, etiqueta = "") => {
    let array_caracteres = text.split("");
    let cont = 0;
    etiqueta.innerHTML = "";
    let escribir = setInterval(function(){
        etiqueta.innerHTML += array_caracteres[cont];
        cont++;
        if(cont == array_caracteres.length){
            clearInterval(escribir);
        }
    }, tiempo)
}

btn.addEventListener("click", () => {
    document.body.classList.toggle('dark');
    btn.classList.toggle("cambios");
})

maquinadeescribir("Hola me llamo Pablo Gutierrez, tengo 17 años y soy desarrollador full-stack Trainee, este es mi portafolio personal, espero que sea agradable a la vista.", 50, parrafo);

