// import { compose, pipe } from "lodash/fp";

// let input = "       JavaScript      ";
// let output = "<div>" + input.trim() + "</div>";

// const trim = str => str.trim();
// const wrapInDiv = str => "<div>" + str + "</div>"
// const wrapInDiv = str => '<div> ${str} </div>';
// const wrap = type => str => '<${type}> ${str} </${type}>';
// const toLowerCase = str => str.toLowerCase();

// const transform = compose(wrapInDiv, toLowerCase, trim);
// transform(input);

// const transform = pipe(trim, toLowerCase, wrap("span"));
// console.log(transform(input));

// const result = wrapInDiv(toLowerCase(trim(input)));

// setTimeout(() => console.log("Hello"), 1000);

// let numbers = [1, 2, 3];
// numbers.map(number => number * 2)

// function greet(fn) {
//     console.log(fn());
// }

// function sayHello() {
//     return function() {
//         return "Hello World";
//     }
// }

// let fn = sayHello();
// let message = fn();

// let fn = sayHello;
// fn()
// sayHello()

// function greet(fnMessage){
//     console.log(fnMessage());
// }

// greet(sayHello);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// import { Map } from 'immutable';

// let book = Map({
//     title : "Harry Potter"
// });

// function publish (book){
//     return book.set("isPublished", true);
// }

// book = publish(book);

// console.log(book.toJS());

import { produce } from 'immer';

let book = {
    title : "Harry Potter"
};
    
function publish (book){
    return produce(book, draftBook => {
        draftBook.isPublished = true;
    });
}
    
let updated = publish(book);
    
console.log(book);
console.log(updated);


