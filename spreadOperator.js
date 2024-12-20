// Spread operator copy the element or items in a container i.e[] without copying the container []
let arr = [3,4,5]
console.log(...arr);  //3,4,5

// spreading the array and adding new items to it
let a = [...arr,60,9,5]
console.log(a);
let b = [5,7,8,...arr]
console.log(b);


// spreading an object
 let obj = {
    name: "Rukayat",
    school: "Lautech",
    age : 34
}
console.log({...obj});
let newObj = {...obj,height:5.6}
console.log(newObj);

// overiding an element
let newwObj = {...obj, name:"Abiodun"}
// It will not work if it is not in this order 
console.log(newwObj);




