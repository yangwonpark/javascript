// 산술 연산자(arithmetic operator)
console.log(1 + 2);
console.log(5 - 7);
console.log(3 * 4);
console.log(10 / 2);
console.log(7 % 5);



// 할당 연산자(assignment operator)
let a = 2;
// a = a + 1;
a += 1;

console.log(a);



// 비교 연산자(comparison operator)
const b = 1;
const c = 1;
const d = 3;

console.log(b === c);           // 일치 연산자 : 자료형과 값이 둘 다 일치
console.log(b === d);

function isEqual(x, y) {
    return x === y;
}

console.log(isEqual(1, 1));
console.log(isEqual(2, '2'));



// 논리 연산자(logical operator)
const x = 1 === 1;
const y = 'AB' === 'AB';
const z = false;

console.log(x);
console.log(y);
console.log(z);

console.log('&&: ', x && y);
console.log('||: ', x || y || z);
console.log('!: ', !x);






