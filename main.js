var hamburguer = document.querySelector(".hamburguesa");
var content = document.querySelector(".link-nav");
var icon = document.querySelector(".fas")

hamburguer.addEventListener("click", (e)=> {
    content.classList.toggle("activa");
});