/* let price = 1000;
let num = Number(window.prompt('구입수량은?','숫자만 입력하세요'))
console.log(`구입수량은 ${num}개입니다`)
console.log(`구입수량에 +1 이벤트 행사중 총 수량은 ${num+1}입니다`)
console.log(`총 가격은 ${num*price}원입니다`)

/* let num2 = window.prompt('구입수량은?','')
console.log(`구입수량은 ${num2}개입니다`)
console.log(`구입수량에 +1 이벤트 행사중 총 수량은 ${Number(num2)+1}입니다`) */

// NaN == Not A Number */

const textInput = document.querySelector('#text');
const numInput = document.querySelector('#number')
const resultBtn = document.querySelector('#btn');
console.log(textInput, numInput, resultBtn);

function func1(){
    console.log('test')
    console.log(textInput.value)
    console.log(numInput.value)

    console.log(typeof textInput)
    console.log(typeof textInput.value)

    console.log(typeof numInput)
    console.log(Number(numInput.value)+1)
    
    let result = Number(numInput.value)
    console.log(typeof result)
    console.log(result+1)
}