// a = [1,2,3,4,5]

// //  pop is used to remove the last element
// a.pop() 
// console.log(a);

// //  psh is used to add an element to its  last position
// a.push(6)
// console.log(a);


// //  Shift is used to remove the 1st element
// a.shift()
// console.log(a);

// //  unshift is used to add an element to the the 1st element
// a.unshift(10)
// console.log(a);

// b = ["a","b","c","d"]

// // To find length of an array
// console.log(b.length);

// // To find the element of particular index postion
// console.log(b.at(2));

// c=["ab","df","de","gt"]
// console.log(c.toString())

// // To join the elements of a string using the join("*") thing
// console.log(c.join("*"));

// ### CONCATINATING 2 ARRAYS ###
// let x = ["a","b","c"]
// let y = ["x","y","z"]
// let conc = x.concat(y)
// console.log(conc);
// console.log(x.concat(y));

// // ### To joining nested array to a single array flat() is used ###
// let a = [["a","b"],["c","d"],["e","f"]]
// let f = a.flat()
// console.log(f);


// // // ### SLICING ###
// let b = ["a","b","c","d",3,4,7]
// let c = b.slice(0)
// console.log(c);
// let x = b.slice(1,4)
// console.log(x);


// //  ### Adding and deleting using slicing method ###
// let b = ["a","b","c","d"]
// let c = b.splice(2,2,"y","z")
// //  here deleted elements will get as output
// console.log(c)
// //  here deleted elements removed and inserted elements get added and the of the main array with the changes get dispayed   
// console.log(b)


// let can only access inside the block 
// { let a = 10 
//     console.log(a);
// }
// console.log(a);


// // var can access inside and outside the block
// {var a = 10
//     console.log(a);
// }
// console.log(a);

// const can only access inside the block 
// { const a = 10
//     console.log(a); 
//  }
//  console.log(a); 

// map
// let arr=[1,2,3,4,5]
// let a = arr.map((num)=>{
//     return num*2
// })
// console.log(a);

// filter
// let f = [1,2,3,4,5]
// const even = f.filter((number)=>{
//     return number%2==0
// })
// console.log(even);


// reduce
let re = [1,2,3,4,5]
const reducevalue=re.reduce((acc,cur)=>{
    return acc+cur
})
// here acc = 0
//  cur = 1st elemeent in the array ...1
// 0+1 = 1
// 1+2=3
// 3+3=6
// 6+4=10
// 10+5=15
console.log(reducevalue);

// find...here find will give the condition satisfying 1st element..which means 2..4 not printed
let fin = [1,2,3,4,5]
const result=fin.find((n)=>{
    return n%2==0
})
console.log(result);






