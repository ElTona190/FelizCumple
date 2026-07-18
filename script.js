function mostrarMensaje(){


document.getElementById("mensaje").style.display="block";


let musica=document.getElementById("musica");

musica.play();



window.scrollTo({

top:document.body.scrollHeight,

behavior:"smooth"

});


}




setInterval(()=>{


let corazon=document.createElement("div");


corazon.innerHTML="❤️";


corazon.style.position="fixed";

corazon.style.left=Math.random()*100+"vw";

corazon.style.top="100vh";

corazon.style.fontSize="25px";

corazon.style.animation="subir 5s linear";


document.body.appendChild(corazon);



setTimeout(()=>{

corazon.remove();

},5000);



},700);