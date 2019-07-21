// console.log("nanai");
//responsive carousel
const $itemsContainer = document.getElementById('linearContainer');
const $divItems = document.getElementById('linearContainer').children;
const divItemsArray = Array.from($divItems);
let LastItemVisible;
let arrayPositionValues = [];
//cantidad de posiciones de un array
let divsPositionArray=[];
for (let n=0; n < divItemsArray.length; n++){
  divsPositionArray[n]=n
}
// calculos para ajustar el carousel.

function ajustarAPantalla(){
  let containerWidth = $itemsContainer.clientWidth-1;

  for (let n=0; n < divItemsArray.length; n++){
    if (divItemsArray[n].clientWidth === 0){
        LastItemVisible=n;
        break;
    }
  }

  const widthImg = 100;
  let  spareWidth = containerWidth-LastItemVisible*widthImg;
  let marginInitial = spareWidth/(LastItemVisible*2);
  let marginAcumulado=marginInitial;
  //let movimiento= marginInitial*2 + widthImg;
 
  for (let n=0; n < LastItemVisible; n++){
    arrayPositionValues[n]=marginAcumulado;
    $divItems[n].style.left = marginAcumulado + 'px';
    marginAcumulado=marginAcumulado+marginInitial*2+widthImg;
  }
  
}
window.onresize = function() {
  ajustarAPantalla() }
ajustarAPantalla();

const $imgFlechaIzq = document.getElementById('izquierda');
const $imgFlechaDer =  document.getElementById('derecha');

//funciones mover items de array primero hacia la derecha

function moverItemALaDerecha(positionsArray){
  let ultimoAPrimero=positionsArray.pop();
   positionsArray.unshift(ultimoAPrimero);
  return positionsArray
}

function moverItemALaIzquierda(positionsArray){
  let primeroAUltimo = positionsArray.shift();
  positionsArray.push(primeroAUltimo);
  return positionsArray;
}

function entradaAlCarousel(booleano){
  let leftInicial;
  let windowWidth= window.innerWidth;
  booleano ?  
   leftInicial = -windowWidth/12
  :
   leftInicial=windowWidth/(10)*9
  
  return leftInicial;
}

function haciaLaDerecha(){
  let posicionActual = moverItemALaDerecha(divsPositionArray);
  for (let n=0; n < LastItemVisible; n++){
    if (n===0){
      let leftInicial = entradaAlCarousel(true);
      $divItems[posicionActual[n]].style.display = 'inline-block';
      $divItems[posicionActual[n]].style.left = leftInicial + 'px';
      $divItems[posicionActual[LastItemVisible]].style.display= 'none';
      setTimeout(() =>  $divItems[posicionActual[0]].style.left = arrayPositionValues[0] + 'px',100)
    }
    else{
      $divItems[posicionActual[n]].style.left = arrayPositionValues[n] + 'px';      
    }
  }
     
}

function haciaLaIzquierda(){
  let posicionActual = moverItemALaIzquierda(divsPositionArray);
  for (let n=LastItemVisible-1; n >=0 ; n--){
    if (n===LastItemVisible-1){
      let leftInicial = entradaAlCarousel(false);
      $divItems[posicionActual[n]].style.display = 'inline-block';
      $divItems[posicionActual[n]].style.left = leftInicial + 'px';      
      $divItems[posicionActual[posicionActual.length-1]].style.display = 'none';
      setTimeout(() =>  $divItems[posicionActual[n]].style.left = arrayPositionValues[n] + 'px' ,100)
    }
    else{
      $divItems[posicionActual[n]].style.left = arrayPositionValues[n] + 'px';      
    }
  }
}
$imgFlechaDer.addEventListener("click", function(){
  haciaLaDerecha();

})

$imgFlechaIzq.addEventListener("click", function(){
  haciaLaIzquierda();

})