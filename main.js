var hamburguer = document.querySelector(".hamburguesa");
var content = document.querySelector(".links");


hamburguer.addEventListener("click", (e)=> {
    content.classList.toggle("activa");
});