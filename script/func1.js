/* // 함수 스코프
// 지역변수와 전역변수
let b = 20;
let c = 30;
let a = '';
scope1 // 함수호출 위치는 생성위치와 관계 없다
function scope1(){
    a += 10;
    console.log(a,b,c)
}
console.log(a+(b+c)) // 함수 호출 전 : undefined +20 + 30 */

// 함수 스코프 연습
let x = 1
let y;

function func1 (){
    y = 5
    console.log(x+y)
}
function func2(){
    let z = 10
    func1()
    console.log(x+y+z)
}
func2()
console.log('--------')
const btn = document.querySelector('#btn')
const btn2 = document.querySelector('#btn2')
console.log(btn)

/* btn.addEventListener('click', function(){
    console.log('결과 테스트')
}) */

function testFucn(){
    console.log('결과 테스트')
}
btn.addEventListener('click', testFucn)
btn2.addEventListener('click', testFucn)
// 이벤트 함수 개별 선언 연습
const num_view = document.querySelector('.num_view')
const minus = num_view.querySelector('#minus')
const plus = num_view.querySelector('#plus')
const num = num_view.querySelector('#num')
const price_view = document.querySelector('.price')

let price = 4000;
let number = 1;
let total;
// 수량(num.value) 1개 미만이 되었을 때 최소 수량은 1개입니다.
// 수량(num.value) 10개 초과 되었을 때 최대 수량은 10개입니다.

function funcMinus(){
    // --num.value
    // total  = --num.value * price
    // price_view.innerHTML = total.toLocaleString('ko-kr')+'원';
    // --num.value

    number > 1 ? number-- : alert('최소 구매 수량은 1개입니다.')
    num.value = number;
    price_view.innerText = (price*number).toLocaleString('ko-kr')+'원';
}
function funcPlus(){
    // ++num.value
    // number < 10 ? number : alert('최대 구매 수량은 10개입니다.')
    total  = ++num.value * price
    price_view.innerHTML = total.toLocaleString('ko-kr')+'원';
}
minus.addEventListener('click', funcMinus)
plus.addEventListener('click', funcPlus)
