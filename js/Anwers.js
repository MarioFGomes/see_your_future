const respostas = [
    "Certeza!",
    "Não tenho tanta certeza.",
    "É decididamente assim.",
    "Não conte com isso.",
    "Sem dúvidas!",
    "Pergunte novamente mais tarde.",
    "Sim, definitivamente!",
    "Minha resposta é não.",
    "Você pode contar com isso.",
    "Melhor não te dizer agora.",
    "A meu ver, sim.",
    "Minhas fontes dizem não.",
    "Provavelmente.",
    "Não é possível prever agora.",
    "Perspectiva boa.",
    "As perspectivas não são tão boas.",
    "Sim.",
    "Concentre-se e pergunte novamente.",
    "Sinais apontam que sim.",
  ]

 var butonPerguntar=document.getElementById('Ask');
 var Pergunta=document.querySelector('input');
 var elementResposta=document.querySelector('#resposta');

  butonPerguntar.addEventListener('click',FazerPergunta);

 function FazerPergunta(){

    if(Pergunta.value==null ||Pergunta.value==""){
        alert("Digite sua pergunta");
        return;
     }
     
     else{

     butonPerguntar.setAttribute('disabled',true);

    const Totalrespostas=respostas.length;
    const NumeroAleatorio=Math.floor(Math.random()*Totalrespostas);
     

     const PerguntaResult="<div>"+ Pergunta.value +"</div>"
     elementResposta.innerHTML=PerguntaResult + respostas[NumeroAleatorio];

     Pergunta.value="";

     elementResposta.style.opacity=1;

     setTimeout(()=>{
        elementResposta.style.opacity=0;
        butonPerguntar.removeAttribute('disabled');
     },3000);
        
     }
    
    //console.log(respostas[NumeroAleatorio]);
    
 }