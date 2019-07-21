// console.log('todo NANAI'); // TODO PERFECT
 
const $carouselContainer = document.getElementById('carousel_main');
const $bradio = document.getElementById('bradio');
let slideTimer = 6000; //ms
let indice = 1 ;

// function adaptativeHeight(){
//     const $divCarousel = document.querySelector('section div.carousel')
//     const widthVp = window.innerWidth
//     const widhtHeighImgRelation=2.0867
//     let heightDiv =widthVp/widhtHeighImgRelation
//     $divCarousel.style.height = heightDiv;
// }
// adaptativeHeight();


function nextSlide($container, index, $radio) {
    if (index === 0){
        $container.children[$container.childElementCount-1].style.display = 'none';
        $container.children[index].classList.add('fadeIn');        
        $container.children[index].style.display = 'inline-block';
        $radio.children[index].style.background = '#0091a2ff';        
        $radio.children[$radio.childElementCount-1].style.background = 'white';
        }
    else  {
        $container.children[index-1].style.display = 'none'; 
        $container.children[index].classList.add('fadeIn');  
        $container.children[index].style.display = 'inline-block';
        $radio.children[index].style.background ='#0091a2ff';
        $radio.children[index-1].style.background ='white';
    }
};

setInterval( () => { 
    nextSlide($carouselContainer, indice, $bradio);
    indice ++;
    if (indice >= $carouselContainer.childElementCount){
        indice = 0;
    }
    
}, slideTimer);