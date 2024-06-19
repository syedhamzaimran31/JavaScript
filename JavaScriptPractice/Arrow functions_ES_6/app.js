function Add(num1, num2) {
    console.log(num1 + num2);
}
Add(10, 50)

//Arrow functions
var arrowFunc = (num1, num2) => num1 + num2
console.log(arrowFunc(10, 20))

var arrowFunc_2 = ((a, b, c) => {
    console.log(a + b)
    console.log(b + c)
    console.log(a + c)
})(1, 2, 3);
// arrowFunc_2;