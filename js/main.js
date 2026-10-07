const botonOscuro = document.getElementById("botonOscuro")
const botonClaro = document.getElementById("botonClaro")
const form = document.getElementById("formulario")

botonOscuro.addEventListener("click", () => {
    form.classList.remove("modo-claro")
    form.classList.add("modo-oscuro")
})

botonClaro.addEventListener("click", () => {
    form.classList.remove("modo-oscuro")
    form.classList.add("modo-claro")
})