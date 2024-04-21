/// JS Assignment 43 - 48

// 1)
    function linkClick() {
        alert('You clicked on a link');
    }
// 2)
        function mobilePurchase() {
            alert(`Thanks for purcahsing a phone`);
        }
//3)
// document.addEventListener("click", removeRow1);
let getRowId1=document.getElementById("row1");
let getRowId2=document.getElementById("row2");
let getRowId3=document.getElementById("row3");
let getRowId4=document.getElementById("row4");

function removeRow1() {
        getRowId1.remove();
}

function removeRow2() {
    getRowId2.remove();
}
function removeRow3() {
        getRowId3.remove();
}
function removeRow4() {
        getRowId4.remove();
}
// 4)
var counter=0;    
function counterAdd() {
        counter++;                                                          
        counter= document.getElementById('result').innerHTML=counter;
        return counter;
    }
    function counterDelete() {
        if (counter >= 1) {
            counter--;
        }
        counter= document.getElementById('result').innerHTML=counter;
        return counter;
    }
   




























































