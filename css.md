
*{
  font-family: sans-serif;
}


main{
  max-width: 1200px;
  margin: auto;
 

}



/***************************    header      ******************/
.hero {
  display: grid; /* Usa grid para mostrar el elemento como un contenedor de cuadrícula */
  grid-gap: 10px; /* Define el espacio entre las cuadrículas en píxeles */
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Especifica el tamaño (ancho) de cada columna en el diseño de cuadrícula */
  grid-template-rows: auto; /* Especifica el tamaño (alto) de cada fila en el diseño de cuadrícula */
  place-items: center;/*Esta propiedad es una forma abreviada de las propiedades align-items y justify-items, que controlan la alineación en las direcciones de bloque y en línea, respectivamente. Esta propiedad solo funciona en sistemas de diseño como Grid o Flexbox*/
   
}
  

/*section de unase a nosotros*/

.unete-a-nosotros{
  display: flex; /* Define el elemento como un contenedor flexible */ 
  justify-content: space-between; /* Distribuye el espacio entre los elementos hijos */ 
  align-items: center; /* Alinea los elementos hijos en el centro verticalmente */ 
  width: 100%; /* Define el ancho del elemento como el 100% del contenedor padre */ 
  height: 50px; /* Define la altura del elemento como 50px */ 
}

.unete-a-nosotros p{
  font-size: 30px;
  font-family: sans-serif;
  font-weight: bold;
  color: red;
}


.unete-a-nosotros-button-p{
  border: none;
  border-radius: 20px;
  color: #333;
  background-color: #b8fb00;
  
  padding: 12px 24px;
  font-size: 1.5rem;
}

.info {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  align-items: center;
  justify-items: center;
  margin: auto;
}
  
.info-title-parrafo {
  color: #333;
  font-weight: bolder;
  margin-bottom: 24px; 
  font-size: 1.5vw; /* ajusta el tamaño de la letra según el ancho de la pantalla */
  word-wrap: break-word; /* corta las palabras que no caben en una línea */
  white-space: wrap; /* ajusta el texto al contenedor sin dejar espacios en blanco */
  overflow: hidden; /* oculta el contenido que sobrepasa los límites del contenedor */
  text-align: center;
}






.hero-image {
  width: 100%;
 
}

