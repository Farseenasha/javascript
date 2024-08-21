console.log(Math.round(4.4));
console.log(Math.ceil(4.4));
console.log(Math.floor(4.6));
// floor always 4 
console.log(Math.abs(-1));
console.log(Math.pow(2,3));
// 2*2*2
console.log(Math.sqrt(4));

// trunc returns only integer value.
console.log(Math.trunc(5.9));
console.log(Math.trunc(-5.9));

// sign:here only prits -1:incase of -ve numbers,0:incase of 0,1:incase of +ve numbers
console.log(Math.sign(-4));
console.log(Math.sign(0));
console.log(Math.sign(4));

console.log(Math.max(1,2,3,4,5));
console.log(Math.min(1,2,3,4,5));

// random prints the value in between 0-1:which means pointed value
console.log(Math.random());

console.log(Math.log(7));
console.log(Math.log(2.5));
console.log(Math.log10(1000));


// number methods:tofixed,toprecisio,tostring,value
// toString()
let a = 123
console.log(a);
let b = a.toString()
console.log(b);
console.log(typeof(b));

// toFixed()
let c = 1.52623
console.log(c.toFixed(2));
// here 2 means will print 2 value after decimel
// toPrecision():returns the length(numberincluding pointed values)
console.log(c.toPrecision(4));

// valueof():returns a number as a number
let d = 345
console.log(d.valueOf());
 



















