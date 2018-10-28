// Reference Repository: https://github.com/h5bp/Front-end-Developer-Interview-Questions/blob/master/questions/coding-questions.md

// Question: What is the value of foo?
var foo = 10 + '20';
console.log(foo);

// Question: What will be the output of the code below?
console.log(0.1 + 0.2 === 0.3);


// Question: How would you make this work?
function add(p1, p2) {
    return p1 + p2;
}

add(2, 5);

// Question: How would you make this work?
var add = function(x) {
    return function(y) { return x + y; };
};
add(2)(5);

//====OR=====

function add(n){
    var addNext = function(x) {
        return add(n + x);
    };

    addNext.valueOf = function() {
        return n;
    };

    return addNext;
}

add(2)(5)(4)(3);


// Question: What value is returned from the following statement?
console.log("i'm a lasagna hog".split("").reverse().join(""));

console.log(( window.foo || ( window.foo = "bar" ) ));

