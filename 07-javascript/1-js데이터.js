//  string (문자열)
const string1 = 'hello'; // 큰다옴표 가능
const string2 = 'odada'; // 작은따옴표 가능
const string3 = `바보 ${string1} ${1 + 1}`; // 백틱 가능

console.log(string1, string2, string3);

// number (숫자)
const number = 123;
const negative = -123;
const float = 3.14;

console.log(number + 1);
console.log(negative + number);
console.log(float + number);

const number2 = -123.123;

console.log(number2 + undefined);
console.log(typeof (number2 + undefined));

// 숫자로 변환
const a = 0.1;
const b = 0.2;

console.log(a + b);
console.log((a + b).toFixed(1));
console.log(typeof (a + b).toFixed(1));
console.log(Number((a + b).toFixed(1)));

// boolean (참과 거짓)
const truthy = true;
const falsy = false;

if (falsy) {
  console.log('truthy');
}

// null
let age = null;
console.log(age);

// 재할당의 경우 let 사용하지 않음
age = 20;
console.log(age);

// undefined
let name;
console.log(name);

name = 'odada';
console.log(name);
