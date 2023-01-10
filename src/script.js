// TODO : DOM으로부터 필요한 엘리먼트를 불러오세요.

let elInputUsername = document.querySelector('#username')
let elFailureMessage = document.querySelector('.failure-message')
let elSuccessMessage = document.querySelector('.success-message')

function isMoreThan4Length(value) {
  return value.length >=4
}
//아이디 입력창에 글자를 키보드로 입력할 때 (이벤트:~할 때)(이벤트핸들러:실행되는 함수)
//글자 수가 4개 이상이면
//사용할 수 있는 아이디입니다 메시지 출력

//영어 또는 숫자만 가능
function onlyNumberAndEnglish(str) {
  return /^[A-Za-z0=9][A-Za-z0-9]*$/.test(str);
}

elInputUsername.onkeyup = function () {
  
  // 바로 아래 조건문은 과제 제출시 테스트 항목 통과를 방해하는 코드로 주석처리 함
  // if(elInputUsername.value==='') {
  //   //입력했던 아이디 모두 지울 경우 > 성공 실패 메시지 모두 가려짐
  //   elSuccessMessage.classList.add('hide')
  //   elFailureMessage.classList.add('hide')
  // }
  if (
    isMoreThan4Length(elInputUsername.value) &&
    onlyNumberAndEnglish(elInputUsername.value)
  ) {
    elFailureMessage.classList.add("hide");
    elSuccessMessage.classList.remove("hide");
  } else {
    elSuccessMessage.classList.add("hide");
    elFailureMessage.classList.remove("hide");
  }

// if (isMoreThan4Length(elInputUsername.value)) {
//     //성공 메시지 보임 //실패 메시지 가려짐
//     elSuccessMessage.classList.remove('hide')
//     elFailureMessage.classList.add('hide')
//   }
//   else {
//     //성공 메시지 가려짐 //실패 메시지 보임
//     elSuccessMessage.classList.add('hide')
//     elFailureMessage.classList.remove('hide')
//   }  
}


let elPassword = document.querySelector('#password')
let elPasswordRetype = document.querySelector('#password-retype')
let elMissmatchMessage = document.querySelector('.mismatch-message')
let elMatchMessage = document.querySelector('.match-message')
let passwordMessage = document.querySelector(".password-message");

function isMatch (password1, password2) {
  return password1===password2
}

// [유효성 검증 함수]: 최소 8자 이상이면서, 알파벳과 숫자 및 특수문자(@$!%*#?&) 는 하나 이상 포함
function strongPassword(str) {
  return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
    str
  );
}

// 비밀번호, 비밀번호 확인란에 키보드로 입력할 때
// 비밀번호 값과 비밀번호 확인 값 일치 여부 isMatch 사용
// 일치하면 true 반환 // 불일치하면 false 반환

elPassword.onkeyup = function () {
  elSuccessMessage.classList.add("hide");
  if (elPassword.value==='') {
    passwordMessage.classList.add("hide");
  }
  else if (strongPassword(elPassword.value)) {
    passwordMessage.classList.add("hide");
  }
  else {
    passwordMessage.classList.remove("hide");
  }
};

elPasswordRetype.onkeyup = function () {
  passwordMessage.classList.add("hide");
  //성공 실패 메시지 모두 가려짐
  if(elPasswordRetype.value==='') {
    elMissmatchMessage.classList.add('hide')
    elMatchMessage.classList.add('hide')
  }
  
  else if (isMatch(elPassword.value, elPasswordRetype.value)) {
    // 실패 메시지 가려짐 //성공 메시지 보임
    elMissmatchMessage.classList.add('hide')
    elMatchMessage.classList.remove('hide')
    passwordMessage.classList.add("hide");
  }
  else {
    // 실패 메시지 보임 //성공 메시지 가려짐
    elMissmatchMessage.classList.remove('hide')
    elMatchMessage.classList.add('hide')
  }
}


// 이름
//이름 입력창에 글자를 키보드로 입력할 때 
//입력값을 Number로 바꿨을 때 NaN이면 함수실행
//인덱스로 입력값 처음부터 끝까지 순회하며(반복문) 공백 특수 기호 포함하는지 여부 확인
//공백의 경우 ' '와 일치하는지로 확인 // 특수기호 배열화하여 .includes 메서드로 확인
//실패) 한글과 영문 대 소문자를 사용하세요. (특수기호, 공백, 숫자 사용 불가) 출력

let username = document.querySelector('#name')
let nameMessage = document.querySelector('.name-message')
let arr = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '|', '<', '>', '?', ':', '{', '}', ']', '/', '<', '/', '>']

// 입력값이 NaN이면 true 아니면 false
// NaN은 본인을 포함한 그 어떤 것도 === 동치될 수 없어서 NaN===NaN은 false
// NaN인지 확인하려면 isNaN()메서드를 사용해야 함
function NanTest (name2)  {
  for (i = 0; i < name2.length; i++)
    if (isNaN(Number(name2[i]))) {
      continue;
    } else {
      return false;
    }
  return isNaN(Number(name2));
}

