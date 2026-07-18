function abrir(){


document.getElementById("carta").style.display="block";


document.getElementById("musica").play();



window.scrollTo({

top:document.body.scrollHeight,

behavior:"smooth"

});



confeti();


}



function confeti(){


for(let i=0;i<80;i++){


let c=document.createElement("div");


c.innerHTML="❤️";


c.style.position="fixed";

c.style.left=Math.random()*100+"vw";

c.style.top="-20px";

c.style.fontSize="25px";

c.style.animation="caer 4s linear";


document.body.appendChild(c);



setTimeout(()=>{

c.remove();

},4000);


}


}


let estilo=document.createElement("style");

estilo.innerHTML=`

@keyframes caer{

to{

transform:translateY(110vh) rotate(360deg);

opacity:0;

}

}

`;

document.head.appendChild(estilo);
