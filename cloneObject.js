//Clone the object using Object.assign()
//Using spread operator
//using JSON.parse()

const userDetails = {
    name: "kaush",
    age:14,
    verified: false
};

const newUser = userDetails;
newUser.name = "ann";
console.log(newUser);
console.log(userDetails);

let clone = {...userDetails}
console.log(clone);

console.log(clone.name);
console.log(userDetails.name);

//clone an object using assign
let cloneUser = Object.assign({}, userDetails);

cloneUser.name = "rathnayake"

console.log(cloneUser.name);
console.log(cloneUser);

let cloneUser1 = JSON.parse(JSON.stringify(userDetails));

console.log(cloneUser1);

//Deep object
const userData ={
    name: "kaush",
    age:26,
    status:{
        verified:false
    }
};

//clone with object 
let cloneUser2 = {...userData};

//changing the value of cloneUser
cloneUser2.status.verified = true;

console.log(cloneUser2);
console.log(userData);

let cloneUser3 = JSON.parse(JSON.stringify(userData));
console.log(cloneUser3);

cloneUser3.name = "sajdf";

console.log(cloneUser3.name);
console.log(userData.name)
