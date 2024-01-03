const header = document.querySelector('header');
const headerChild = header.childNodes;
console.log(header, headerChild);
console.log(header.childElementCount); // length와 동일하게 1부터 센다

console.log(headerChild[1]); // h1
console.log(headerChild[3]); // nav
console.log(headerChild[1].innerText); // logo
console.log(headerChild[1].innerHTML); // <a>logo</a>
console.log(headerChild[3].innerText); // menu1 menu2
console.log(headerChild[3].innerHTML); // <a>menu1</a>, <a>menu2</a>

// headerChild[1].innerText = "로고";
headerChild[1].childNodes[0].innerText = "로고";
headerChild[1].children[0].innerHTML = '로고로고';

// ------------------------------

console.log(headerChild[3].childNodes[1])
console.log(headerChild[3].childNodes[3])

const menu1 = headerChild[3].childNodes[1];
const menu2 = headerChild[3].childNodes[3];

menu1.addEventListener('mouseover', function(){
    menu1.innerText = "메뉴1";
})
menu2.addEventListener('mouseover', function(){
    menu2.innerText = "메뉴2";
})

menu1.addEventListener('mouseout', function(){
    menu1.innerText = "menu1";
})
menu2.addEventListener('mouseout', function(){
    menu2.innerText = "menu2";
})

// ---------------------

const cart = document.querySelector('.cart');
let all_num = document.querySelector('.all');
console.log(cart, all_num)

console.log(cart.childElementCount)
all_num.innerHTML = cart.childElementCount;