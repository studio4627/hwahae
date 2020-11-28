
var i = 40;
var bg = document.getElementById("background");
bg.style.background = "linear-gradient(25deg, rgba(240,240,240,1) 0%, rgba(200,150,210,1) 100%)";
//bg.style.background = "linear-gradient(25deg, rgba(0,0,0,1) 0%, rgba(70,0,90,1) 100%)";
//왼쪽 아래는 4씩, 오른쪽 위는 2씩 증가
var str_intro = "그들의 기구와 장비는<br />"+
                "모두 살아있다."
document.getElementById("intro_string").innerHTML = str_intro;
