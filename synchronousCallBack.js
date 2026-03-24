const calculate = (a,b,operation)=>{
    return operation(a,b);    
}
function add(x,y){
    return x+y;
}
function multiply(x,y){
    return x*y;
}
function subtract(x,y){
    return x-y;
}

console.log(`addition operation ${calculate(2,6,add)}`)
console.log(`multiplication operation ${calculate(2,6,multiply)}`)
console.log(`subtraction  operation ${calculate(2,6,subtract)}`)


const numbers = [1,2,3,4,5,6,7]

const double = numbers.map (function(num){
    return num*2;
})

console.log(double)