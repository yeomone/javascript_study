// 1. 'admin' 아이디만 접근할 수 있는 페이지
let userId = 'admin'
if(userId == 'admin'){
    console.log('관리자님 어서오세요')
}

// 2. 'admin' 아이디 '1234' 비밀번호인 관리자만 접근할 수 있는 페이지
let userPw = '1234'
if(userId == 'admin' && userPw == '1234'){
    console.log('관리자님 어서오세요')
}

// 3. 사용자의 아이디를 입력 받고 admin이 아니면 일반회원입니다.
/* const userIdInput = prompt('아이디를 입력하세요')
if(userIdInput != 'admin'){
    console.log('일반회원입니다')
} */

/* const userNum = prompt('숫자를 써주시면 짝수인지 홀수인지 맞춰볼게요!')
if(userNum%2 == 0 ){
    console.log('짝수')
}
if(userNum%2){
    console.log('홀수')
} */

// 5. 10살 이상만 탈 수 있는 놀이기구, 나이를 물어보고 10살 이하면 탑승 불가
/* const age = prompt('몇살?')
if(age < 10){
    console.log('탑승 불가')
    alert('탑승 불가')
} */

// 6. 키가 10살 이상이면서 키가 120 이상인 애만 탈 수 있는 놀이기구
/* const age = prompt('몇살?')
const height = prompt('키는?')
if(age > 10 && height > 120){
    console.log('탑승 가능!')
    alert('탑승 가능!')
} */

const printBtn =document.querySelector('#printBtn')
// printBtn.addEventListener('click',function(){})
printBtn.addEventListener('click',()=>{
    const q = confirm('인쇄할까요?')
    if(q){ print() }
})
// 최소 구매수량 1, 최대 구매 수량 10
// 10개 이상 구매하려고 하면 '최대 구매 수량입니다'
const numInput = document.querySelector('#num')
const plus = document.querySelector('#plus')
const minus = document.querySelector('#minus')
const priceOutput = document.querySelector('.price')
let num = 1;
let price = 1000;
let total = 0;

// 초기 수량 1 설정
numInput.value = num;
// 버튼 클릭 시 수량 최대 10까지 증가
plus.addEventListener('click',()=>{
    if(num < 10){
        num++
        numInput.value = num;
        console.log(num)
        // priceOutput.innerText = `${price * Number(numInput.value)}원`;
        total = price * num;
        priceOutput.innerHTML = `${total.toLocaleString('ko-kr')}원`;
    }
    // 수량이 10개 됐을 때 버튼을 또 누를 때 실행 메세지
    if(num === 10){
        alert('최대 구매 수량입니다')
    }
    // console.log('if밖', num)
})

minus.addEventListener('click',function(){
    if(num > 1){
        num--
        numInput.value = num;
        console.log(num)
        priceOutput.innerText = `${price * Number(numInput.value)}원`; 
    }
    if(num === 1){
        alert('최소 구매 수량입니다')
    }
})
/*     num++
    console.log(num)
    if(num > 10){
        num = 10;
        console.log(num)
        console.log('최대 구매 수량입니다')
    }
    console.log('if밖', num) */