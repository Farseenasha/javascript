// object
// let empl={
//     name:"far",
//     dep:"ba",
//     phn:12345
// }
// console.log(empl);


// class
// class Employ{
//     constructor(name,dep,salary){
//         this.name=name,
//         this,dep=dep,
//         this.salary=salary
//         // these are attributes
//     }
// getdetails(){
//     // have mistake
//     console.log('im ' +this.name+ 'and im from' + this.dep);   
// }
// }
// let e1=new Employ("farseena","BA",12334)
// console.log(e1);
// console.log(e1.getdetails());



// inheritence
class Car{
    setName(name){
        this.name = name
    }

    setEngine(){
        console.log("engine started for "+this.name);
    }
    sopEngine(){
        console.log("engine stoped for "+this.name);
    }
}
class Company extends Car{
    topSpeed(speed){
        console.log("top speed for " + this.name+ " is " +speed);
    }
}
let c1=new Company();
c1.setName("BMW")
c1.setEngine()
c1.topSpeed(6)


class Animal{
    name(name){
        this.name = name
    }
    age(age){
        this.age=age
    }
    setSound(sound){
        console.log(""+this.name+ " have a sound of "+sound);
    }
}
class Dog extends Animal{
    col
}
let d1=new Dog();
d1.name("Dog1")
d1.setSound("bark")