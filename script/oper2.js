let number1 = 10;
let number2 = 20;
let result;
number1--;
console.log(number1); // 9
number1++;
console.log(number1); // 10
result = number2++;
console.log(result); // 21 -> 오답 이유 : number2를 먼저 대입한 후에 1을 더하기 때문에 result에 20이 대입된 후에 21이 된다 따라서 result는 20이 되고 number2는 그 후에 21이 된다
result = ++number2;
console.log(result); // 21 -> 오답 이유 : 위와 연결되어 number2가 21이 된 상태에서 1이 먼저 더해진 후에 result에 대입되기 때문에 result와 number2 모두 22가 된다
result = result++
console.log(result) // 22
number2 = number1 + result++
console.log(number2) // 32 
console.log('----------')
// 복합대입연산자
let number = 10;
number += 5; // number = number + 5
console.log(`변경 값 = ${number}`) // 15
number -= 5; // number = number - 5
console.log(`변경 값 = ${number}`) // 10
number *= 5; // number = number * 5
console.log(`변경 값 = ${number}`) // 50
number /= 5; // number = number / 5
console.log(`변경 값 = ${number}`) // 10
number %= 2; // number = number % 2
console.log(`변경 값 = ${number}`) // 0
console.log('------------')
// 삼항연산자
// 조건 ? 조건값 참일 때 실행결과 : 조건값 거짓일 때 실행결과
// 조건에 따라 참과 거짓을 구분하는데 사용하는 연산자
// = 대입연산자
// == 비교연산자(같다)
let x = 5;
let y = x+10;
y = x
let result_xy = x==y ? 'x와 y는 같다' : 'x와 y는 다르다'
console.log(result_xy);
console.log('-----------');
/* let age = window.prompt('몇살이세요?')
// age 입력받은 데이터가 18살 이상이면 성인 아니면 미성년자 콘솔값 출력
let result_age = age>17 ? '성인' : '미성년자'
console.log(result_age) */
// 객체 + 삼항연산자
let user = [
    {
        name:'lee',
        score:80,
    },{
        name:'kim',
        score:100,
    }
]
// 최고 점수 받은 학생의 이름 저장 변수
const max_score_name = user[0].score > user[1].score ? user[0].name : user[1].name;
console.log(max_score_name);
console.log(`이번 달 1등 학생은 ${max_score_name}님 입니다.`)