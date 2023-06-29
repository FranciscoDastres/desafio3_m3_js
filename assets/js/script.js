
// Selector
let ele = document.getElementById("ele1")

// Funciones
function pintar(elemento, color = 'green'){
    elemento.style.backgroundColor = color
}

ele.addEventListener('mouseover', ()=> {
    pintar(ele)
})

ele.addEventListener("click", () => {
    pintar(ele, 'yellow')
});
