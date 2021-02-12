var i = 0;
var left = 0;
var r = 70;
var g = 20;
var b = 80;
var text_color = 255;
var bg = document.getElementById("body");
var today = new Date();

// 배경색 초기화
bg.style.background = "linear-gradient(35deg, rgba(0,0,0,1) 0%, rgba(70,0,90,1) 100%)";

// 배경색 변경
function bgcolor(){
  // i+=1;
  left += 3;
  r += 2;
  g += 2;
  b += 2;

  bg.style.background = "linear-gradient(35deg, rgba("+left+","+left+","+left+",1) 0%, rgba("+r+","+g+","+b+",1) 100%)";
  //document.getElementById("yes").style.color="rgb("+ text_color +","+text_color+","+text_color+ ")";
  //document.getElementById("no").style.color="rgb("+ text_color +","+text_color+","+text_color+ ")";
  //document.getElementById("question_string").style.color="rgb("+ text_color +","+text_color+","+text_color+ ")";
  // document.getElementById("question_string").innerHTML = questions[i];
  //bg.style.background = "linear-gradient(25deg, rgba(0,0,0,1) 0%, rgba(70,0,90,1) 100%)";
  //왼쪽 아래는 4씩, 오른쪽 위는 2씩 증가
}


function yes() {
  if(i < 72){
    bgcolor();
  }
}

function no() {
  if(i < 72) {
    bgcolor();
  }
}
