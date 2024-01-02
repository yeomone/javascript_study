// DOM의 부모잡기 : parentNode, parentElement
const aNode = document.querySelectorAll('nav > a');
console.log(aNode, aNode[0], aNode[1]); // nav
console.log(aNode[0].parentNode); // nav
console.log(aNode[0].parentElement); // nav
console.log(aNode[1].parentElement.parentElement); // header
console.log(aNode[1].parentNode.parentNode) // header

aNode[0].addEventListener('mouseover', function(){
    // aNode[0].parentNode.style = 'background-color: yellow;'
    // aNode[0].parentNode.parentNode.style = 'background-color: skyblue;'
    aNode[0].parentNode.style.backgroundColor = 'yellow';
    aNode[0].parentNode.parentNode.style.backgroundColor = 'skyblue';
})
aNode[0].addEventListener('mouseout', function(){
    aNode[0].parentNode.style.background = 'none';
    aNode[0].parentNode.parentNode.style.background = 'none';
})

// --------------javascript에서 CSS 동적 설정
// 객체 속성(css) 이벤트 메서드
// 자바스크립트에서 css를 적용할 땐 인라인 스타일로 적용된다.
// 인라인 스타일은 모든 스타일 기준 가장 우선순위가 높으므로
// 기존 .css파일에 디자인 되어있는 속성이 있을 때 그 값보다 우선적용된다.
// aNode[0].parentNode.style = 'background-color: yellow; border: 2px solid red;';
// 추가속성 적용 시 덮어쓰기 됨
// aNode[0].parentNode.style = 'transform:skewX(20deg);'
// 객체.객체.속성 = '속성:값; 속성:값; 속성:값';
// aNode[1].parentNode.style.backgroundColor = 'pink';
// aNode[1].parentNode.style.border = '3px solid blue';
// aNode[1].parentNode.style.transform = 'rotate(10deg)';
// 객체.객체.속성.속성 = '값';
