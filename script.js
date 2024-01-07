

let obj1={name:'jhon',
sayHi:function (){
    return "hi"+this.name;
},
}
let obj2={name:"wick"}

console.log(obj1.sayHi());

function heavy(x){
    return x+'heavy';
}

function memoizer(fn){
return function(x){
    return fn(x);
}
   
}

let memoizedHeavy=memoizer(heavy)
console.log(memoizedHeavy(4));

const say=()=>{
    console.log(msg);
}
let msg="hi";
say();

for(let i=0;i<=5;i++){
    setTimeout(
        ()=>console.log(i)
        ,1000
    )
}


//Global and Local scope

let petName = 'Rocky' // Global variable
myFunction()
 
function myFunction() {
    fruit = 'apple'; // Considered global
    console.log(typeof petName +
        '- ' +
        'My pet name is ' +
        petName)
}
 
// console.log(
//     typeof petName +
//     '- ' +
//     'My pet name is ' +
//     petName +
//     'Fruit name is ' +
//     fruit)


//iffe
(function() {
    // Your code here
    var x = 10;
    console.log(x);
})();

function curryAdd(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}

// Usage of the curried function
const result = curryAdd(1)(2)(3);
console.log(result);

object
function sayHi(){
    console.log("hii"+" "+this.name);
}
//arrow function me this keyword kaam nahi karta hai
let obj1={
    name:'mukund',
    sayHi:()=> "hii"+" "+this.name
}

console.log(obj1.sayHi());

let obj1={
    name:'mukund',
    sayHi:function(){
return "hii"+" "+this.name
    } 
}

console.log(obj1.sayHi());


closures

function counter() {
    let count = 0;

    return {
        increment: function() {
            count++;
            console.log(count);
        },
        reset: function() {
            count = 0;
            console.log('Count reset');
        }
    };
}

const counterInstance = counter();
counterInstance.increment(); // Output: 1
counterInstance.increment(); // Output: 2
counterInstance.reset();     // Output: Count reset

function createMultiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

const double = createMultiplier(2);
console.log(double(5)); // Output: 10

//throtlling and Debouncing
