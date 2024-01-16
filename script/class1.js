const li = document.querySelectorAll('.list li')
const btn = document.querySelector('#design_add')
const onoff = document.querySelector('#onoff')
console.log(li,btn,onoff)
// inline style로 적용되는 js css 명령어 적용
// 우선순위가 가장 높아 다른 css 충돌 없이 우선 적용할 수 있으나 css 속성이 여러 개라면 하나하나 개별 명령을 해야해서 작성이 불편하고 효율이 안 좋음
li[0].style.backgroundColor = 'yellow'
li[0].style.borderTop = '2px solid red'
li[0].style.color = 'red'
console.log(li[0])
// 제한 없이 다양한 class 속성을 가지고 있는 class를 생성해서 DOM에 적용하기
//★☆ 우선순위 : 인라인, #, (.), Tag ☆★
/* li[1].className = 'design_set1'
li[1].className += ' design_set2' */
// 우선 순위가 같으면 작성 순서에 따라 결정된다 (나중에 쓰는 것이 우선)

// DOM.classList.add() = 복합연산자 없이 메서드 구조
li[1].classList.add('design_set1','design_set2')
li[1].classList.remove('design_set1','design_set2')

// 버튼 class 제어
btn.addEventListener('click',()=>{
    li[2].classList.toggle('design_set1')
})
onoff.addEventListener('click',()=>{
    li[0].classList.toggle('showhide')
})
li[2].addEventListener('click',function(){
    this.classList.replace('design_set1','design_set2')
})

// DOM.classList.contains = 참 거짓 반환
li[5].classList.add('design_set1')
let boolean = ''
li[5].addEventListener('click',()=>{
    boolean = li[5].classList.contains('design_set1')
    console.log(boolean)
    if(boolean){
        alert('존재한다')
    }else{
        alert('존재하지 않는다')
    }
})