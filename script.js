var i = 0;
var left = 0;
var r = 70;
var g = 20;
var b = 80;
var bg = document.getElementById("background");
var btn = document.getElementById("main_btn");

bg.style.background = "linear-gradient(35deg, rgba("+left+","+left+","+left+",1) 0%, rgba("+r+","+g+","+b+",1) 100%)";
btn.innerHTML = i;

function bgclr(){
  i+=1;
  left += 4;
  r += 2;
  g += 2;
  b += 2;
  bg.style.background = "linear-gradient(35deg, rgba("+left+","+left+","+left+",1) 0%, rgba("+r+","+g+","+b+",1) 100%)";
  btn.innerHTML = i;
  //bg.style.background = "linear-gradient(25deg, rgba(0,0,0,1) 0%, rgba(70,0,90,1) 100%)";
  //왼쪽 아래는 4씩, 오른쪽 위는 2씩 증가
}

var str_intro = "그들의 기구와 장비는<br />"+
                "모두 살아있다."
document.getElementById("intro_string").innerHTML = str_intro;
