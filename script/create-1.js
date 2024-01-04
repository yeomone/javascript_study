// 아이디 찾기-인증번호 받기
/* 
    Q. 인증번호 받기 클릭 시 버튼 다음 형제 위치에 "인증번호가 발송되었습니다" 출력하기
*/
/* const frm = document.querySelector('form')
const btn = document.querySelector('#authentication_btn');
const input_num = document.querySelector('#authentication_input');
const info = document.createElement('span');

frm.appendChild(info)

btn.addEventListener('click', function(){
    info.innerText = "인증번호가 발송되었습니다";
}) */

const frm = document.querySelector('#id_search form')
const btn = document.querySelector('#authentication_btn');
const id_send_message = document.createElement('span');

id_send_message.innerText = "인증번호가 발송되었습니다";

btn.addEventListener('click', function(){
    frm.appendChild(id_send_message)
    // id_search.insertBefore(id_send_message, id_search.firstElementChild)
})

// 객체.appendChild(Node) 마지막 자식 노드 추가
// 객체.insertBefore(삽입Node, 기존 시작 자식 노드) 첫번째 자식 노드 추가
// 부모.insertBofore(삽입, 부모.firstChild)

// ------------------------

/* Q. 인증번호 입력칸 authentication_input에 값을 입력하면 form의 이전 형제 위치에 "인증번호가 틀렸습니다" 출력하기 */

const authentication_input = document.querySelector('#authentication_input');
const message_error = document.createElement('p')
const id_search = document.querySelector('#id_search')

message_error.innerText = "인증번호가 틀렸습니다";
console.log(authentication_input, message_error)

authentication_input.addEventListener('blur', function(){
    console.log('.');
    frm.insertBefore(message_error, frm.firstChild)
})