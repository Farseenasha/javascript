// let a = [1,2,3,4,5]
// let sum = 0
// // i here considered as index position which is total index position is 4.
// //  length is 5.so a[i] is index position . which only needed till 4.so write as i < a.length
// for (let i = 0; i < a.length ; i++ ){
//     sum = sum + a[i]
// }
// console.log(sum);


// function add(a1) {
//     let sum1 = 0
//     for (let i=0 ; i < a1.length ; i++ ){
//         sum1 = sum1 + a1[i] 
//     }
//     console.log(sum1); 
// }
// add([1,2,3,4,5])


// function add(a2) {
//     let sum2 = 0
//     for (let i=0 ; i < a2.length ; i++ ){
//         sum2 = sum2 + a2[i] 
//     }
//     return sum2  
// }
// console.log(add([1,2,3,4,5])); 


// function sample(s1) {
//     for (let i = 0 ; i<s1.length;i++){
//         console.log(s1[i]); 
//         if (s1[i] == 4){
//             console.log("its 4");   
//         }   
//     }
// }
// sample([1,2,3,4])


// MAX VALUE
// function max(m1){
//     let max = m1[0]
//     for (let i = 0 ; i<m1.length ; i++){
//         if(m1[i] > max){
//             max = m1[i]
//         }
//     }
//     return max 
// }
// console.log(max([1,4,5,8]));


// minimum value, array reverse,array element tru or false,array element undo illayo if true its index position

// MIN VALUE 
// function min(m2){
//     let min = m2[0]
//     for (let i = 0 ; i<m2.length ; i++){
//         if(m2[i]<min){
//             min = m2[i] 
//         }
//     }
        
//         return min
// }
// console.log(min([2,4,5,,1,8]));


// reverse
// function reverse(r1) {
//     for (let i = r1.length ; i>=0 ; i--){
//         console.log(r1[i]); 
//     }
// }
// reverse([1,2,3,4])


// ARRAY AND A VALUE
// function array(a1,n1) {
//     let r = a1[0]
//    for (let i = 0 ; i<a1.length ; i++){
//     if (n1 == a1[i]){
//         r = i
//     }
//    }
//    return r 
// }
// console.log(array([1,3,5,2,4],2));

// function array(a2,n2) {
//     let r1 = a2[0]
//    for (let i = 0 ; i<a2.length ; i++){
//     if (n2 == a2[i]){
//         r1 = i
//     }
//    }
//    console.log(r1);
// }
// array([1,3,5,2,4],2)
 

// function ele(e,n){
//     for (let i=0 ; i<e.length ; i++){
//         if (n == e[i]){
//             return "element is true"
//         }
//         // if (n != e[i]){
//         //     console.log(n,"element is false");
//         // }
//     }
//     console.log(n,"element is false");
// }
// console.log(ele([1,2,3,4],5));

//ODD numbers:
// function odd(o1) {
//     let rslt = 0
//     for (let i = 0 ; i<o1.length ; i++){
//         if (o1[i]%2 != 0){
//             rslt = rslt+1
//         }
//     }
//     return rslt
// }
// console.log(odd([1,2,3,4,5]));


// //DUPLICATE VALUES:
// function duplicate(array) {
//     let a1 = []
//     for (let i = 0 ; i<array.length ; i++){
//         a1.push(array[i])
//         if (array[i] in a1){
//             return "have duplicate value"
//         } 
//     }
//     console.log("no duplicates");
// }
// console.log(duplicate([1,2,3,4]));

// function duplicate(array) {
//     for (let i = 0 ; i<array.length ; i++){
//         for j 
//     }
// }

Object,assign
b = JSON,parse(JOIN.stringify(a))