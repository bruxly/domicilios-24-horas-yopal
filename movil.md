/*******************  unete a nosotros  *********/
.unete-a-nosotros{
    display: flex;
    flex-direction: column;
    align-items: center; /* Alinea los elementos hijos en el centro verticalmente */
    justify-items: center; /* Alinea los elementos hijos en el centro horizontalmente */
    justify-content: space-between;
    margin-bottom: 150px;
    
}


.unete-a-nosotros p{
    font-size: 20px;
   
   
}
  
  
.unete-a-nosotros-button-p{
   
    padding: 12px 24px;
    font-size: 1rem;
    margin-bottom:15px ;
}



.info {
    min-height: 10vh;/*La propiedad min-height: 10vh hace que el contenedor de grid tenga al menos el mismo alto que la ventana del navegador*/
}


.info-title-parrafo {
   
  
    font-size: 5vw; /* ajusta el tamaño de la letra según el ancho de la pantalla */
   
}


.hero-image{
    max-width: 30%;
  
}




/*aliados premium*/


.aliados-grid{
    display: grid;
    align-items: center;
    justify-items: center;
    margin: auto;
    object-fit: cover; /* Ajuste de las imágenes al contenedor */
    text-align: center;
}


.aliados-grid img{
    height: 100px; /* Alto de las imágenes */
    width: auto; /* Ancho proporcional al alto */
    margin: 10px; /* Margen entre las imágenes */
    border-radius: 50px;
    transition: transform .3s; /* Transición suave del zoom */ 
    justify-content: center; 
    align-items: center; 
    object-fit: cover; /* Ajuste de las imágenes al contenedor */ 
  
}

  


.aliados-title{
    margin-top: -60px;
}


/*                  section aliados comerciales premiun             */

/* Contenedor de las imágenes */




.container-imagenes {
    display: flex;
    width: 100%; /* Ancho del contenedor */
    height: 200px; /* Alto del contenedor */
    overflow-x: scroll; /* Permite el desplazamiento horizontal */
    display: grid; /* Establece el modo de visualización grid */
    grid-auto-flow: column; /* Coloca los elementos en columnas */
    grid-auto-columns: max-content; /* Ajusta el ancho de las columnas al contenido */
    overflow-x: scroll; /* Permite el desplazamiento horizontal */
    overflow-y: hidden; /* Oculta el desplazamiento vertical */
    padding-bottom: 10px; /* Espacio interior por debajo del contenedor */
}
  

/***********************     contenedor de promociones           ************************/

/* Contenedor carrusel */
.foto {
  height: 100px; /* Alto de las imágenes */
  width: 150px; /* Ancho proporcional al alto */
  margin: 5px; /* Margen entre las imágenes */
  border-radius: 20px;
  padding-bottom: 18px;
  
  
}


.container-menu-aliados {
    display: flex; 
    flex-direction: column;
   
    align-items: center;
    justify-items: center;
}



.promociones{

    font-size: 11px;
    margin-left: 10px;
}


/*       flechas         */

.left-arrow, .right-arrow{
    width: 20px;
    height: 20px;
    
}

.left-arrow img, .right-arrow img {
    width: 20px;
    height: 20px;
}

.left-arrow {
    left: 0;
}


/*section de aliados mas visitados, disponibles 24 horas y emprendedores*/

.container-menu-aliados{
    grid-gap: 0px;
}


.contenedor-ul{
    display: flex;
    flex-direction: column;
    align-items: center; /* Alinea los elementos hijos en el centro verticalmente */
    justify-items: center; /* Alinea los elementos hijos en el centro horizontalmente */
    
   
}


.subtitulo-visitados  {
    height: 30px;
    font-size: 15px;
    font-weight: bold;
    margin-top: 0px;
   
}


.contenedor-lista{
    width: 250px;
    height: 300px;
    
    padding: 10px; /* Aumentar el espacio interior de la lista */
    
}


/*          footer          */

.container-body {
    display: flex;
    flex-direction: column;
    align-items: center; /* Alinea los elementos hijos en el centro verticalmente */
    justify-items: center; /* Alinea los elementos hijos en el centro horizontalmente */
    justify-content: space-between;
    
   
}

.columna-1{
    margin-top: 200px;
    text-align: center;
}

/*parrafo de mas informacion*/
.columna-1 .container-footer-p{
    margin-top: -50px;
}


/*parrafo de 24 horas disponibles*/
.titulos-footer-2  h1{
    
    
    margin-top: 30px;
}

/*titulo de contacto*/

.titulos-footer-3  h1{
   
    margin-top: 30px;
   
}


/* section derechos reservados         */
.container-footer{
    display: flex;
    flex-direction: column;
}

.container-footer .copyrigth{
    margin-bottom: 20px;
}

.container-footer .contenedor-footer-information-a{
    margin-bottom: 20px;
}

.contenedor-footer-derechos-a a{
    font-size: 16px;
    
}
  
.contenedor-footer-information-a a{
    font-size: 16px;
    color: black;
}
  