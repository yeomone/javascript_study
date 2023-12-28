const h1Tag = document.querySelector('h1')
console.log(h1Tag)
const liTag = document.querySelector('li')
console.log(liTag)
const titleCls = document.querySelector('.title')
console.log(titleCls)
const listCls = document.querySelector('li.list')
console.log(listCls)
const main_title = document.querySelector('#main_title')
console.log(main_title)
console.log('--------------------')
const listAll = document.querySelectorAll('.list')
console.log(listAll)
console.log(listAll[1])
console.log(listAll[2])
console.log(listAll.length)
console.log('--------------------')
// 명시적 형변환 (개발자가 직접 데이터 타입을 결정)
let a = 10;
console.log(typeof a) // number
a = '10';
console.log(typeof a) // string
// 암시적 형변환 (자바스크립트가 동의없이 자동으로 형변환)
// prompt가 받는 데이터값은 무조건 문자열로 처리된다.
let age = Number(window.prompt('당신의 나이는?'));
console.log(typeof age)
console.log(age)
console.log(Number(age))
age += 1 // 문자 + 숫자 = 문자 -> '20' + 1 = '20'1
console.log(age)