// function sample() {
//     console.log("farseena");   
// }
// sample()


// function add(){
//     let a = 2
//     let b = 4
//     let c = a + b
//     console.log(c);  
// }
// add()


// function add(a,b) {
//     let c = a + b
//     console.log(c);
// }
// add(3,6)


// // var can't access outside the function but can access inside the block
// function num() {
//     var a = 10
// }
// num()
// console.log(a);


// const a = 1
// function num() {
//     const b = 2
//     console.log(a,b);   
// }
// num()
// //  here can't access const b bcz its inside the function. const cant access outside the function
// console.log(a,b);


// // here only a=2 can access but cant access a=3 bcz its inside block content 
// function num() {
//     const a = 2
//     if (true){
//         const a = 3
//     }
//     console.log(a);  
// }
// num()


// function num() {
//     const a = 2
//     if(true){
//         const b = 4
//         console.log(a,b);   
//     }
// }
// num()


// console.log(a);
// var a = 10


// temporal red zone : let and const dont have memory allocation or excecution 1st.it is stored in a temporal red zone
// not in call stack.
// console.log(a);
// let a = 10

// data types:Number,string,boolean,null,undefined:undefined no memory allocation,null:anghane oru value illa enn parayunna type
// data types are of 2 types:
// 1.primitive data types: only one value,datas,eg:number, string 
// it is imutable,unchangable
// 2.non primitive : more than one value,datas:array and object/dictionary,mutable

// pre ingriment:x++:here 1sly x value is  same.after printing thenonly its value get increased
// eg ;
// let x = 4
// console.log(x++);
// console.log(x);


// post ingriment:++x:here 1sly x value is  increased.print get the value increased


// synchronized /blocking code ; line by line
// unsynchronised/unbloking/nonblocking code:long running task

// setTimeout


// Anonymous function:oru variable-nte ulliloote function vekkunnu
const sum = function(){
    console.log("hello");
}

// arrow function
const hey=() =>{
    console.log("hey everyone");
}
hey()

// arrow function in one line
const fun=(x,y) =>{console.log(x+y);}
fun(7,8)  
//7&8 are arguments


// Call back function:oru functione vere oru functionte argument akki pass cheyyunnadhine aanu call back
function greet(name,age){
    console.log("hey im"+name);
    age() 
}
function callback() {
    console.log("nice to meet u");
}
greet('farseene',callback)