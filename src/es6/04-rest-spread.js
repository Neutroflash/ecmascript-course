//arrays destructuring

let fruits = ["apple", "banana"];
let [a, b] = fruits;
console.log(a, fruits[1]);

//object destructuring

let user = { username: "Oscar", age: 34 };
let { username, age } = user;
console.log(username, age);
console.log(username, user.age);

//spread operator
let person = { name: "oscar", age: 28 };
let country = "MX";

let data = { id: 1, ...person, country };
console.log(data);

//rest
function sum(num, ...values) {
  console.log(values);
  console.log(num + values[0]);
  return num + values[0];
}

sum(1, 1, 2, 3, 5);

let json1 = { name: "Atena", food: "Leche" };

let json2 = { age: 2, color: "Café" };

let final = {...json1, ...json2}

console.log(final)
