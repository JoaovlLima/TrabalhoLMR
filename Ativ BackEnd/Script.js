function votar(){

    const votos = document.getElementsByName('voto');

   var votoSelecionado = '';

   for (const voto of votos){
    if(voto.checked){
        votoSelecionado = voto.value;
        break;
    }
   }
   if(votoSelecionado === ''){
    alert("Você não votou")
   }else {
    alert('Parabéns, sua duvida foi computado \n Aguarde o retorno em breve'+'\n Seu voto foi: '+ votoSelecionado)
   }
   const contadorVotos = JSON.parse(localStorage.getItem('votos')) || [];
   
   contadorVotos.push(votoSelecionado);
   
   localStorage.setItem('votos', JSON.stringify(contadorVotos));

   exibirVotos()
}

function exibirVotos() {

    const votosExistentes = JSON.parse(localStorage.getItem('votos')) || [];
    const votos = {
      Indaia: 0,
      CRwatter: 0,
      Galao: 0,
    };
  
 
    for (const voto of votosExistentes) {
      votos[voto]++;
    }
  
    // Exibe o número de votos em cada opção
    document.getElementById('indaia').textContent = votos.Indaia;
    document.getElementById('crwatter').textContent = votos.CRwatter;
    document.getElementById('galao').textContent = votos.Galao;
  }
  document.addEventListener('DOMContentLoaded', exibirVotos);