// 함수 매개변수와 리턴
// 매개변수 : 함수 내 변경데이터가 있을 경우 함수 호출 시 변경 인수값을 매개변수에 전달하기 위해서
// 리턴 : 실행 결과가 매번 다른 경우 데이터 값만 함수 외부로 반환
// 리턴의 주의사항 : 리턴을 만나면 함수가 종료된다. 리턴 아래 스크립트를 읽지 못한다.

const dan99DOM = document.querySelector('.dan99')
let dan99Total = '';

function dan99(dan){
    dan99Total += `${dan}x1 = ${dan*1}<br>`
    dan99Total += `${dan}x2 = ${dan*2}<br>`
    dan99Total += `${dan}x3 = ${dan*3}<br>`
    dan99Total += `${dan}x4 = ${dan*4}<br>`
    dan99Total += `${dan}x5 = ${dan*5}<br>`
    dan99Total += `${dan}x6 = ${dan*6}<br>`
    dan99Total += `${dan}x7 = ${dan*7}<br>`
    dan99Total += `${dan}x8 = ${dan*8}<br>`
    dan99Total += `${dan}x9 = ${dan*9}<br>`
    dan99Total += `<hr>`
    return dan99Total
}
dan99DOM.innerHTML = dan99(2)
dan99DOM.innerHTML = dan99(3)
dan99DOM.innerHTML = dan99(4)
dan99DOM.innerHTML = dan99(5)
dan99DOM.innerHTML = dan99(6)
dan99DOM.innerHTML = dan99(7)
dan99DOM.innerHTML = dan99(8)
dan99DOM.innerHTML = dan99(9)
// ---------------------------------

const depositBtn = document.querySelector('#depositBtn')
let deposit_pay;

let default_deposit = 10000;

function deposit_fun (){
    // let total = window.alert(`${deposit_pay}원 입금하셨습니다. 총 잔액은 ${default_deposit+=Number(deposit_pay)}원입니다. `)
    // return total;
    
    // let total = default_deposit += Number(deposit_pay);
    // return `${deposit_pay}원 입금하셨습니다. 총 잔액은 ${total.toLocaleString('ko-kr')}원입니다.`
    
    // 1. 총 잔액 + 입금액
    default_deposit += deposit_pay;
    // 2. 입금액과 총 잔액을 대입받는 변수
    let total = `${deposit_pay.toLocaleString('ko-kr')}원 입금하셨습니다. 총 잔액은 ${default_deposit.toLocaleString('ko-kr')}원입니다.`
    return total;
}

depositBtn.addEventListener('click',function(){
    deposit_pay = Number(window.prompt('입금 금액을 입력하세요'))
    // deposit_fun()
    window.alert(deposit_fun())
})

// Q. (기존잔액 : 10,000원) prompt 입금액을 입력하고 버튼을 클릭하면 deposit_fun 함수가 호출돼서 0000원 입금하셨습니다. 총 잔액은 0000원입니다. 출력하기