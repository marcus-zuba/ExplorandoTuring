var code;
function createCaptcha() {
  //clear the contents of captcha div first 
  document.getElementById('captcha').innerHTML = "";
  var charsArray =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@!#$%^&*";
  var lengthOtp = 6;
  var captcha = [];
  for (var i = 0; i < lengthOtp; i++) {
    var index = Math.floor(Math.random() * charsArray.length + 1);
    if (captcha.indexOf(charsArray[index]) == -1)
      captcha.push(charsArray[index]);
    else i--;
  }
  var canv = document.createElement("canvas");
  canv.id = "captcha";
  canv.width = 100;
  canv.height = 50;
  var ctx = canv.getContext("2d");
  ctx.font = "italic 20px Times New Roman";
  ctx.strokeText(captcha.join(""), 0, 30);
  //storing captcha so that can validate you can save it somewhere else according to your specific requirements
  code = captcha.join("");
  document.getElementById("captcha").appendChild(canv); 
}

function validateCaptcha() {
  event.preventDefault();
  debugger
  if (document.getElementById("captchaTextBox").value == code) {
    $('#validarCaptchaButton').popover('dispose');
    $('#validarCaptchaButton').popover({placement: 'right',
      container: 'body',
      html: true,
      trigger: '',
      title: 'Captcha Válido!',
      content: '<p>Você é um humano!'});
    $('#validarCaptchaButton').popover('show');
    $('#FinalC2').css('opacity', 100);
    $('#BotaoBora').removeClass('disabled');

  } else {
    $('#validarCaptchaButton').popover('dispose');
    $('#validarCaptchaButton').popover({placement: 'right',
      container: 'body',
      html: true,
      trigger: '',
      title: 'Captcha inválido!',
      content: '<p>Será que você é uma máquina? Poxa! Tenta de novo!</p>'});
    $('#validarCaptchaButton').popover('show');
    createCaptcha();
  }
}