let a = "adserwfw"
console.log(a.length);

// which element in that index position charAt is used
let b = "abcdef"
console.log(b.charAt(2));


// slice(1,5)i and 5 are index positions
// substr(1,5) here 1 means index position & 5 meanz how much elemets needed or the length
let c = "abcdefghi"
console.log(c.slice(1,5));
console.log(c.substr(1,5));
// toLowerCase & toUpperCase
console.log(c.toUpperCase());
console.log(c.toLowerCase());

// Concatinating or joining
let t1 = "hello"
let t2 = "world"
console.log(t1.concat(" ",t2));

// trimming:removing unwanted space
let t3 = "   hello aaami !    "
console.log(t3.trim());
console.log(t3.trimStart());
console.log(t3.trimEnd());


let n1 = "6"
console.log(n1.padStart(3,"0"));
let n2 = 7
let nn2 = n2.toString()
console.log(n1.padEnd(3,"0"));



let a1 = "hi aparna"
console.log(a1.repeat(3," "));


// type coercion : if a number and a string get added the number becomes string and get joined:implicit coercion
let n4 = 2
let n5 = "4"
console.log(n4+n5);
console.log(typeof(n4+n5));  
// will be a string


// explicit coercion: nammalanne type maatunnadh
let n6 = Number("5")
console.log(typeof(n6));

let num1 = 3
// console.log(++num1);
console.log(num1++);
// console.log(++num1 + num1++);
