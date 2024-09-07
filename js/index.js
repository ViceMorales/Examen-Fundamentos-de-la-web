let meGusta = document.querySelector('.btn_like1')

meGusta.addEventListener('click', function(){
    let botonLike = document.querySelector('.btn_like1');
    let numeroLike = document.querySelector('.like');
    let aumentaLike = Number(numeroLike.innerText);
    aumentaLike ++;
    numeroLike.innerText = aumentaLike
    })

let meGusta2 = document.querySelector('.btn_like2')

meGusta2.addEventListener('click', function(){
    let botonLike = document.querySelector('.btn_like2');
    let numeroLike = document.querySelector('.like2');
    let aumentaLike = Number(numeroLike.innerText);
    aumentaLike ++;
    numeroLike.innerText = aumentaLike
    })

let meGusta3 = document.querySelector('.btn_like3')

meGusta3.addEventListener('click', function(){
    let botonLike = document.querySelector('.btn_like3');
    let numeroLike = document.querySelector('.like3');
    let aumentaLike = Number(numeroLike.innerText);
    aumentaLike ++;
    numeroLike.innerText = aumentaLike
    })

let meGusta4 = document.querySelector('.btn_like4')

meGusta4.addEventListener('click', function(){
    let botonLike = document.querySelector('.btn_like4');
    let numeroLike = document.querySelector('.like4');
    let aumentaLike = Number(numeroLike.innerText);
    aumentaLike ++;
    numeroLike.innerText = aumentaLike
    })

let cerrarSesion = document.querySelector('.Sesion')

cerrarSesion.addEventListener('click', function(){
    alert ('Sesión cerrada correctamente')
    })

function cambiarFondo(elemento){
    elemento.classList.add('plus');
    }

