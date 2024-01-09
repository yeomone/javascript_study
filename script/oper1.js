// 이항연산자
let x = 5;
let y = x+10;
console.log(`x=${x}, y=${y}`);

// 목표) 이항연산 피연산자를 2개 적고 "=" 버튼을 클릭하면 결과값 출력
// 1. 변수 선언(val1, val2, calc1Btn, result)
const calc1 = document.querySelector('#calc1')
const val1 = calc1.querySelector('#val1')
const val2 = calc1.querySelector('#val2')
const calc1Btn = calc1.querySelector('#calc1Btn')
const result = calc1.querySelector('.result')
let total = 0
console.log(val1, val2,calc1Btn,result)
// 2. calc1Btn 클릭 이벤트
calc1Btn.addEventListener('click', function(){
    // 2-1. val1, val2 값 가져오기
    // 2-2. 위 값 더하기 
    total = Number(val1.value) + Number(val2.value);
    // 2-3. result 잡기
    // 2-4. 위 대상 결과 출력
    result.innerHTML = total.toLocaleString('ko-kr');
})
console.log('------------------------------')
console.log(6/2)
console.log(6%2)

const num1 = 10;
let num2 = 3;
let total1 = num1 % num2; // 나머지 연산의 결과는 0,1
num2 = 2;

console.log(total1)
console.log('------------------------------')
/* let a = 5;
let b = a--;
console.log(`a=${a}, b=${b}`) // 6 5 */
let a = 10
let b = 20
let c = 30
let d = 40
console.log(a,b,c,d) // 10,20,30,40
a++
b--
c++
d--
console.log(a,b,c,d) // 11,19,31,39
a = ++b // 20?
b = a++ // 
console.log(a,b,c,d) // 21,20,31,39
/* a = ++c + 10 //42
b = --d + 1//39
console.log(a,b,c,d) //  42 39 42 39 -> 42 39 틀린 이유: 먼저 d에서 1을 뺀 후에 +1을 했기 때문에 b = 39가 되지만 d는 +1을 하기 전인 38이된다 마찬가지로 c도 +10 하기 전 값인 32가 된다 */
c = a+b
d = ++c
console.log(a,b,c,d) // 21 20 42 42
a = ++c + 10
b = --d + 1
console.log(a,b,c,d) // 53 42 43 41