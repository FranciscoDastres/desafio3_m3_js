// Selectores
let div1 = document.querySelector('.div1');
let div2 = document.querySelector('.div2');
let div3 = document.querySelector('.div3');
let div4 = document.querySelector('.div4');
let h1Alert = document.querySelector('h1')

// Variable estado
let colorPorDefecto;

document.addEventListener('keydown', (e) => {
    console.log(e.key)
    if (e.key === 'a') {
        colorPorDefecto = 'purple'
    } else if (e.key === 's') {
        colorPorDefecto = 'orange'
    } else if (e.key === 'd') {
        colorPorDefecto = 'pink'
    } else {
        setTimeout(() => {
            h1Alert.innerHTML = `No seleccionaste una opcion valida (a,s,d)`
        }, 1);

        setTimeout(() => {
            h1Alert.innerHTML = ''
        }, 2000);

        colorPorDefecto = 'white'
    }
});


div1.addEventListener('click', () => {
    div1.style.backgroundColor = colorPorDefecto;
});

div2.addEventListener('click', () => {
    div2.style.backgroundColor = colorPorDefecto;
});

div3.addEventListener('click', () => {
    div3.style.backgroundColor = colorPorDefecto;
});

div4.addEventListener('click', () => {
    div4.style.backgroundColor = colorPorDefecto;
});