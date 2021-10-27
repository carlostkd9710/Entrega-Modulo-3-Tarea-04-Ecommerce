/* alert('Bienvenido'); */
window.addEventListener ('load', function(){
    let imgs =[];
    imgs[0]='./imgs/flayer1.jpg';
    imgs[1]='./imgs/flayer2.jpg';

    let indiImg =0;
    let tiempo=1500;
    function actualizaImg(){
        document.slider.src=imgs[indiImg];
        if(indiImg < 1){
            indiImg++;
        }else{
            indiImg=0;
        }
    }

    setInterval(actualizaImg,tiempo);

});

import {boletas} from './data.js'

const card = document.querySelector('#cards')

cargarPelis(boletas)

function cargarPelis(boletas){
    card.innerHTML = ''
    boletas.forEach(data => {
        const item = document.createElement('div')

        item.innerHTML =`
            <div class="col d-flex justify-content-center mb-2 mt-2 ">
                <div class="card shadow mb-1 bg-dark rounded text-white" style="max-width: 18rem;">
                    <h5 class="card-title text-center pt-2">${data.name}</h5>
                    <img src="${data.image}" class="card-img-top" height="300px" alt="${data.name}">
                    <a href="${data.infoFiesta}" class="btn btn-primary">${data.precio}</a>
                    <div class="card-body">
                    <p class="card-text description">${data.description}</p>
                    </div>
                </div>
            </div>
    `
    card.appendChild(item)
    });
}

import {iconos} from './dataIcons.js'
const icon = document.querySelector('#icons')
cargarIconos(iconos)
function cargarIconos(iconos){
    icon.innerHTML=''
    iconos.forEach(dato=>{
        const iconItem = document.createElement('a')
        iconItem.innerHTML = `
                <a class="navbar-brand" href="${dato.url}">
                    <img src="${dato.image}" alt="" width="50" height="24" class="d-inline-block align-text-top">
                </a>
        `
        icon.appendChild(iconItem)
    });
}