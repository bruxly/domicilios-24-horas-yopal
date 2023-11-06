
            
            console.log('entre');
            function App(){

            }
                window.onload = function(event){
                    var app = new App();
                    window.app = app;

                }

                App.prototype.processingButton = function(event){
                    const btn = event.currentTarget;
                    const carrusellist = event.currentTarget.parentNode;
                    const track = event.currentTarget.parentNode.querySelector('#track');
                    const carrusel = track.querySelectorAll('.carrusel-contenedor');

                    const carruselWidth = carrusel[0].offsetWidth;

                    const trackwidth = track.offsetWidth;
                    const listWidth = carrusellist.offsetWidth;
                    
                    track.style.left == "" ? leftPosition = track.style.left = 0: leftPosition = parseFloat(track.style.left.slice(0,-2)* -1);
                    btn.dataset.button == "button-prev " ? prevAction(leftPosition,carruselWidth,track): nextAction(leftPosition,trackwidth, listWidth,carrusel,track);
                    
                    
                
                
                }
            
                let preveAction = (leftPosition,carruselWidth,track)=>{
                    if(leftPosition > 0){
                        track.style.left = `${-1 *(leftPosition-carruselWidth)}px`;

                    }

                }

                let nextAction = (leftPosition, trackwidth, listWidth,carruselWidth, track)=>{
                    if(leftPosition <(trackwidth - listWidth)){
                        track.style.left = `${-1 *(leftPosition + carruselWidth)}px`;

                    }
                }