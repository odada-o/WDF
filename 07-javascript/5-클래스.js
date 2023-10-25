// const animals = ['개', '고양이', '참새']; // 배열 리터럴

// 생성자 함수로 배열을 만들 수 있다.
// const animals = new Array('개', '고양이', '참새');

// console.log(animals); // [ '개', '고양이', '참새' ]
// console.log(animals.length); // 3
// console.log(animals[1]); // 고양이
// console.log(animals.includes('개')); // true
// console.log(animals.includes('인간')); // false
// 위와 같이 length, includes 등을 프로토타입 속성이라고 한다.

// prototype을 이용한 메소드 생성
const animals = new Array('dog', 'cat', 'fish');

// 배열의 프로토타입에 odada 메소드 추가
Array.prototype.odada = function () {
    console.log(this);
};

animals.odada(); // [ 'dog', 'cat', 'fish' ]

const arr = [1, 2, 3];
arr.odada(); // [ 1, 2, 3 ]

// 메소드를 사용한 fullname 출력
// const winter = {
//     firstName: 'winter',
//     lastName: 'son',
//     getFullName() {
//         // 일반 함수에서 this는 호출한 객체를 가리킨다.
//         return `${this.firstName} ${this.lastName}`;
//     }, // 메소드
// };

// const fall = {
//     firstName: 'fall',
//     lastName: 'kim',
// };

// console.log(winter); // { firstName: 'winter', lastName: 'son' }
// console.log(fall); // { firstName: 'fall', lastName: 'kim' }
// console.log(winter.getFullName()); // winter son
// // console.log(fall.getFullName()); // fall kim
// console.log(winter.getFullName.call(fall)); // fall kim

// 생성자 함수를 통해 객체를 만들어보자.
// function User(first, last) {
//     this.firstName = first;
//     this.lastName = last;
// }

// User.prototype.getFullName = function () {
//     return `${this.firstName} ${this.lastName}`;
// };

// class 함수를 이용한 생성자 함수
class User {
    constructor(first, last) {
        this.firstName = first;
        this.lastName = last;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

// new를 통해 객체를 생성한다.
const winter = new User('winter', 'son');
const fall = new User('fall', 'kim');

console.log(winter); // User { firstName: 'winter', lastName: 'son' }
console.log(fall); // User { firstName: 'fall', lastName: 'kim' }
console.log(winter.getFullName()); // winter son
console.log(fall.getFullName()); // fall kim
