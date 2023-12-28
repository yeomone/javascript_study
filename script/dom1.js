// DOM document object model
const h1Tag = document.getElementsByTagName('h1')
console.log(h1Tag[0]);

/* 
    getElementsByTagName
    *HTML에 TagNode가 2개 이상일 때 그 중 1개만 동적인 기능이 적용되어 DOM으로 등록이 필요한 거라면 변수 지정 시 [index]설정하고 대입하기
    * HTML에 TagNode가 2개 이상일 때 그 중 여러 개에 동적인 기능이 적용되어 DOM이 된다면 변수 지정시에는 [index]없이 대입하고 해당 DOM 변수 호출 시 필요한 경우 [index] 사용하기
*/

const ulTag = document.getElementsByTagName('ul')[0]
console.log(ulTag);
const liTag = ulTag.getElementsByTagName('li')
console.log(liTag[0]);
console.log(liTag[1]);
console.log(liTag[2]);
// console.log(liTag[0],liTag[1],liTag[2]);
const aTag = liTag[1].getElementsByTagName('a')
console.log(aTag);
const allATag = document.getElementsByTagName('a')
console.log(allATag[0]);
console.log(allATag[1]);
console.log(allATag[2]);
// console.log(allATag[0],allATag[1],allATag[2]);

/* 
    DOM Node 변수 지정 시
    HTMLCollection 결과는 변수가 정상인지 오류인지 간단한 확인 시에만 사용하고 실제로 DOM Node 변수를 이용한 동적인 결과를 만들어야 할 때는 직접적인 접근으로 대상을 하나씩 개별인식하게 만들어야한다. [index]
*/