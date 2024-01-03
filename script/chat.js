// "안녕" chat_txt에 입력 후 send_btn을 클릭하면
// chat_list에 <li> 태그로 chat_txt에 입력한 값을 출력하기

const chat_list = document.querySelector('.chat_list')
const chat_txt = document.querySelector('#chat_txt')
const send_btn = document.querySelector('#send_btn')
const chat_create = document.createElement('ul')

chat_list.appendChild(chat_create)
console.log(chat_list)

send_btn.addEventListener('click', function(){
    chat_create.innerHTML += `<li>${chat_txt.value}</li>`
    chat_list.appendChild(chat_create)
    chat_txt.value = '';
})

// 버튼을 누르면 . 텍스트에 써진 내용이 . 리스트에 뜬다 ..