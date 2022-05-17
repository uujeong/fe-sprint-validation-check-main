// 동영상 강의에 나온 코드를 그대로 실습하세요
// TODO : DOM으로부터 필요한 엘리먼트를 불러오세요.

let elInputUsername = document.querySelector('#username')
let elFailureMessage = document.querySelector('.failure-message')
let elSuccessMessage = document.querySelector('.success-message')

// pw 유효성 검사
let elPassWordId = document.querySelector('#password')
let elPassWordRetypeId = document.querySelector('#password-retype')
let elMissmatchMessage = document.querySelector('.mismatch-message')

// id창에 message담기
elInputUsername.value = 'ID를 입력하세요.'





// id의 길이가 4보다 크거나 같으면 -> 성공 , 4보다 작으면 -> 실패인 함수 작성

elInputUsername.onkeyup = function(){
// eventhandler안에 조건문이 들어간다.
  if(isMoreThan4Length(elInputUsername.value)) {
    // 사용 가능 멘트가 떠야 함. 
    elSuccessMessage.classList.remove('hide')
    // 아이디가 4글자 이상이면 .hide를 추가하여 실패메시지 안보이게!
    elFailureMessage.classList.add('hide')
  }
  else{
    // 사용 가능 멘트가 사라져야.
    elSuccessMessage.classList.add('hide')
    // 아이디가 4글자가 아니면 .hide 제거하여 실패 메시지가 보이게!
    elFailureMessage.classList.remove('hide')
  }


}



function isMoreThan4Length(value) {
  // TODO : 동영상 강의를 보고 이 함수를 완성하세요.
  return value.length >= 4;


}





elPassWordRetypeId.onkeyup = function() {
  if(isMatch(elPassWordId.value, elPassWordRetypeId.value)){
    // mismatch 메시지가 안떠야 함(hide가 활성화)
    elMissmatchMessage.classList.add('hide')
  }
  else {
    elMissmatchMessage.classList.remove('hide')
  }

}

// 비밀번호 확인 함수
function isMatch (password1, password2) {
  // TODO : 동영상 강의를 보고 이 함수를 완성하세요.
  return password1 === password2;

}

// 1. 비밀번호와 비밀번호 확인 창이 일치해야한다.
// 2. 일치하지 않으면 elMissmatchMessage가 등장해야한다.