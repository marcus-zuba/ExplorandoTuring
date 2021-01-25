function selectPicture(img){
  img.classList.toggle('selected');
}

function checkImages(){
  let container = document.getElementById('gridImagens');
  let imagens = container.childNodes;
  arrayRespostas = [0,1,0,1,0,0,0,1,0]
  var i=0;
  var acertou = true;
  imagens.forEach(function(element){
    if(element.nodeType==1){
      console.log('entrou');
      if(element.classList.contains('selected')!=arrayRespostas[i]){
        acertou = false;
      }
      i++;
    }
  });
  if(acertou){
    $('#botaoValidarImagens').popover('dispose');
    $('#botaoValidarImagens').popover({placement: 'right',
    container: 'body',
      html: true,
      trigger: '',
      title: 'Imagens Válidas!',
      content: '<p>Você é um humano!'});
    $('#botaoValidarImagens').popover('show');
    $('#FinalC3').css('opacity',100);
    $('#BotaoBora').removeClass('disabled');
  }
  else{
    $('#botaoValidarImagens').popover('dispose');
    $('#botaoValidarImagens').popover({placement: 'right',
      container: 'body',
      html: true,
      trigger: '',
      title: 'Imagens inválidas!',
      content: '<p>Será que você é uma máquina? Poxa! Tente de novo!</p>'});
    $('#botaoValidarImagens').popover('show');
  }

}