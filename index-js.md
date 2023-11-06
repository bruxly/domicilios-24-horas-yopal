const leftArrow = document.querySelector('.left-arrow');
const rightArrow =  document.querySelector('.right-arrow');
const imageContainer =  document.querySelector('.container-imagenes');

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





/*******************************************************************************/

codigo recuperar contraseña
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Recuperar Contraseña</title>

    <link rel="stylesheet" href="./recuperar-contraseña.css">

</head>
<body>
    <div class="login">
        <div class="form-container">
            <img src="/proyecto/inicio-autenticacion/logo-domicilio-.png" alt="logo" class="logo">

           
        
            <form action="#" class="form">
                <label for="email" class="label">Ingrese su correo</label>

                <input type="text" id="email" placeholder="correo@hotmail.com" class="input input-email">
                 
            
            </form>

            <a href="">

            <input type="submit" value="Obtener Codigo" class="primary-button login-button">
          
            </a>


            <form action="#" class="form">
                <label for="email" class="label">Ingrese codigo</label>

                <input type="text" id="email" placeholder="copie el codigo" class="input input-email">
                 
            
            </form>

            <a href="http://127.0.0.1:5500/proyecto/recuperar-contrase%C3%B1a/contrase%C3%B1a-nueva.html">

            <input type="submit" value="Siguiente" class="primary-button login-button">
          
            </a>


           
        </div>
    </div>

   
    
    
</body>
</html>