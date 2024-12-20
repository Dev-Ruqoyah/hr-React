// What is left after destructuring is known as Rest 
// The operator(...rest)
let arr = [7,8,4]

let [num2,...rest] =arr
console.log(rest);
console.log(num2);


// This will return an empty array
let [num,,num3, ...vari] = arr
console.log(vari);
console.log(num);


// AN OBJECT
let obj = {
    name: "Rukayat",
    school: "Lautech",
    age : 34
}
let {name,...other} = obj
console.log(name);
console.log(other);

// It does't deals with order
let{school,...info} = obj
console.log(info);



