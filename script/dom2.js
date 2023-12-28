const titleCls = document.getElementsByClassName('title')
console.log(titleCls);
console.log(titleCls[0]);
console.log(titleCls[1]);
const listCls = document.getElementsByClassName('list')
console.log(listCls);
const ulTag = document.getElementsByTagName('ul')[0];
const liListCls = ulTag.getElementsByClassName('list')
console.log(liListCls);
// console.log(liListCls[1],liListCls[2]);

const gnbCls = document.getElementsByClassName('gnb')[0]
console.log(gnbCls);
// const liTag = gnbCls.getElementsByTagName('li')
// console.log(liTag[0],liTag[3]);
const liTag1 = gnbCls.getElementsByTagName('li')[0]
const liTag2 = gnbCls.getElementsByTagName('li')[3]
console.log(liTag1);
console.log(liTag2);
const lnbCls = gnbCls.getElementsByClassName('lnb')
console.log(lnbCls[0],lnbCls[1]);
const lnbCls1 = gnbCls.getElementsByClassName('lnb')[0]
console.log(lnbCls1);
const lnbCls2 = gnbCls.getElementsByClassName('lnb')[1]
console.log(lnbCls2);
/* const lnbCls1 = liTag1.getElementsByClassName('lnb')[0]
console.log(lnbCls1);
const lnbCls2 = liTag2.getElementsByClassName('lnb')[0]
console.log(lnbCls2); */