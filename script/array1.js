// 외부 스크립트
let a = 'ABC';
console.log(`a => ${a}, a의 type은 ${typeof a}`);
let b = 'DF';
console.log(`b => ${b}, b+adml type은 ${typeof (b+a)}`);
const alpa = ['ABC', 'DEF'];
console.log(`alpa 배열의 값은 ${alpa}`);
console.log(`배열은 0부터 시작하기 때문에  ABC를 출력하고 싶으면 ${alpa[0]}`); /* index */
console.log(`배열의 개수 확인 => ${alpa.length}`); // 총 개수 length 속성

const yoil = new Array('월', '화', '수', '목', '금', '토', '일');
const weather = new Array('맑음', '흐림', '비', '눈');
// 월(맑음)
console.log(`${yoil[0]}(${weather[0]})`)
// 화(눈)
console.log(`${yoil[1]}(${weather[3]})`)
// 수(비)
console.log(`${yoil[2]}(${weather[2]})`)
// 목(흐림)
console.log(`${yoil[3]}(${weather[1]})`)
// 금(맑음)
console.log(`${yoil[4]}(${weather[0]})`)
// 토(맑음)
console.log(`${yoil[5]}(${weather[0]})`)
// 일(눈)
console.log(`${yoil[6]}(${weather[3]})`)
// ---------------------------------
const nameArray = ['김', '이', '박', '최']
console.log(nameArray)
// 배열 값 추가, 삭제 메서드(자주 사용하는 종류)
nameArray.push('수'); // 배열의 끝에 새로운 값 추가
console.log(nameArray);
nameArray.unshift('방'); // 배열의 시작에 새로운 값 추가
console.log(nameArray);
nameArray.pop(); // 끝 값 제거
console.log(nameArray);
nameArray.shift(); // 시작 값 제거
console.log(nameArray);
nameArray.pop();
nameArray.shift();
nameArray.push('독고');
nameArray.unshift('남궁');
console.log(nameArray);
nameArray.push('염');
nameArray.push('곽');
console.log(nameArray);
// ----------------------------------
const movie = new Array(8);
console.log(movie);
// movie.push('a1');
// console.log(movie);
// movie.unshift('a1_');
// console.log(movie);
movie[0] = `A1`;
console.log(movie);
movie[1] = `B3`;
console.log(movie);
console.log('---------------')
const megaBox = new Array ();
console.log(megaBox);
megaBox.push('a1');
console.log(megaBox);
megaBox.push('b3');
console.log(megaBox);
megaBox.pop();
console.log(megaBox);