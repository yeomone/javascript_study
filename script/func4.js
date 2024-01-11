// Q. 4개 버튼 클릭 시 '접근불가' 공통 메시지 띄우기
// 로그인(콘솔) 구매하기(팝업) 장바구니(body) 관리자페이지(팝업)

const loginBtn = document.querySelector('#loginBtn')
const buyBtn = document.querySelector('#buyBtn')
const cartBtn = document.querySelector('#cartBtn')
const adminBtn = document.querySelector('#adminBtn')
console.log(loginBtn, buyBtn,cartBtn,adminBtn)

function error_message(system){
    return system + ' 접근불가'
}

loginBtn.addEventListener('click', function(){
    console.log(error_message('로그인'))
})
buyBtn.addEventListener('click', function(){
    window.alert(error_message('구매하기'))
})
cartBtn.addEventListener('click', function(){
    document.write(error_message('장바구니'))
})
adminBtn.addEventListener('click', function(){
    window.alert(error_message('관리자페이지'))
})