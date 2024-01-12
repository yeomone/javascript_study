console.log(true) // true == '참' == 1
console.log(false) // false == '거짓' == 0
console.log('false')
console.log(true+1) // 2, true = 1 + 1
console.log(true+true) // 2, true = 1 
console.log(true+false) // 1
console.log(true+true+'true') // 2true
console.log(typeof true) // boolean
console.log(typeof (true+true)) // number
console.log(typeof (false+10)) // number
console.log('-------------------')
console.log("42"==42) // true(자료가 같기 때문(데이터타입 무시))
console.log("42"==17+15+6+4) // true
console.log("42"===42) // false(데이터 타입이 다르기 떄문)
console.log(10 != "10") // false(자료가 같기 때문에(데이터타입 무시))
console.log(10 !== "10") // true(자료가 다르기 때문에)
console.log(5 < 7) // true
console.log(5 > 7) // false
console.log("5" < 7) // true
console.log(10 <= 20) // true
console.log(10 >= 20) // false
console.log('-----------')
let a = 10
let b = 20
let c = "15"
let d = 15
let result

result = a <= d
console.log(result)
console.log('-----------')
a = true;
b = false;

// 논리연산자란?
// 비교연산 또는 논리데이터를 좌우 두 값으로 두고 논리적으로 비교하는 연산자
result = a && b // true && false = false
console.log(result)

result = a || b // true || false = true
console.log(result)

console.log(!a) // false 값이 반전됨
console.log(!b) // true 값이 반전됨
console.log(a,b) // true false(원본 데이터는 영향 없음)

// 논리 연산자 우선순위
// Not >> AND >> OR
result = true || false // true
result = (true || false) && false // false
result = (true || false) && !false // true
result = !(true || false) && !false // false
console.log(result)
console.log('-------------')

// 조건문
// 1. 목표 세우기 (날씨가 맑으면 산책 간다)
// 1-1. 세부 목표 나누기
// 1-2. 조건 : 날씨가 맑으면
// 1-3. 조건이 참일 때 실행 : 산책 간다
// 2. 조건문 문법 정리
// 2-1. 조건 : if(날씨가 맑으면)
// 2-1-1. 조건 결과가 논리데이터로 나오도록 비교연산자 사용 : if(날씨==맑음)
// 2-2. 조건이 참일 때 실행 : 실행 메서드 결정
// 2-2-1. window.alert(산책)
// --------------------------

// 1. 목표 세우기 (날씨가 흐리지 않으면 운동 한다)
// 1-1. 세부 목표 나누기
// 1-2. 조건 : 날씨가 흐리지 않으면
// 1-3. 조건이 거짓일 때 실행 : 운동 한다
// 2. 조건문 문법 정리
// 2-1. 조건 : if(날씨가 흐리지 않으면)
// 2-1-1. 조건 결과가 논리데이터로 나오도록 비교연산자 사용 : if(날씨 != 흐림)
// 2-2. 조건이 참일 때 실행 : 실행 메서드 결정
// 2-2-1. : window.alert(운동)
// -------------------------

// 1. 목표 세우기 (하루 걸음 수가 5천 걸음 이상이면 간식을 먹는다)
// 2. 조건 : if(하루 걸음 수 >= 5천 걸음)
// 3. 조건이 참일 때 : window.alert(간식 먹기)

const x = 20;
const y = "20";

// 1. x가 y보다 작을 때 참
if(x<y){
    console.log('x는 y보다 작다')
}

// 2. x가 y와 다를 때 참
if(x!==y){
    console.log('x는 y와 다르다')
}

// 3. x와 y가 같으면 참
if(x==y){
    console.log('x는 y와 같다')
}