let joinId;
let joinPw;
let joinPwCheck;
let joinName;
let joinPhoneNum1;
let joinPhoneNum2;
let joinPhoneNum3;
let joinEmail;
let birthYear;
let birthMon;
let birthDay;

function checkId(id) {
    id = joinId.value;
    if (id.length <= 4) {
        alert("아이디를 4자이상 입력하세요.")
        return false;
    }

    if (id.length >= 20) {
        alert("아이디를 20자이하로 입력하세요.")
        return false;
    }

    if (id.length > 0) {
        return true;
    }
}
function checkPw(pw) {
    pw = joinPw.value;
    if (pw.length <= 8) {
        alert("비밀번호를 8자이상 입력하세요.")
        return false;
    }

    if (pw.length >= 20) {
        alert("비밀번호를 20자이하로 입력하세요.")
        return false;
    }
    
    if (pw.length > 0) {
        return true;
    }
}
function checkPwCheck(pwCheck) {
    pw = joinPw.value;
    pwCheck = joinPwCheck.value;
    if (pw == pwCheck) {
        return true;
    } else {
        alert("비밀번호가 일치하지 않습니다")
    }
}
function checkName(name) {
    name = joinName.value;
    if (name.length <= 0) {
        alert("이름을 입력하세요.")
    }
    
    if (name.length > 0) {
        return true;
    }
}
function checkPhoneNum(num1) {
    num1 = joinPhoneNum1.value;
    if (num1.length <= 0) {
        alert("휴대폰 번호를 입력하세요.")
    }

    if (num1.length > 0) {
        return true;
    }
}
function checkPhoneNum(num2) {
    num2 = joinPhoneNum2.value;
    if (num2.length <= 0) {
        alert("휴대폰 번호를 입력하세요.")
    }

    if (num2.length > 0) {
        return true;
    }
}
function checkPhoneNum(num3) {
    num3 = joinPhoneNum3.value;
    if (num3.length <= 0) {
        alert("휴대폰 번호를 입력하세요.")
    }

    if (num3.length > 0) {
        return true;
    }
}
function checkEmail(email) {
    email = joinEmail.value;
    if (email.length <= 0) {
        alert("이메일을 입력하세요.")
    }

    if (email.length > 0) {
        return true;
    }
}
function checkBirthY(birY) {
    birY = birthYear.value;
    if (birY == "") {
        alert("생년을 선택하세요.")
    } else {
        return true;
    }
}
function checkBirthM(birM) {
    birM = birthMon.value;
    if (birM == "") {
        alert("월을 선택하세요.")
    } else {
        return true;
    }
}
function checkBirthD(birD) {
    birD = birthDay.value;
    if (birD == "") {
        alert("일을 선택하세요.")
    } else {
        return true;
    }
}

function checkIndex() {
    if (checkId() &&
        checkPw() &&
        checkPwCheck() &&
        checkName() &&
        checkPhoneNum() &&
        checkEmail() &&
        checkBirthY() &&
        checkBirthM() &&
        checkBirthD()) {
        alert("회원가입 완료")
    }
}



window.onload = function () {
    joinId = document.getElementById('join_id');
    joinPw = document.getElementById('join_pw');
    joinPwCheck = document.getElementById('join_pw_check');
    joinName = document.getElementById('join_name');
    joinPhoneNum1 = document.getElementById('join_phone_num1');
    joinPhoneNum2 = document.getElementById('join_phone_num2');
    joinPhoneNum3 = document.getElementById('join_phone_num3');
    joinEmail = document.getElementById('join_email');
    birthYear = document.getElementById('birth_year');
    birthMon = document.getElementById('birth_mon');
    birthDay = document.getElementById('birth_day');
}
