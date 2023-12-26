// document.addEventListener("DOMContentLoaded", function(){
//     document.querySelector("#formDetails").onclick = function(){
//         if(document.querySelector(".username").value === "") {
//             alert("Please enter your username");
//             return false;
//         }else if(document.querySelector(".password").value === "") {
//             alert("Please enter your password");
//             return false;
//         }else{
//             return true;
//         }
//     };
// });


// let firstName = "Samuel";
// let lastName = "Gabriel";

// let fullName = firstName + ' ' + lastName;

// console.log(fullName.toLowerCase());

// let result = 5 * (2 + 2)**2;
// console.log(result);

// let names = ['Bola', 'Taoreed', 'Abel']
// // names[0] = 'James'
// console.log(names);

// for(let i = 2; i < 10; i++){
//     console.log('in loop', i);
// }
// console.log('finished looping');

// const pass =  document.querySelector('.passes');
// if(pass.length <= 3){
//     console.log(onclick(document.getElementById('myButton')));
//         alert(console.log('password is incorrect'))
    
// }
// console.log(pass);
// pass.innerText

// const password = 'passwrd'
// if(password.length >= 8){
//     console.log('Your password is long enough');
// } else {
//     console.log('Your password is weak');
// }

// const speak = function(name){
//     console.log(`good day ${name}`);
// }

// speak('John')

// const greet = () => {
//     return 'hello, world'
// }
// const result = greet();
// console.log(result);


// const bill = function(products, tax){
//     total = 0;
//     for(let i = 0; i < products.length; i++){
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// }
// console.log(bill([120, 25, 85], 0.1));


// let people = ['John', 'Samuel', 'Gabriel', 'Victor', 'Victoria', 'Blessed'];

// people.forEach((person, index)=>{
//     console.log(index, person);
// });

// CALLBACK FUNCTION

// const logPerson = (person, index)=>{
//     console.log(`${index}. hello ${person}`);
// }
// people.forEach(logPerson);


// let age = 75

// if(age >= 18 && age < 60){
//     console.log('You are qualify to vote');
// }else if(age >= 60 && age < 75){
//     console.log('You are due for retirement');
// }else if(age >= 75){
//     console.log('You eligible to claim your retirement settlement');
// }else{
//     console.log('You are not qualified to vote');
// }

//  function findLargest(a, b, c){
//     if(a >= b && a >= c){
//         return a
//     }else if(b >= a && b >= c){
//         return b
//     }else{
//         return c
//     }
//  }
//  console.log(findLargest(12, 36, 89));

//  function currentHour(timeOfDay){
//     if(timeOfDay <= 11){
//         return('Good morning');
//     }else if(timeOfDay <= 17){
//         return('Good afternoon');
//     }else if(timeOfDay <= 19){
//         return('Good evening');
//     }else{
//         return('Good night');
//     }
//  }
// console.log(currentHour(15));

// const count = document.querySelector(".count");
// const decrease = document.querySelector(".bt1");
// const reset = document.querySelector(".bt2");
// const increase = document.querySelector(".bt3");

// decrease.addEventListener('click', ()=>{
//     result = count.innerHTML--
//     collor()
// });
// reset.addEventListener('click', ()=>{
//     result = count.innerHTML = 0
//     collor()
// });
// increase.addEventListener('click', ()=>{
//     result = count.innerHTML++
//     collor()
// });

// function collor(){
//     if(count.innerHTML < 0 ){
//         count.style.color = "red"
//     }else if(count.innerHTML > 0){
//         count.style.color = "green"
//     }else{
//         count.style.color = "yellow"
//     }
// }


// function createPerson(name, age){
//     return{
//         name: name,
//         age: age,
//         greet: ()=>{
//             console.log(`my name is ${name}, and my age is ${age}`);
//         }
//     }
// }
// const person1 = createPerson('James', 35);
// person1.greet()

// const person2 = createPerson("Samuel", 26)
// person2.greet()


function sum(){
    let total = 0;
    for(let i = 0; i < arguments.length; i++){
        total += arguments[i]
    }
    return total
}
console.log(sum(30, 2, 6, 12));