function mostrarExplicacao(node){
  node.disabled = true;
  $('#explicacao-c1').css('opacity', 100);
}

let x = document.querySelector("#x");
let y = document.querySelector("#y");
let xMove = document.querySelector("#Xmovement");
let yMove = document.querySelector("#Ymovement");

let divMaquina = document.querySelector("#MAQUINA");


window.addEventListener("mousemove", function (e) {
  x.innerHTML = `${e.clientX}`
  y.innerHTML = `${e.clientY}`
  xMove.innerHTML = `${e.movementX}`
  yMove.innerHTML = `${e.movementY}`
});

