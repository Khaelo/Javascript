//'use strict';

//console.log('Bonjour');


let username;
username = 'Luca';
username = 'Toto';
username = 'Tata';
username = 'Titi';
username = 3;

// let username = 'Luca';

let myString1 = "Hello World";
let myString2 = 'Hello World';
let myString3 = `
Hello
`;

const userStatus = 1;

let myNumber = 1.5;

let myBoolean = true;

let myUndefined = undefined;

let myNull = null;

//NaN

console.log('Hello' + ' World'); 

const str1 = 'Hello';
const str2 = 'World';
console.log(`${str1} ${str2}`);

let a = 10 + 32;
a +=8;
console.log('a', a);

let b = 10 - 5;
b -=8;
console.log('b', b);

let c = 5 * 7;
c *=2;
console.log('c', c);

let d = 10 / 2;
d /=2;
console.log('d', d);

let e = 5;
console.log(e++);
console.log(e);

let f = 5;
console.log(f--);
console.log(f);

console.log([1, 2, 3] * 30);

console.log(+'3');
console.log(+true);

console.log('4' + 3); //'43'
console.log(3 + 4 + '7'); //'77'
console.log('3' + 4 + 7); //'347'

console.log('2 > 1', 2 > 1); //true
console.log('2 < 1', 2 < 1); //false

console.log('20 >= 10', 20 >= 10); //true

console.log('10 >= 10', 10 >= 10); //true

console.log(4 != '4'); // 4 != 4 false
console.log(4 !== '4'); //true

console.log('hello' === 'Hello'); //false

/*
if (condition){
    console.log('1');
} else if(condition2){
    console.log('2');
} else{
    
}
*/

if(5 >0 || 5 > 10){
    console.log('1');
}else{
    console.log('2');
}

let ab = 20 / 2;
if(ab > 10 || ab < 15){
    console.log('Yes');
}else{
    console.log('No');
}

// can see the group
//let isPrivate = false;
//let isMember = false;

// can't see the group
let isPrivate = true;
let isMember = false;

if (isPrivate === false || (isPrivate === true && isMember === true)){
    console.log('can see the groupe');
}else{
    console.log(`can't see the group`)
}

const today = 'lundi';
if (today === 'lundi1'){
    console.log(`Aujourd'hui on est: ${today}`);
}else if(today === 'mardi'){
    console.log(`Aujourd'hui on est: ${today}`);
}else if(today === 'mercredi'){
    console.log(`Aujourd'hui on est: ${today}`);
}

switch(today){
    case 'lundi':
    console.log(`Aujourd'hui on est: ${today}`);
    break;
    case 'mardi':
    console.log(`Aujourd'hui on est: ${today}`);
    break;
    case 'mercredi':
    console.log(`Aujourd'hui on est: ${today}`);
    break;
}

let username1 = prompt('What is your username');
console.log('username', username1);

/*
if(username){
    alert(`Nice to meet you ${username}`):
}else{
    alert(`Don't be shy !`)
}
*/

username1 !== null ? 
    alert(`Nice to meet you ${username1}`):
    alert(`Don't be shy !`)

function myFunc(text){
    //codeHere
    console.log(text);
    return;
}
console.log('myFunc', myFunc());

/*
const myFunc2 = (text) => {
    //codeHere
    return text;
}
console.log('myFunc2', myFunc2());
*/

/*
const sum = (p1, p2 = 0) =>{
    return p1 + p2;
}

console.log(sum(4, 10));
*/

const sum = (p1, p2 = 0) => p1 + p2;

console.log(sum(4, 10));

const truncate = (str, lenght, trail='...') =>{
    if(str,lenght > lenght){
        return str.substring(0, lenght) + trail
    }else{
        return str
    }
}

const res1 = truncate('I will be truncated', 15, '->') // returns 'I will be trunc->'
console.log('res1', res1)
const res2 = truncate('I will be truncated', 5) // returns 'I wil...'
console.log('res2', res2)

const myArray = [1, "hello", Array(3)];
console.log(typeof myArray);
console.log(myArray [0]);
console.log(myArray [1]);
console.log(myArray.length);
console.log(myArray[myArray.length - 1]);

const arr = [0, 1, 2, 3, 4, 5];
arr.map(x => {
    console.log('x', x);
    return x / 2;
})

let resu = [];
arr.forEach(num =>{
    console.log('num', num);
    resu.push(num / 2);
})
console.log('res', resu);

/*
const myAr1 = [1, 2, 3];
const myAr2 = myAr1;
myAr2[0] = 0;
console.log(myAr1) //[0, 2, 3];
console.log(MyAr2) //[0, 2, 3];
*/

const myArr1 = [1, 2, 3];
const myArr2 = [...myArr1];

const user = {
    id: 1,
    name: 'Luca',
    email: 'email@email.com',
    car: {
        color: 'red',
    },
    test: [1, 2, 3],
}

console.log(user.id); //1
console.log(user['name']); //Luca
console.log(user.car.color); //red
console.log(user.car['color']); //red
console.log(user['car'].color); //red

const myProp = 'car';
console.log(user[myProp].color); //red

const cart = [
    { item: 'a', price: 2, quantity: 1 },
    { item: 'b', price: 3, quantity: 1 },
    { item: 'c', price: 4, quantity: 1 }
  ];

const result = cart.reduce((acc, curVal) =>{
    console.log('acc', acc);
    console.log('curVal', curVal);
    return acc +=curVal.price * curVal.quantity
}, 0);

console.log('result', result);