function newUser(name, age, country) {
    var name = name || 'Oscar'
    var age = age || 34
    var country = country || 'Mx'
    console.log(name, age, country)
}

newUser()
newUser('Miguel', 21 , 'Pe')

function newAdmin (name = 'Oscar', age = 32, country = 'CL') {
    console.log(name, age , country)
}

newAdmin()
newAdmin('Diego', 17, 'PE')