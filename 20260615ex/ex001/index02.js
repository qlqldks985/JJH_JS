// 제어문 - 조건문(if문, switch ~ case문)
/*
if문 (조건식) {
    실행문
}
*/
let age = 20;
if (age >= 18) {
    console.log('성인 입니다.')
}

/*
if ~ else문 --> 양자택일
*/

let isLogin = false;
if (isLogin) {
    console.log('로그인 되어 있어요.')
} else {
    console.log('로그인 되어 있지 않아요.')
}

/*
if ~ else if ~ else if ....... --> 다중 비교
*/
let score = 85;
if (score >= 90) {
    console.log('A학점');
} else if (score >= 80) {
    console.log('B학점')
} else if (score >= 70) {
    console.log('C학점')
} else if (score >= 60) {
    console.log('D학점')
} else {
    console.log('F학점')
}

// switch문 --> 콕! 찝어서 실행
let day = 0
switch(day) {
    case 1:
        console.log('월요일')
        break;

    case 2:
        console.log('화요일')
        break;

    case 3:
        console.log('수요일')
        break;

    case 4:
        console.log('목요일')
        break;

    default:
        console.log('몰라요!!!')
        break;
}


// 제어문 - 반복문(for문, while문)
// for문 -> 횟수에 의한 반복 실행
/*

for 변수 in 반복 범위 :
실행문

1 에서부터 10까지의 정수의 합
for (초기식; 조건식; 증감식) {
    반복 실행문
}
*/

let sum = 0;
for (let n = 1; n < 11; n++) {
    sum += n;
}
console.log('sum: ', sum);  //55

let n = 1;
for (; n < 11; n++) {
    sum += n;
}
console.log('sum: ', sum);

for (let i = 10, j = 0; i > 0, j < 10; i--, j++) {
    console.log('i: ', i);
    console.log('j: ', j);
}   // j를 없애고 다시 굴리면 무한루프



// 1부터 10까지 1씩 증가해야!

// while문 -> 조건에 의한 반복 실행
/*
while (조건식) {
    실행문
}
*/

// let k = 3;
// while (k <10) {
//     console.log('k: ', k);
//     k++;
// }

let k = 3;
while (k <10) {
    console.log('k: ', k);
    if (k >= 7) break;
    k++;
}

// do ~ while 문
let count = 5;
do {
    console.log('count: ', count);     // 5 4 3 2 1
    count--;
} while(count > 10);

let pt = prompt('숫자를 입력하세요:');
console.log('pt: ', typeof(Number(pt)));