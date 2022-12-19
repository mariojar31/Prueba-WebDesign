/*CARROUSEL*/

var imgCarrousel = ['images/photo.jpg', 'images/niños.jpg', 'images/img3.jpg'];
var cont=0;
const container = document.querySelector('.benefits__content--img');


document.addEventListener("DOMContentLoaded", ()=>{

    setInterval(startInterval,2500);

})


function startInterval(){
    moveCarrousel(container);
}

function moveCarrousel(container){

    imgBenefits = container.querySelector('.imgBenefits');

    if(cont==0){
        imgBenefits.src = imgCarrousel[cont];
        cont++;
        console.log(cont);
    } else if(cont==1){
        imgBenefits.src = imgCarrousel[cont];
        cont++;
        console.log(cont);
    } else if (cont==2){
        imgBenefits.src = imgCarrousel[cont]; 
        cont=0;       
        console.log(cont);
    } 

}

function nextImage(){
    if(cont==2){
        cont=0;
    } else{
        cont++;
    }

    imgBenefits = container.querySelector('.imgBenefits');
    imgBenefits.src = imgCarrousel[cont];
}

function prevImage(){
    if(cont==0){
        cont=2;
    } else{
        cont--;
    }
    imgBenefits = container.querySelector('.imgBenefits');
    imgBenefits.src = imgCarrousel[cont];
}

/*SHOW CONTACT SECTION*/

const contact = document.querySelector('.contact');
var click = 1;

function showContact(){
    if(click==1){
        contact.style.display="block";
        click=0;
    } else{
        contact.style.display="none";
        click=1;
    }
        
}
