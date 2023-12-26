// 예약 시스템
const reservation = {
    room: 1,
    adult: 2, 
    children: 1,
    option: '금연',
};
console.log(reservation);
reservation.room += 1;
console.log(reservation);
delete reservation.option; // 객체속성제거
console.log(reservation);
reservation.option = '금연';
console.log(reservation);
// -------------------------
let boxX = 50;
let boxY = 100;
let boxZ = 0;
console.log(boxX, boxY, boxZ);

let box = {
    x: 50,
    y: 100,
    z: 0,
}
console.log(box);
// ----------------
const user = {
    name: '박',
    age: 20,
    birthday: function(){
        console.log('생축')
    },
}
console.log(user.birthday())