.inf .hero-image {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
 

.button-header{
  border: none;
  border-radius: 20px;
  color: #333;
  background-color: #fb8c00;
  font-weight: bolder;
  padding: 12px 24px;
  font-size: 1.5rem;
    
}



.info-title{
  color: #333;
  font-size: 2.5rem;
  font-weight: bolder;
  margin-bottom: 24px;
  justify-content: center;
  align-items: center;
}

.info-subtitle{
  color: #333;
  font-size: 1.5rem;
  margin-bottom: 24px;
  margin: 0 0.5rem;
  animation: lightSpeedInLeft; /* referring directly to the animation's @keyframe declaration */
  animation-duration: 3s; /* don't forget to set a duration! */
}




/*section de main*/
/*video y aliados comerciales*/



.aliados-comerciales-premium{

  margin: 100px 0;
  align-self: center;/*los itms se alinean si mismos*/
}

/*title*/
.aliados-title{
  color: #333;
  font-family: sans-serif;
  font-weight: bold;
  text-align: center;
  margin-bottom: 50px;  
  font-size: 2rem;
}

.aliados-grid{
  display: flex;
  display: grid;
      
  grid-template-columns:repeat(auto-fit, minmax(75px, 200px));/*de esta forma los elementos se manipulan en el tamaño*/    
  grid-auto-rows: 1fr;     
  gap: 0px;
  object-fit: cover; /* Ajuste de las imágenes al contenedor */ 
  
}

.aliados-grid img{ 
  height: 150px;/*Alto de las imágenes */ 
  width: auto; /* Ancho proporcional al alto */
  margin: 25px; /* Margen entre las imágenes */
  border-radius: 120px; 
  transition: transform .3s; /* Transición suave del zoom */ 
  justify-content: center; 
  align-items: center; 
  object-fit: cover; /* Ajuste de las imágenes al contenedor */ 
}


/*video de presentacion*/
iframe{
  width: 80%;
  height: 80%;  
  padding: auto;
  object-fit: cover;
  grid-area: 1/1/3/3;
    
}

/*aliados comerciales premium*/
.aliados-items{
  max-width: 100%;
  height: auto;
  object-fit: cover; 
  transition: all 0.5s ease-in-out;
    
}

.aliados-items:hover{
  /* Aumenta el tamaño de la imagen en un 20% */
  transform: scale(1.2);
  /* Inclina la imagen 10 grados hacia la derecha */
  transform: skew(10deg);
    
}

/*              estilos del titulo alaidos comerciales*/



a{
  text-decoration: none;
}

.carousel{
 
  width: 100%;
  margin: 0px 0px;
  position: relative;
}

.left-arrow, .right-arrow{
  width: 30px;
  height: 30px;
  background-color: white;
  position: absolute;
  top: 40%;
  margin: 16px;
  cursor: pointer;
  border-radius: 50px;
}

.left-arrow img, .right-arrow img {
  width: 30px;
  height: 30px;
}

.left-arrow {
  left: 20px;
}
.right-arrow{
  right: 0;
}




/***********************     contenedor de promociones           ************************/

/* Contenedor carrusel */
.container-imagenes { 
  display: flex;
  width: 100%; /* Ancho del contenedor */ 
  height: 300px; /* Alto del contenedor */ 
  overflow-x: scroll; /* Permite el desplazamiento horizontal */
  display: grid; /* Establece el modo de visualización grid */ 
  grid-auto-flow: column; /* Coloca los elementos en columnas */ 
  grid-auto-columns: min-content; /* Ajusta el ancho de las columnas al contenido */ 
  /*overflow-x: scroll; /* Permite el desplazamiento horizontal */ 
  overflow-y: hidden; /* Oculta el desplazamiento vertical */ 
  padding-bottom: 50px; /* Espacio interior por debajo del contenedor */
}

.container-imagenes::-webkit-scrollbar{
  display: none;
}



/* Estilo de las imágenes */
.foto {
  display: flex;
  height: 200px; /* Alto de las imágenes */
  width: 300px; /* Ancho proporcional al alto */
  margin: 25px; /* Margen entre las imágenes */
  border-radius: 20px;
  transition: transform .3s; /* Transición suave del zoom */

}

.promociones{
  margin-left: 30px;
}





/*section de aliados mas visitados, disponibles 24 horas y emprendedores*/

.container-menu-aliados {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  align-items: center;
  justify-items: center;
  margin-bottom: 30px;
}

.subtitulo-visitados  {
  font-size: 20px;
  font-family: sans-serif;
  font-weight: bold;
  margin-bottom: 10px;
  margin-top: 50px;
}



.contenedor-ul {
  display: flex;
  flex-direction: column;
  align-items: center;
 
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 5px;
}



/*             footer          */

footer{
  max-width: 1200px;
  margin: auto;
 

}



/*se forman tres columnas*/

.container-footer-all{
  margin: auto;/*siempre va estar centrado*/
}

.container-body {
  display: grid;  /* Define el elemento como un contenedor de grid */
  grid-template-columns: repeat(3, 1fr); /* Define tres columnas de igual tamaño */
  align-items: center; /* Alinea los elementos hijos en el centro verticalmente */
  justify-items: center; /* Alinea los elementos hijos en el centro horizontalmente */
  justify-content: space-between;
  font-size: 22px;
  color: black;
  margin-bottom: 30px;
}

.container-body label{
  font-size: 16px;
  color: black;
}

.columna-1{
  text-align: center;
}

.titulos-footer-1  h1{
  font-family: sans-serif;
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 80px;
  margin-top: -160px;
}

.columna-1 p{
  font-size: 16px;
  /*color: #c7c7c7;*/
 
}




.titulos-footer-2  h1{
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 60px;
  margin-top: 5px;
}

.columna-2 .row{
  margin-top: 20px;
  display: flex;

}


.row img {
  width: 36px;
  height: 36px;
}


.row{
  margin-top: 20px;
  display: flex;
}

.row img{
  width: 36px;
  height: 36px;
}

.row label{
  margin-top: 10px;
  margin-left: 20px;
  max-width: 14px;
}



.titulos-footer-3  h1{
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 10px;
  margin-top: -91px;
  text-align: center;

}


/*los elementos se posicionan en vertical*/
.container-3, .row{
  display: flex;
  flex-direction: column; 
  margin-top: 10px;
  
  
}

.container-3, .row a{
   
  margin-bottom: 20px;
  
  
}









.container-footer { 
  display: flex; /* Define el elemento como un contenedor flexible */ 
  justify-content: space-between; /* Distribuye el espacio entre los elementos hijos */ 
  align-items: center; /* Alinea los elementos hijos en el centro verticalmente */ 
  width: 100%; /* Define el ancho del elemento como el 100% del contenedor padre */ 
  height: 50px; /* Define la altura del elemento como 50px */ 
}



.container-footer .copyrigth .contenedor-footer-derechos-reservados{
  color: black;
}

.contenedor-footer-derechos-a a{
  font-size: 30px;
  color: black;
}

.contenedor-footer-information-a a{
  font-size: 16px;
  color: black;
}







