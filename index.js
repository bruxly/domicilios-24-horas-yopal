const leftArrow = document.querySelector('.left-arrow');
const rightArrow =  document.querySelector('.right-arrow');
const imageContainer =  document.querySelector('.container-imagenes');




const button = document.querySelector('.button-recuperar-contrasena');




var indexImage = 0;
var step = imageContainer.scrollWidth/imageContainer.children.length;
var LIMIT = imageContainer.scrollWidth - step;














leftArrow.onclick = () => {
    if(indexImage <= 0) return;
    imageContainer.scrollTo(indexImage-=step,0)
}

rightArrow.onclick = () => {
    if(indexImage >= LIMIT) 
    return;

   if(indexImage+step >= LIMIT){
    
        imageContainer.scrollTo(imageContainer.scrollWidth,0)
        return;
    }
  imageContainer.scrollTo(indexImage+=step,0)
}

//rightArrow.addEventListener('click',() => {
  //  if(indexImage >= LIMIT) return;
   // if(indexImage+step >= LIMIT){
     //   imageContainer.scrollTo(imageContainer.scrollWidth,0)
    //    return;
    //}
    //imageContainer.scrollTo(indexImage+=step,0)
//})

button.addEventListener('click', () => {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  alert(`Copie este código: ${randomNumber}`);
});
