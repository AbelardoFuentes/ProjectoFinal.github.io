

let texto_span = document.getElementById("texto_span");
let btn_leer_menos = document.getElementById("btn_leer_menos");
    

    


btn_leer_menos.addEventListener("click", ocultarTexto);

function ocultarTexto() {
    texto_span.classList.remove("mostrar");

    if (texto_span.classList.contains("mostrar")) {
        btn_leer.classList.add("mostrar")
    } else {
        btn_leer.classList.remove("ocultar");
    }
}