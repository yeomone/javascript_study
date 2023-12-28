const num = document.querySelector('#num');
const numBtn = document.querySelector('#numBtn');
const numBtn2 = document.querySelector('#numBtn2');
console.log(num, numBtn)

function minus(){
    let result = Number(num.value)
    num.value = result - 1
}
function plus(){
    // console.log(num.value) // 값 출력 확인
    // console.log(num.value+1) // 더하기 출력 확인> 안됨
    // console.log(typeof num.value) // 데이터 확인
    // console.log(Number(num.value)+1) //더하기 확인
    // num.value = Number(num.value)+1 // 출력대상 바꿔서 확인
    // (아래) 또다른 결과(프로그래밍 깔끔하게 쓰기)
    let result = Number(num.value)
    num.value = result + 1
}