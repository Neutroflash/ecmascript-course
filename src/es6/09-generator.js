function* iterate(array) {
    for (let value of array) {
        yield value
    }
}

const it = iterate(['Oscar','Miguel','Diego', 'Jennifer'])
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)