// ARRAY DESTRUCTURING --- It deals with the order of the element in the array
let a = [24,5,6]
let[num] = a;
// The first items in the array
console.log(num) 
// The second letter in the array
let [, sec] = a
console.log(sec);
// The third element in the array
let [,,third] = a
console.log(third);


// OBJECT DESTRUCTURING --- It deals with the keys of the object
let obj = {
    name : "Ruqoyyah",
    age : 20,
    school : "Lautech"
}
// The first element
let {name} = obj
console.log(name);
// The second element
let{school} = obj
console.log(school);

// changing the key name using alias
let{age:myAge} = obj
console.log(myAge);





