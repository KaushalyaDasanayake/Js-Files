console.log("Hello")

// JS statement
let x,y,z;
x=12,
y=10,
z = x+y;
console.log(z);

//Passing parameters with values (Long hand)
function getName (firstName, lastName){
    return `${firstName} ${lastName}`;
}

const myName = getName('John', 'wick');
console.log('My name is '+ myName)

const getFullName = (firstName, lastName) => `${firstName} ${lastName}`;
const myFullName = getFullName('John','snow');
console.log('My full name is ' + myFullName)