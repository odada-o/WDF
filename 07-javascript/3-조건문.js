// 조건문

// if문
// if (조건) {
//   실행문;
// }

// if-else문
// if (조건) {
//   실행문;
// } else {
//   실행문;
// }

// if-else if문
// if (조건) {
//   실행문;
// } else if (조건) {
//   실행문;
// } else {
//   실행문;
// }

// 예시
function isPositive(num) {
  if (num > 0) {
    return '양수입니다.';
  } else if (num < 0) {
    return '음수입니다.';
  } else {
    return '0입니다.';
  }
}

console.log(isPositive(1)); // 양수입니다.
console.log(isPositive(-1)); // 음수입니다.
console.log(isPositive(0)); // 0입니다.

// switch문
// switch (조건) {
//   case 값1:
//     실행문; // 조건과 값1이 일치하면 실행
//     break;

//   case 값2:
//     실행문; // 조건과 값2가 일치하면 실행
//     break;

//   default:
//     실행문; // 조건과 일치하는 값이 없을 때 실행
// }

// 예시
function getSound(animal) {
  switch (animal) {
    case '개':
      return '멍멍';
    case '고양이':
      return '야옹 ㅇㅇㅇㅇ';
    case '참새':
      return '짹짹';
    case '비둘기':
      return '구구 구 구';
    default:
      return '...?';
  }
}

console.log(getSound('개')); // 멍멍
console.log(getSound('고양이')); // 야옹
console.log(getSound('여울이')); // ...?

// if문으로 변환=
function getSound2(animal) {
  if (animal === '개') return '멍멍';
  if (animal === '고양이') return '야옹';
  if (animal === '참새') return '짹짹';
  if (animal === '비둘기') return '구구 구 구';
  return '...?';
}

console.log(getSound2('개')); // 멍멍

// 반복문
// for문

// for (초기화; 조건; 종료식) {
//   실행문;
// }

for (let i = 0; i < 10; i = i + 1) {
  console.log(i); // 0부터 9까지 출력
}
