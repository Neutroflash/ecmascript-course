const user = { username: 'neutro', age: 21, country: 'PE'}
const { username, ...values } = user
console.log(username)
console.log(values)