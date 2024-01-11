/* // Q. 콜라만 나오는 자판기
function japangi (){
    console.log('콜라')
}
// Q. 사이다만 나오는 자판기
function japangi2(){
    console.log('사이다')
}
japangi()
japangi()
japangi2()
japangi() */

// 필요한 음료수를 자유롭게 뽑을 수 있는 자판기
function japangi(drink){ // drink라는 매개변수 생성 (= let drink;), 데이터가 달라질 때 그 데이터를 받기 위해 매개변수 존재
    console.log(drink)
}

japangi('콜라')
japangi('사이다')
japangi('커피')
japangi('탄산수')

function japangi_v2(drink, num){
    console.log(drink+num+'개 나왔습니다')
}

japangi_v2('탄산수', 2)
japangi_v2('콜라', 10)
japangi_v2('따끈우유', 30)
japangi_v2('율무차', 100)

console.log('----------------')

// Q. 피연산자 2개가 항상 더해져서 결과가 나오는 함수 만들기

function calc1(a, b){
    console.log(a + b)
    console.log(`${a} + ${b} = ${a+b}`)
}

calc1(1,2)
calc1(6464646,5416531)
calc1(111111,111112)
calc1(2480,2480)
calc1(123456789,987654321)
calc1(56,1123)

// Q. 피연산자 2개와 산술연산자를 설정해서 자유로운 계산이 가능한 함수 만들기
function calc2(num1, num2, oper){
    result = oper=='-' ? num1-num2 : null;
    // result = oper == '-' ? num1-num2 : null;
    // result = oper == '*' ? num1*num2 : null;
    // result = oper == '/' ? num1/num2 : null;
    console.log(`${num1} ${oper} ${num2} = ${result}`)
}
calc2(8, 2, '-')
console.log('-------------')

// 함수의 데이터값 반환 return
let total = 0;
function func1(num){
    total = num+1
    return total // return을 먼저 쓰면 대입되기 전에 반환이 돼서 값이 나오지 않음
}
console.log(total) // 0
console.log(func1(5))
window.alert(func1(10))