let contractedbar = document.querySelector("#abrir")

let extendido = document.querySelector('.extended')

let contenido = document.querySelectorAll(".contraccion")

contractedbar.addEventListener('click',function(){
    contractedbar.classList.toggle('cerrar')
    extendido.classList.toggle('extendido-ocultar')
    contenido.forEach(function(contenido){
        contenido.classList.toggle('ocultar')
    })
})


//  tengo que bajar la opacidad al contenido y poner width 0 al container

// tengo que sacar la barra que está en la derecha, y hacer girar la que tengo en contracted