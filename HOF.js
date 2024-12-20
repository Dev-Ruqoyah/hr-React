// HOF function that takes other function as parameter or that returns other function
// A function being passed as a parameter to a HOF is called callBack

myFunc = (a) =>{
    console.log(a);
    
}
secondFunc = () =>{

}

// HOF and CallBack
myFunc(secondFunc)

// MAP , FILTER AND FIND
// The result of MAP always returns an array
// forEach doesn't return a value in a callBack and a Map function does
let arr = [3,8,9]
myFunction = (val , i) =>{

    // the second argument will be the index by default
    console.log(i);
    
    return val;
    
    // console.log("Hello");
    // return'hi'
    
}
// will not work
// let a = arr.forEach(myFunction)

// will work
let a = arr.map(myFunction)
console.log(a);

let firs = [9,8,9,6]
myfunct = (num) => num*2
let seco = firs.map(myfunct)
console.log(seco);

// shorter form
let b = firs.map(fir => fir*2)
console.log(b);

// FILTER ARE USED WITH CONDITIONAL STATEMENT
let fil = [9,8,98,76,27]
let v = fil.filter(num => num > 50)
console.log(v);
let n = fil.filter((num,i) => i != 2)
console.log(n);


let c = fil.filter((num,i) => i <2 && num >6)
console.log(c);

// FIND : RETURNS THE FIRST ITEMS THAT MEET THE CONDITION
let arra = [9,4,5,6,7]
let result = arra.find(num => num>4)
console.log(result);




