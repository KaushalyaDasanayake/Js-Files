//-----------can quickly copy all part of an existing array----------

function sum(x,y,z){
    return x + y +z;
}

const numbers = [1,2,3];
const array1 = [...numbers];
array1.push(4);

console.log(numbers,'numbers')
console.log(array1,'array1');

console.log(sum(...numbers)); //output 6

var mySub = ['Algorithms','Frontend'];
var certifications = ['A', ...mySub, 'B', 'C','D'];

console.log(certifications,111);

//concatenate arrays (then we can merge arrays together)
var arr1 = [0,1,2];
var arr2 = [3,4,5];
arr1.concat(arr2);
arr1 = [...arr1,...arr2];

console.log(arr1)

var parent = ['fdsf','dff','ffd'];
var child = ['vcv','fgdf','kni'];
parent.concat(child);
parent = [...parent,"dfsdf",...child];

const merged = parent.concat(child)

console.log(parent);
console.log(merged);

//REST: condense multiple elements into an array
function multiply(multiplier, ...theArgs){
    return theArgs.map(function(element){
        return multiplier * element;
    });
}

var arr = multiply(2,1,2,3);
console.log(arr);

function myDetail(firstName, lastName, ...otherInfo){
    return otherInfo;
}

//without rest parameter
function func(a,b){
    return a + b;
}
console.log(func(1,2));
console.log(1,2,3,4,5);

//with rest parameter
function fun(...input){
    let sum = 0;
    for(let i of input){
        sum+=i;
    }
    return sum;
}

console.log(fun(1,2));
console.log(fun(1,2,3));
console.log(fun(1,2,3,4,5));