username.onkeyup = function () {

  // 입력값 백스페이스로 모두 지워 초기화 한 경우
  // 실패 메시지 가려짐
  if(username.value==='') {
    nameMessage.classList.add('hide')
  }

  // NaN => 문자인 경우  
  else if (NanTest(username.value)) {
    for (let i=0; i<username.value.length; i++) {
      // 공백 또는 특수기호 포함한 경우
      // 실패 메시지 노출
      if (username.value[i] === ' ' || arr.includes(username.value[i])) {
        nameMessage.classList.remove('hide')
        break;
      }
      // 한글 영문처럼 일반 문자인 경우
      // 실패 메시지 가려짐
      else {
        nameMessage.classList.add('hide')
      }
    }
  }
  // Number 인 경우
  // 실패 메시지 노출
  else {
    nameMessage.classList.remove('hide')
  }
}



// 생년월일

// year
// 숫자 여부 판단 : 입력값을 Number로 바꿨을 때 숫자가 '아니면' 함수실행, typeof()사용 또는 isNaN 사용
// 입력 길이 판단 : 길이 4를 초과할 경우 문자열 자르기 .slice(0,5) // input 태그에 maxlength='4'입력하는 방법도 있음
// 현재 년도 판단 : 출생년도가 2023을 초과하는 경우 실패 메시지 출력
// 메시지 출력 (1) : 숫자가 아닌 경우 - 생년월일을 다시 확인해주세요
// 메시지 출력 (2) : 숫자지만 길이가 부족한 경우 - 태어난 년도 4자리를 정확하게 입력하세요
// 메시지 출력 (3) : 모두 잘 입력한 경우 - 태어난 월을 선택하세요
let birthYear = document.querySelector("#year");
let noNumberMessage = document.querySelector(".year-message-number");
let yearMessageLength = document.querySelector(".year-message-length");
let yearMessage = document.querySelector(".year-message");
let monthMessage = document.querySelector(".month-message");

function numberTest(num1) {
  return isNaN(Number(num1));
}

birthYear.onkeyup = function () {
  if (birthYear.value === "") {
    yearMessageLength.classList.add("hide");
    noNumberMessage.classList.add("hide");
    yearMessage.classList.add("hide");
    monthMessage.classList.add("hide");
  } else if (birthYear.value.length === 4 && !numberTest(birthYear.value) && birthYear.value < 2023) {
    monthMessage.classList.remove("hide");
    yearMessageLength.classList.add("hide");
  } else if (birthYear.value.length < 4) {
    yearMessageLength.classList.remove("hide");
    monthMessage.classList.add("hide");
    yearMessage.classList.add("hide");  
    if (numberTest(birthYear.value)) {
      noNumberMessage.classList.remove("hide");
      monthMessage.classList.add("hide");
      yearMessageLength.classList.add("hide");
    } else {
      noNumberMessage.classList.add("hide");
    }
  } else if (birthYear.value > 2023) {
    yearMessage.classList.remove("hide");
    yearMessageLength.classList.add("hide");
  } else {
    yearMessageLength.classList.add("hide");
    yearMessage.classList.add("hide");
  }
};

// month
// 태어난 일을 선택하세요
let month = document.querySelector("#month");
let day = document.querySelector("#day");
let dayMessage = document.querySelector(".day-message");

month.onchange = function () {
  monthMessage.classList.add("hide");
  dayMessage.classList.remove("hide");
};

day.onchange = function () {
  dayMessage.classList.add("hide");
};


// 전화번호 
// 숫자가 아니면 잘못된 입력이라고 피드백 주기
// 번호를 끝까지 입력해주세요
// 형식에 맞지 않는 번호입니다
let phone = document.querySelector('#phone');
let phoneMessage = document.querySelector('.phone-message')
let hypenMessage = document.querySelector('.hypen-message')
let endMessage = document.querySelector('.end-message')

phone.onmouseover = function() {
  hypenMessage.classList.remove('hide');
}

phone.onmouseout = function() {
  hypenMessage.classList.add('hide');
}

phone.onkeyup = function() {
  if (phone.value === "") {
    phoneMessage.classList.add("hide");
    hypenMessage.classList.remove('hide');
    endMessage.classList.add('hide');

  } else if (phone.value.length < 11) {

    if (numberTest(phone.value)) {
      phoneMessage.classList.remove("hide");
      hypenMessage.classList.add('hide');
      endMessage.classList.add("hide");
    } else {
      phoneMessage.classList.add("hide");
      hypenMessage.classList.add('hide');
      endMessage.classList.remove("hide");
    }
  } else {
    phoneMessage.classList.add("hide");
    hypenMessage.classList.add('hide');
    endMessage.classList.add("hide");
  }
}

// 회원가입
// 위에 항목들이 모두 입력되면 활성화 되도록

let btnActive = document.querySelector('.button-active')

elPasswordRetype.onchange = function () {
    if (isMoreThan4Length(elInputUsername.value) &&
    onlyNumberAndEnglish(elInputUsername.value)&& 
    strongPassword(elPassword.value)&& 
    isMatch(elPassword.value, elPasswordRetype.value)) 
    
    {
      btnActive.classList.add("button-active")
      btnActive.classList.remove("button-disabled")
      console.log('되고 있음!')
    }

    
  else {
      btnActive.classList.remove("button-active")
      btnActive.classList.add("button-disabled")
      console.log('뭔가 이상함...')
  }
}
