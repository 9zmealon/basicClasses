//ARRAY----------------------------------------------------------------


//-----------------------------------------------
// var a = prompt ('Enter integer a');
// function month_show(a){
//     if(a>12||a<0){
//         alert('Please input number between 1 and 12');
//     }
//     else{
//     var a_array = ["Jan","Feb","mar","april","may","jun","July","aug","sept","oct","nov","dec"];
//     alert(a_array[a-1]);
//     }
// }
// month_show(a);
//-----------------------------------------------


//-------Using Function----------------------------------------------
//-------Displaying Months-------------------------------------------
// var getMonth = function(monthNumber){
//     var month =[
//         "Jan",
//         "Feb",
//         "mar",
//         "april",
//         "may",
//         "jun",
//         "July",
//         "aug",
//         "sept",
//         "oct",
//         "nov",
//         "dec"
//     ];
//     if(monthNumber >= 12){
//         return ;
//     }
//     return month[monthNumber - 1];
    
// };


// var monthAlert = function(monthNumber){
//     var monthName = getMonth(monthNumber);
//     if(monthName){
//         alert (`The month is ${monthName}`);
//     }
//     else{
//         alert ('Please enter the correct input');
//     }
// };
//-------------------------------------------------------------------





//--------Using Nested Function--------------------------------------
//--------Condition Logic--------------------------------------------

//-------------------------------------------------------------------


//--------Displaying Months------------------------------------------
//-------------------------------------------------------------------
// var getMonth = function(monthNumber){
//     var month =["Jan","Feb","mar","april","may","jun","July","aug","sept","oct","nov","dec"];
//     return month[getPosition(monthNumber-1,month.length)];
// };


// var monthAlert = function(monthNumber){
//     var monthName = getMonth(monthNumber);
//     if(monthName){
//         alert (`The month is ${monthName}`);
//     }
//     else{
//         alert ('Please enter the correct input');
//     }
// };



// var userInput = parseInt(prompt("Enter a month number"));
// // monthAlert(userInput);
// -------------------------------------------------------------------





//-------Displaying List's Name--------------------------------------
// var getPosition = function(Number,array_length){
//     if(Number > array_length){
//         return ;
//     }
//     else{
//         return Number;
//     }
// }

// var getname = function(inputNumber){
//     var list = ["Ram","Sita","Shyam","Peeter"];
//     return list[getPosition(inputNumber-1,list.length)];
// }




// var listAlert = function(inputNumber){
//     var listName = getname(inputNumber);
//     if(listName){
//         alert (`The respective name is ${listName}`);
//     }
//     else{
//         alert ('Please enter the correct input.');
//     }
// };

// var userInput = parseInt(prompt("Enter a List number"));
// listAlert(userInput); 


// -------------------------------------------------------------


var getPosition = function(Number,array_length){
    if(Number > array_length){
        return ;
    }
    else{
        return Number;
    }
}


var getMonth = function(monthNumber){
    var month =["Jan","Feb","mar","april","may","jun","July","aug","sept","oct","nov","dec"];
    return month[getPosition(monthNumber-1,month.length)];
};


var monthAlert = function(){
    var userInput = parseInt(prompt("Enter a month number"));
    var monthName = getMonth(userInput);
    if(monthName){
        var element = document.getElementsByClassName('cont2')
        // alert (`The month is `);
        element[0].innerHTML = `<p>${monthName}</p>`;
        console.log(element);
    element[0].style = 'background : red';
    }
    else{
        alert ('Please enter the correct input');
    }
};



