    //hoisting
    //var a=12;
   // console.log(a);
    //var a=5;

    //  1)var and const.
// console.log(a);
// var fname="hamza";
// //fname="Syed";
// const lname="Imran";
// lname="asdasda";
// console.log(lname);



// 2)Hoisting states that in js when we declare and initialize a var we can use
//it before the initializatin but it will not give us an error instead
//it gives the value undefined, beacause when we initialize a var the
//the declaration always move onth top of the code

//var a;
//console.log(a);
//var a=12; == (var a; -> a=12;)

//3) primitives and constants

//4) Loops
        // for(var i=0;i < 11; i++){
        //     console.log(i);
        // }
        // var a=12;
        // while(a<20){
        //         console.log(a);
        //         a++;
        // }
//5)functions....
function myFirstFunction( a, b, c) {    //parameters hen a,b,c jin mn value store hoti he arguments wali
    console.log(a);
    console.log(b);
    console.log(c);
}
myFirstFunction(12,13,18);// 12, 13, 18 arguments hen jo ke abhi eal time values hen or store honge parameters


//6 
//Arrays:
const arrayNew=[1,2,4,10,50];
const anotherArray=Array(1,2,3);
console.log(anotherArray);

//7 
//Objects:
// empty obj
let a={};
//filled object:
let info={    //An object , kisi ek specific chez ki sari information ya us se regarding jo chezen aur data mojood he usko store karne ke lye use hota he.
    neme:"Syed Hamza Imran ", /// prperty : value
    age:23,
    height:"5.8ft",
    skinColor: "brown"
}
info.age=24;

///////                                       JS Advanced - Notes
// Javascript has mainly two version ES5 and ES6 respectively