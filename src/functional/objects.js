const person = { 
    name : "Jhon",
    address : {
        country : "USA",
        city : "San Francisco"
    }
};
// const updated = Object.assign({}, person, { name : "Bob", age : 30});
const updated = {
    ...person, 
    address : {
        ...person.address,
        city : "New York"
    },
    name : "Bob"
};
updated.address.city = "New York";
console.log(person);