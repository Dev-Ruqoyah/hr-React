import { data } from "./data";
// => can return an item itself
// const myFunc = () =>{
//     return ["Rukayat","Abiodun","Hamzat"]
// }
// let[name] = myFunc()
// console.log(name);

// let [names,...onames] = myFunc()
// console.log(onames);
// let a = myFunc()
// console.log(a);
// console.log(myFunc);
// This is commonly used in react
const[name,setName] = data()
console.log(name);
setName()



