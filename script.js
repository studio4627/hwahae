var j = 0;
var title = "가톨릭 양심성찰"
var notice = "오랜 시간 머물 수 있는<br />고요한 장소에서 성찰하시기 바랍니다.<br /><br />이 프로그램에 저장기능은 없습니다.<br />이미 답한 항목은 다시 확인할 수 없으며,<br />중간에 페이지를 벗어나면<br />이어서 할 수 없습니다.<br /><br />예상 소요시간은 30분이고<br />성찰을 완료하면 텍스트로 결과를 저장하여<br />고해성사에 참조하세요.";
var pray_string = "주님, 저는 항상 어디서나 행복을 찾았으나,<br />마음은 아무데서도 안정과 평화를 얻지 못했습니다.<br />오, 예수님.<br />오직 당신 안에서만 참 기쁨과 행복이 있습니다.<br />당신의 눈길을 내게 돌려주십시오.<br />그러면 내 안의 폭풍이 모두 잠잠하리이다.<br />그리고 나 어디서나 당신을 찾고<br />당신의 자비를 어디 가나 전하오리다.<br />성령이여, 내 영혼을 비추시고<br />더욱 큰 행복의 길을 내게 보여주소서.<br />그곳에 도달하기 위해서는 아무것도 남겨두지 않겠사오며,<br />모든 것을 버리겠습니다.<br />내 결심을 이루도록 도와주소서.<br /><br />우리 주 예수 그리스도를 통하여 비나이다.<br />아멘."
var questions = ["한 분이신 아버지이신 하느님께<br />찬미와 감사드림을 소홀히 하였습니다.","내 마음에 계신 하느님을 잊고<br />하느님을 찾지 않았습니다.","두려움이나 나태 때문에<br />하느님을, 혹은 나의 믿음을 부인했습니다.","하느님의 자비와 착하심을 의심하고<br />실망하거나 불평했습니다.","점, 굿, 사주, 택일, 궁합,<br/>부적, 타로 등을 했습니다.","어려움과 절망 속에서<br />하느님을 찾지 않았습니다.","하느님과 믿음을 거스르는 매체를<br />계속하여 접했습니다.","교회를 그리스도의 신비체라기보다<br />어느 종파나 단체라고 생각했습니다.","하느님의 말씀이 담긴 성경을<br />게을리 읽었습니다.","하느님을 저주하고<br />하느님의 이름을 불경스럽게 사용했습니다.","하느님께 드리는 공적 예배인 미사에<br/>소홀했습니다.","기도나 복음전파를 위한 노력을<br />실천하지 않았습니다.","충분한 이해와 연구를 하지 않고<br />교회의 가르침을 비난했습니다.","교회법이 나에게는 적용되지 않는다고 생각해<br />어긴 적이 있습니다.","억지로 미사에 참례했거나<br />일부러 미사 참례를 하지 않았습니다.","정당한 이유 없이<br />주일 미사 참례를 하지 않았습니다.","정당한 이유 없이<br />정해진 날에 금육과 단식을 지키지 않았습니다.","양심에 꺼리는 죄가 있는데도<br />영성체를 했습니다.","일부러 고해성사 보기를 피했습니다.","판공성사에 소홀했거나<br />고해성사를 받고 영성체를 한지<br />1년이 넘었습니다.<br />","도덕에 관한 교회의 가르침은<br />옛날에 적합한 것이라 생각했습니다.","필요치 않아도 주일에 일했습니다.","신심단체의 노력을 비난했습니다.","교회를 경제적으로 지원하는 일에 소홀했습니다.","쉬고 싶고, 바쁘다는 개인적 이유로<br />교회 봉사나 활동을 머뭇거렸습니다.<br />혹은 능력이 있으면서 봉사를 피했습니다.","하느님께서<br />우리 집안을 돌보아 주시지 않는다고<br />불평하거나, 믿음이 흔들렸습니다.","자식으로서 부모님과<br />부모님의 정당한 권위를 소홀히 여겼습니다.","부모로써 또는 자녀로써<br />가정의 성화를 위해 노력하지 않았습니다.","가정생활에 필요한 것을 마련하는 데<br />힘쓰지 않았습니다.","혼인성사를 받지 않고 결혼<br />혹은 혼인장애가 있는 사람과 결혼했습니다.","아내/남편에 대한 의무를 소홀히 여기고<br />상대를 존경하지 않았습니다.","부모로서 자녀들의 정신적·육체적 교육을 위해<br />필요한 것을 마련하려 하지 않았습니다.","부모로서 자녀들을 주일미사와 주일학교에<br />보내지 않았습니다.","내 기분이 나쁘다는 이유로<br />이웃의 기분을 상하게 했습니다.","이유 없이 참지 못하고, 분노하고,<br />남을 미워하고, 복수했습니다.","이웃에게 의심을 품거나<br />이웃에 대해 나쁘게 말했습니다.","천주교가 아닌 그리스도교 신자를<br />갈라진 형제가 아니라 원수로 생각했습니다.","타인을 속이고, 지나치게 욕심 부리고,<br />질투하고, 불친절했습니다.","이기적인 마음을 가졌거나<br />내 피로의 짐을 다른 이가 지도록 했습니다.","말이나 행실로 나쁜 표양을 나타냈습니다.","나의 나쁜 버릇으로 인해<br />남이 죄를 짓게 했습니다.","이웃을 위한 희생을 꺼렸습니다.","오늘의 일을 내일로 미루는 등,<br />의무를 소홀히 했습니다.","내 건강을 소홀히 여기고, 내 자신을 미워하고,<br />심각하게 자살할 생각을 했습니다.","술을 취하도록 마셔 주정하거나<br />약물을 잘못된 방법/용도로 사용했습니다.","싸우고, 말다툼하고,<br />다른 사람의 몸을 상하게 했습니다.","낙태시키거나 낙태에 협조하거나<br />다른 사람의 생명을 상하게 했습니다.","의식적으로 타인과 혹은 혼자서<br />부정한 행위(사음)를 했습니다.","좋지 못한 쾌락을 바라거나 행동하고<br />음란에 빠져 부정한 행동을 했습니다.","의식적으로 부정한 생각이나 말에 가담했습니다.","합당한 이유 없이<br />죄를 지을 기회를 가까이 했습니다.<br />(사람, 장소, 매체 등)","의도적으로 아내나 남편에 대한<br />신의를 저버렸습니다. (간음)","갚을 생각 없이 돈을 빌리고<br />갚지 않아 남에게 손해를 끼쳤습니다.","도둑질했습니다.<br />(가정 / 이웃 / 고용주 / 고용인 / 누구에게서나)","다른 사람의 도둑질이나 뇌물 공여 등<br />불의에 협조하거나 지원했습니다.","뇌물을 받거나 주었고<br/>혹은 교회에서의 직분을 이용해<br/>뇌물을 얻으려 했습니다.","그리스도 신자라는 이유로 사제나 남에게<br />특별히 보아 달라고 청한 적이 있습니다.","교회, 사제, 주교에 관한 교회 내부의 문제를<br />공공연하게 비평한 적이 있습니다.","공동체나 조직사회 안에서<br />몇몇 사람과만 친하게 지내며<br />다른 사람들은 배척했습니다.","가정과 주어진 환경, 사회 안에서<br />주님의 계명을 어겼습니다.","가정과 주어진 환경, 사회 안에서<br />더 잘할 수 있음에도 그러지 않았습니다.","고의로, 게을러서, 이익을 위해<br />남의 재물에 손해를 끼쳤습니다.","게을렀거나 등한시하여<br />나의 품삯에 적당한 하루 일을<br />다 하지 않았습니다.","고용인들에게 품삯을 제대로 주지 않았습니다.<br />(성별/연령에 따른 차별 포함)","고용인들을 위한 안전, 건강과,<br />합당한 노동 조건을 제공하려고<br />노력하지 않았습니다.","고의로 정당한 계약을 어기고<br />혹은<br />청구서, 빚, 세금 등을 지불하지 않았습니다.","아는 사람들이 굶주리고, 헐벗고,<br />교육받을 수 없거나 일자리를 구하지 못할 때<br />무관심 했습니다.","선입견을 가지고 인종, 특정 단체나 그룹<br />혹은 가난한 자들을 차별대우했습니다.","의도적인 거짓말을 했습니다.","거짓 증언이나 거짓말로<br />남에게 피해를 입혔습니다.","불의하게 남의 잘못을 드러내고,<br />비평하고, 험담하고, 소문을 퍼뜨렸습니다.","지나치게 자기만을 칭찬하거나<br />위선을 행했습니다.","직업적 비밀을 누설했습니다.<br />(의사, 회사원, 교사, 경찰, 공무원 등)"];
var results = "";
var pass="";

