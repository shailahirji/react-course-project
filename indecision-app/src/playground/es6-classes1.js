//classes enable us to reuse code 
//make multiple instances, blueprint 

class Person{
     constructor(name,age=0){
        this.name= name || 'Anonymous'; //setting a name variable to the passed pm , if name isnt passed, call it test 
        this.age=age
        //our own method, runs only if explicitly called 
     }

     getGretting(){
         return `Hi. I am  ${this.name}!` ;
     }
     getDescription(){
         return `${this.name} is ${this.age} years old.`;
     }

}
 
class Student extends Person{
    //overide constructor by adding major info 
    constructor(name,age,major){
        //name and age, dont set properties, already done in person 
        super(name,age);//have to call parent to have its function happen
        this.major=major;
    }
    hasMajor(){//new method from parent 
        return !!this.major;
    }

    //overiding method from parent 
    getDescription(){
        //change behaviour 
        //return `${this.name} is ${this.age} years old and is persuing ${this.major}`;
        //call parent and chnage it 
        let description=super.getDescription();

        if(this.hasMajor()){
            description+=` Their major is ${this.major}.`
        }
        return description;
    }
}

class Traveler extends Person{
    //add home location, overid get gretting 1. if homelocation, include in the homelocation 
    constructor(name , age, homelocation){
        super(name,age);
        this.homelocation=homelocation;
    }
    hasHomelocation(){
      return !!this.homelocation;
    }
    //overid greeting 
    getGretting(){
        let x=super.getGretting();

        if(this.hasHomelocation()){
            x+=` I am visiting from ${this.homelocation}`;
        }
        return x;
    }
}


// const me= new Student('Shaila',23,'Computer Science');
// console.log(me);
// console.log(me.getGretting());
// console.log(me.getDescription());

const other= new Traveler('Shaila',23,'Tanzania');
console.log(other);
console.log(other.getGretting());
//console.log(me.getDescription());

const two= new Traveler();
console.log(two.getGretting());
