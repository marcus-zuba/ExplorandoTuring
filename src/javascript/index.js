

let x = document.querySelector("#x");
let y = document.querySelector("#y");
let xMove = document.querySelector("#Xmovement");
let yMove = document.querySelector("#Ymovement");

let divMaquina = document.querySelector("#MAQUINA");


window.addEventListener("mousemove", function(e){
  x.innerHTML = `x: ${e.clientX}`
  y.innerHTML = `y: ${e.clientY}`
  xMove.innerHTML = `x movement:${e.movementX}`
  yMove.innerHTML = `y movement:${e.movementY}`

  setTimeout(function(){
    if(Math.abs(e.movementX) >= 100 || Math.abs(e.movementY) >= 100)
      divMaquina.innerHTML = "MAQUINA!!!"
    else
      divMaquina.innerHTML = ""
  }, 10000);

});

new fullpage('#fullpage', {
  navigation: true,
  responsiveWidth: 700,
  anchors: ['home', 'about-us', 'contact'],
  parallax: true,
  onLeave: function(origin, destination, direction){
      console.log("Leaving section" + origin.index);
  },
});