// 스크롤 javascript
// 1. window.scrollTo(x, y) 지정된 x, y좌표로 스크롤 이동 함수
// window.scrollTo(0, 200)

// window.onload : body 리소스 모두 읽고 onload 함수 실행
/* window.onload = () => {
    console.log('.')
    window.scrollTo(0, 200)
} */

// document.addEventListener('DOMContentLoaded',()=>{})
// 리소스 로드를 기다리지 않고 바로 함수 실행
/* document.addEventListener('DOMContentLoaded',()=>{
    console.log('.')
    setTimeout(() => {
        window.scrollTo(0, 200)
    },0);
}) */

const btn = document.querySelector('#btn')
const prev = document.querySelector('#prev')
const next = document.querySelector('#next')
const bg = document.querySelectorAll('.bg')
console.log(prev, next)
console.log(btn)

btn.addEventListener('click',()=>{
    // 절대경로
    // window.scrollTo(0, 1000)
    // window.scrollTo({left:0, top:1000})
    // 상대경로
    // window.scrollBy(0, 953)
    window.scrollTo({left:0, top:bg[2].offsetTop})
})

// bg1.style = 'scroll-behavior:smooth' // 스크롤 애니메이션

next.addEventListener('click',()=>{
    bg[0].scrollBy(1400, 0)
})
prev.addEventListener('click',()=>{
    bg[0].scrollBy(-1400, 0)
})