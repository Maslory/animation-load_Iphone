var masSource = [];
var masElement = [];
var b = 1;
for (var a = 1; a < 18; a++) {
  masSource[a] = "img/" + a.toString() + ".png";
  masElement[a] = document.createElement('img');
  masElement[a].setAttribute("src",masSource[a]);
  masElement[a].style.opacity  = "0";
  smartphone.appendChild(masElement[a]);
}
var timerId = setInterval(function() {
  masElement[b].style.cssText = "z-index:2;\
  position:absolute;\
  opacity: 1; \
   transition: opacity 1s; \
   ";
     b++;
   if (b == masElement.length ) {
     clearInterval(timerId);
     b = 0;
     setTimeout(function(){
       document.getElementById("wallpaper").style.display = "block";
       document.getElementById("wallpaper").style.cssText = "z-index:1;\
       position:absolute;\
       opacity: 1; \
        transition: opacity 5s; \
        ";
     },450);
   }
}, 100);
