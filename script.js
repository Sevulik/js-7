// js 7.1

// let obj = {
//     Salim: 25,
//     Ali: 17,
//     Malika: 21
// }
// Object.keys(obj).forEach(key  => {
//     obj[key] += 2
// })

// console.log(obj);


// js 7.2

// let obj = [
//     { name: 'Ali', age: 20 },
//     { name: 'Vali', age: 25 },
//     { name: 'Sami', age: 22 }
// ]
// obj.map(v=> console.log(v.name,v.age));


// js 7.3

// let obj = {
//     a: 10,
//     b: 'hello',
//     c: 5,
//     d: true
// }
// for (let key in obj){
//     if (typeof obj[key] !== "number"){
//         delete obj[key]        
//     }
// }
// console.log(obj);


// js 7.4

// let obj = {
//     name: 'Lola',
//     age: null,
//     job: 'Teacher',
//     city: null
// }
// for (let key in obj){
//     if (obj[key] === null){
//         delete obj[key]    
//     }
// }
// console.log(obj);

// js 7.5

// const users = [
//     {name: 'Sadi', age: 17},
//     {name: 'Vali', age: 23},
//     {name: 'Ali', age: 19}
// ]
// let kottala = users.filter(user => user.age > 18)
// console.log(kottala);