// 인트로 메뉴만 남기고 다 숨기기
document.getElementById("intro").style.display = '';
document.getElementById("sungho").style.display = 'none';
document.getElementById("pray").style.display = 'none';
document.getElementById("question").style.display = 'none';
document.getElementById("result").style.display = 'none';

// 메뉴별 스트링 값 초기화
document.getElementById("intro_string").innerHTML = intro_string;
document.getElementById("pray_string").innerHTML = pray_string;
document.getElementById("question_string").innerHTML = questions[i];

// 인트로에서 시작 버튼
function start() {
  document.getElementById("intro").style.display = 'none';
  document.getElementById("sungho").style.display = '';
}

// 성호경 인증
function amen() {
  var sungho_pass = document.getElementById("sungho_pray").value;
  sungho_pass = sungho_pass.replace(/(\s*)/g, "");
  if (sungho_pass.indexOf("성부와성자와성령의이름으로")==0){
    document.getElementById("sungho").style.display = 'none';
    document.getElementById("pray").style.display = '';
  } else {
    alert("다시 입력하세요.");
  }
}

// 기도문에서 다음으로 버튼
function next() {
  document.getElementById("pray").style.display = 'none';
  document.getElementById("question").style.display = '';
  alert("주의\n이전 질문으로 돌아갈 수 없습니다.\n중간까지의 내용은 저장되지 않습니다.");
}

// 질문
function question_change(){
  j+=1;
  document.getElementById("question_string").innerHTML = questions[j];
}

function yes() {
  if(i < 72){
    results = results + "<br/><br/>" + questions[i];
    question_change();
  } else {
    show_result();
  }
}

function no() {
  if(i < 72) {
    question_change();
  } else {
    show_result();
  }
}

function show_result() {
  document.getElementById("result_string").innerHTML = results;
  document.getElementById("question").style.display = 'none';
  document.getElementById("result").style.display = '';
  bg.style.background = "linear-gradient(25deg, rgba(0,0,0,1) 0%, rgba(70,0,90,1) 100%)";
  document.getElementById("body").style.height="auto;"
  bt.style.height = "100%;"
}

function result_copy() {
  document.getElementById("result_string").select();
  document.execCommand("copy");
  alert('복사가 완료되었습니다.');
}
