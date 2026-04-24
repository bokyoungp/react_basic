let a = [1,2];
let b = [3,4];

//let c = a.concat(b);
let c = [...a,...b]

console.log(c);

let d = a;
console.log("a와 d 가 동일", d == a);
d[0] = 10;
console.log( d, a );
let e = [...a];
e[0] = 20;
console.log("a와 e 가 동일", e == a);
console.log( e, a );

let student = {
    name : "홍길동",
    age : 90
}

let student1 = {...student}; // 기존 객체를 복사하여 새로운 객체 만듬
student1.score = 100;
console.log(student1, student);

let student2 = student;

let key1 = "score";
let key2 = "name";
let student3 = {...student, [key1] : 90};
let student4 = {...student, [key2] : "김연아"};
let student5 = {...student, score : 90 };
console.log(student3, student4);