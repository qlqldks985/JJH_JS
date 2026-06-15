// 원시 타입
var num = 42;       // Number
var pi = 3.14;       // Number
var name = '홍길동';  // String
var name = "홍길동";  // String
// var name = "홍길동';  // String (x)
var isStudent = true;   // Boolean
var nothing;             // Underfined
// 파이썬만 대문자로 시작한다.

console.log('num: ', num);
console.log('num type: ', typeof(num));

console.log('pi: ', pi);
console.log('pi type: ', typeof(pi));

console.log('name: ', name);
console.log('name type: ', typeof(name));

console.log('isStudent: ', isStudent);
console.log('isStudent type: ', typeof(isStudent));

console.log('nothing: ', nothing);
console.log('nothing type: ', typeof(nothing));

// 참고 타입
var fruits = ['사과', '바나나', '포도'];     // Array
console.log('fruits: ', fruits);
console.log('fruits length: ', fruits.length);
console.log('fruits type: ', typeof(fruits));
var person = {
    'name': '홍길동',
    'age' : 20,
    'mail' : 'gildong@gmail.com'
}; // object
console.log('person: ', person);
console.log('person type: ', typeof(person));

var myFun = function() {
    console.log('myFun() CALLED!!');
}()

console.log('myFun: ', myFun);
console.log('myFun type: ', typeof(myFun));