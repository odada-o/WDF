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