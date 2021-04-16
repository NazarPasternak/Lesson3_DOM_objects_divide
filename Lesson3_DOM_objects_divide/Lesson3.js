// ..................Lesson 3.....3/31/2020.........................

let str = 'HELLO';
console.log(str[0]);
console.log(str[1]);

// Letter E is on the index 1.
          // indexzOf
let str = 'HELLO ooooo World';
let indexOf = str.indexOf('W');

console.log(indexOf);


let str = 'HELLO ooooo World';
let number = str.lastIndexOf('o');
let numberStart = str.indexOf('o');

console.log(number, numberStart);

8:50

let str = 'HELLO';
console.log(str[1]);
console.log(str.charAt(1));

console.log(str.charCodeAt(1));
// above is a special code for Java code number!

.concat - add something to str
let S  = str.concat('RRRRR');
let S2 = str + 'RRRRR'

console.log(S);
console.log(S2);

// we change one letter 0 - to letter z; 14:00
let str = 'HELLOOOOO';
let replace = str.replace('O', 'z');
let replaceAll = str.replaceAll('O', 'z')

console.log(replace);
console.log(replaceAll);

let slice = str.slice(4, 8);

console.log(str);
console.log(slice);




slice delete some elements
let str  = 'HELLOO World';
it has left 2 last elements
let slice = str.slice(str.length-2, str.length);
or
let slice = str.slice(1, 4);

console.log(str);
console.log(slice);

..........SPLIT.............

// let str = 'HELLO ooooo world';
let allowedNames = 'admin;ivan;olga;ira'
let allowedArr = allowedNames.split(';');
console.log(allowedArr);

let str  = 'HELLO World';
!!!Just remeber that distance '_' will separate words/ ('') separate letters
let strings = str.split(' ');
console.log(strings);

26:00 Create a sentence, delete comas) nice
let strArr = ['Hello', 'feb', 'js','java', 'python'];
let join = strArr.join(' ');
console.log(join);

In cases when we have an email from capital or small letter
let com = 'Victor.fzs@gmail.com';
let com1 = '  victor.fzs@gmail.com';
// // makes false
// console.log(com === com1);
//
com = com.toUpperCase();
com1 = com1.toUpperCase();
// console.log(com, com1);
// console.log(com === com1);

// method that delete all extra spaces ...trim
com = com.trim();
com1 = com1.trim();


console.log(com);
console.log(com1);
console.log(com === com1);

let name = 'Harry Potter    ';
// name = name.replace('', '')
// name = name.trim()
console.log(name);


40:00 phone starts with +1
let com = 'Victor.fzs@gmail.com';
let com1 = '  victor.fzs@g';
let phone = '+771864+109'

let b = phone.startsWith('+77')
let endsWith = phone.endsWith('+380');
if (!b){
    alert('Wrong format');
}
let number = phone.indexOf('+1');

console.log(number);

let b = phone.startsWith('+77');
let endsWith = phone.endsWith('109');
console.log(b);
console.log(endsWith);

// .................includes.........................

let com = 'Victor.fzs@gmail.com';
let com1 = '  victor.fzs@g';
let b = com.includes('@gmail.com');
let b2 = com1.includes('@gmail.com');
console.log(b);
/*console.log(b2);