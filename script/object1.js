// 객체 object
// 데이터 저장소 = 변수(한번에 한가지 값), 배열(2개 이상의 값)
// 특정 값에 해당되는 속성을 추가해서 데이터 관리를 용이
const cat = {
    color:'black',
    age: 1,
}
console.log(cat);
console.log(cat.color);
console.log(cat.age);
// console.log(cat.length); // undefined
console.log(`${cat.age}살 ${cat.color} 고양이 분양합니다`);
const cat2 = {
    color:['white', 'yellow', 'black'],
    age: 2,
}
console.log(cat2);
console.log(`고양이의 털 색깔은 ${cat2.color[1]}, ${cat2.color[0]}, ${cat2.color[2]}으로 이루어져 있습니다.`);
const cat3 = {
    type: '코리안 숏헤어',
    color:['흰색', '검은색'],
    age: 1,
    gender:'암컷',
    adoption: '입양 전',
    neuter: '중성화 전',
    'physical condition': '건강 양호',
}
console.log(cat3)
// console.log(cat3.'physical condition') // error
console.log(cat3['physical condition'])
console.log(cat3.adoption)
cat3.adoption = '입양 완료'
console.log(cat3.adoption)
// console.log(`${cat3.adoption = '입양 완료'}`)
cat3.neuter = '중성화 완료'
cat3.age += 1
console.log(cat3)