const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const certified_txt = document.querySelector('#certified_txt');
const certified_btn = document.querySelector('#certified_btn');
console.log(btn1,btn2,btn3,certified_txt,certified_btn); // 변수 정상 등록 확인

btn1.addEventListener('mouseup',function(){
    console.log('hello btn1')
}); /* 익명함수(콜백함수) */
btn2.addEventListener('click', function(){
    const qa = Number(window.prompt('1+1?'));
    // const result = Number(qa)
    window.alert(qa+1);
});
btn3.addEventListener('mousedown', function(){
    window.location.href = 'https://google.com';
});
certified_btn.addEventListener('click', function(){
    console.log('.'); // 이벤트 함수 정상 동작 체크
    console.log(certified_txt.value); // 값 동작 체크
    // window.alert(`${certified_txt} 입력 확인 되었습니다`);
    const result = certified_txt.value;
    // const result_txt = '입력 확인 되었습니다';
    window.alert(`${result} 입력 확인 되었습니다`);
}); /* value = 입력값 */

const result1 = document.querySelector('#result1');
const result2 = document.querySelector('#result2');
const answer_btn = document.querySelector('#answer_btn');
console.log(result1,result2,answer_btn)

answer_btn.addEventListener('click', function(){
    // console.log('.');
    // console.log(result1.value);
    // console.log(result2.value);
    const total = Number(result1.value) + Number(result2.value);
    window.alert(`총 수입은 ${total}원 입니다.`)
})

// 입금 전 잔액 : 10000원 = 버튼 클릭 전 미리 보이는 값
// 입금액 : 자유, 입금마다 +100원이 더해져서 총 잔액에 포함
// 입금 시 잔액 포함은 버튼 클릭 시 실행 구조

const bank_input = document.querySelector('#bank_input');
const bank_total = document.querySelector('#bank_total');
const bank_btn = document.querySelector('#bank_btn');
let total = 10000; //number
console.log(bank_input,bank_total,bank_btn)
bank_total.value = total; //number

bank_btn.addEventListener('click',function(){
    // console.log(bank_input.value);
    // console.log(bank_total.value);
    console.log(total + Number(bank_input.value) + 100);
    // bank_total.value = 10000; // 밖에 작성
    let input_total = Number(bank_input.value) + 100;
    // bank_total.value = Number(bank_total.value) + input100;
    total += input_total;
    bank_total.value = total.toLocaleString('ko-kr');
    // bank_total.value = Number(bank_total.value) + input_total;
    // 입금액 입력값 초기화
    bank_input.value = '';
    // bank_input.value = null;
})