var hamburguer = document.querySelector(".hamburguesa");
var content = document.querySelector(".content");
var icon = document.querySelector(".fas")

hamburguer.addEventListener("click", (e)=> {
    content.classList.toggle("activo");
    icon.classList.toggle("fa-times")
});