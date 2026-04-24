// falsy 한 값
let value = "hello";

// if(value) {
//     console.log(value.length);
// }

console.log( value  && value.length);

// if(value =="" || value == undefined || value == 0 || value == null || value == false) {
// if(!value) {
//     console.log(value, "falsy 한 값입니다.")
// } else {
//     console.log(value, "truthy 한 값입니다.")
// }

let x = y = z = 0;
var a,b,c;
// let y = 0;
// let z = 0;
console.log(x,y,z);
console.log(a,b,c);

let f = () => {
    let c = 10;
    return c;
}
console.log(f());

const name = "홍길동", age = 20;

//const person = {name:name, age:age};
const person = {name, age};

console.log(person.name, person.age);