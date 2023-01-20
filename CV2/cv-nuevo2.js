let btn_leer = document.getElementById("btn_leer");
let texto_span = document.getElementById("texto_span");

btn_leer.addEventListener("click", act_style);

function act_style() {
    texto_span.classList.add("mostrar");
    btn_leer.classList.add("ocultar");
}