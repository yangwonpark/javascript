import random from './getRandom.js'

// // 산술 연산자(arithmetic operator)
// console.log(1 + 2);
// console.log(5 - 7);
// console.log(3 * 4);
// console.log(10 / 2);
// console.log(7 % 5);



// // 할당 연산자(assignment operator)
// let a = 2;
// // a = a + 1;
// a += 1;

// console.log(a);



// // 비교 연산자(comparison operator)
// const b = 1;
// const c = 1;
// const d = 3;

// console.log(b === c);           // 일치 연산자 : 자료형과 값이 둘 다 일치
// console.log(b === d);

// function isEqual(x, y) {
//     return x === y;
// }

// console.log(isEqual(1, 1));
// console.log(isEqual(2, '2'));



// // 논리 연산자(logical operator)
// const x = 1 === 1;
// const y = 'AB' === 'AB';
// const z = false;

// console.log(x);
// console.log(y);
// console.log(z);

// console.log('&&: ', x && y);
// console.log('||: ', x || y || z);
// console.log('!: ', !x);



// // 삼항 연산자(ternary operator)
// let t = 1 < 2;

// if (t) {
//     console.log('참');
// } else {
//     console.log('거짓');
// }

// console.log(t ? '참' : '거짓');



// 조건문 (If statement)
let a = random();

console.log(a);

if(a === 0) {
    console.log('a is 0');
} else if(a === 2) {
    console.log('a is 2');
} else if(a === 4) {
    console.log('a is 4');
} else {
    console.log('rest...');
}



// 조건문 (Switch statement)

switch (a) {
    case 0:
        console.log('a is 0');
        break;
    case 2:
        console.log('a is 2');
        break;
    case 4:
        console.log('a is 4');
        break;
    default:
        console.log('rest...');
}