// 함수 선언하기

hello()  // hello

// 함수 선언문
function hello() {
    console.log('hello')
}

// 함수 표현식
const world = function () {
    console.log('world')
}
world() // world

// return(반환) & 종료
// 함수는 return을 만나면 종료된다.
// return 뒤에 오는 코드는 실행되지 않는다.

function hello1() {
    return 'hello'
}
function hello2() {
    return;
}
function hello3() {
    return 1;
    // return 2; // 실행되지 않는다.
}
function hello4() {
    console.log('4')
    return 3;
    // console.log('5') // 실행되지 않는다.
}

console.log(hello1())
console.log(hello2())
console.log(hello3())
console.log(hello4())

// 예시
function getGrade(score) {
    if (score === 100) {
        // A+
        return 'A+'
    } else if (score >= 90) {
        // A
        return 'A'
    } else if (score >= 80) {
        // B
        return 'B'
    } else if (score >= 70) {
        // C
        return 'C'
    } else if (score >= 60) {
        // D
        return 'D'
    } else {
        // F
        return 'F'
    }
}

console.log(getGrade(50))

// 매개변수 패턴
function sum(x, y = 1) {
    return x + y
}

console.log(sum(1, 5))
console.log(sum(1))

// 객체의 구조 분해 할당
const user = {
    name : 'winter',
    age : 2,
    // email : 'eehd80@naver.com'
}

function getName ({ name }) {
   return name
}
function getEmail ({ email = '이메일이 없습니다.' }) {
    return email
}

console.log(getName(user))
console.log(getEmail(user))

// 배열의 구조 분해 할당
const animals = ['dog', 'cat', 'fish']

// 두번째 요소 반환하는 기능
function getSecond([, b = '두 번째 요소가 없습니다.', c]) {
    return [b, c]
}

console.log(getSecond(animals))

// 화살표 함수
function 함수이름(매개변수) {실행문}

(매개변수) => {실행문}

function hello() {
    console.log('hello')
}
const hello11 = function () {
    console.log('hello11')
}
const hello12 = () => {
    console.log('hello12')
}

hello()
hello11()
hello12()

// sum 함수
// 선언식
function sum1(x, y) {
    return x + y
}

// 표현식
const sum2 = function (x, y) {
    return x + y
}

// 화살표 함수
const sum3 = (x, y) => {
    return x + y
}

// 화살표 함수 축약
const sum4 = (x, y) => x + y

console.log(sum1(1, 2)) // 3
console.log(sum2(1, 2)) // 3
console.log(sum3(1, 2)) // 3

// 화살표 함수 예시
const a = () => {}
const b = x => {}
const c = (x, y) => {}
const d = x => { return x + x }
const e = x => x + x
const f = x => {
    console.log(x)
    return x * x
}

const g = () => { return { a: 1 } }
const h = () => ({ a: 1 })

const i = () => { return [1, 2] }
const j = () => [1, 2]