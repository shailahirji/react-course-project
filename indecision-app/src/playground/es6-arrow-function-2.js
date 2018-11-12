//arguments objec is no longer bound to arrow functions 
//this keyword, no longer bound with arrow functions 
// const add = (a,b)=>{
//     return a+b;
// };

// Console.log(add(55,1)); 

const multiplier= {
    //define array of numbers 
    //single number, multiplyBy
    //run multiply and get new array back 
   numbers: [1,2,3],
   multiplyBy: 2,
   multiply(){
       return this.numbers.map((number) => number*this.multiplyBy);
   }
};

console.log(multiplier.multiply());
