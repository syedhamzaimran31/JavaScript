// Fibonacci Series
let a = 0;
let b = 1;
let c = 0;
let count = 10;
console.log(a + " " + b)

for (let i = 0; i < count - 2; i++) {
    c = a + b;
    a = b;
    b = c;
    console.log(c);
}

//check if number is positive or negative

let num = 10;
if (num > 0) {
    console.log("Number is positive");
} else {
    console.log("Number is negative");
}

// reduce the fraction to its simplest form
function reduce(a, b) {
    var gcd = function gcd(c, d) {
        return d ? gcd(d, c % d) : c;
    };
    gcd = gcd(a, b);
    return [a / gcd, b / gcd];
}
console.log(reduce(15,20))
console.log(reduce(84810,985612))
