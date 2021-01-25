function createCaptcha(node) {
  //clear the contents of captcha div first 
  document.getElementById('captcha').innerHTML = "";
  var captcha = node.value;
  var canv = document.createElement("canvas");
  canv.id = "captcha";
  canv.width = 200;
  canv.height = 50;
  var ctx = canv.getContext("2d");
  ctx.font = "italic 30px Georgia";
  ctx.strokeText(captcha, 0, 30);
  document.getElementById("captcha").appendChild(canv); // adds the canvas to the body element
  $('#botaoCaptcha2').css('opacity', 100);
}