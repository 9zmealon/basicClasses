//-------Function Types-----------------------------------------------


//-------Arrow function-----------------------------------------------
// function_name = () =>{

// };
// -------Equivalent To
// var function_name = function(){

// };
//---------------------------------------------------------------------





// function ntnMUltiple(arr){
//     return arr[0] * arr[1];
// }

// alert (`${ntnMUltiple([1,2,3,4])}`);


// var array = [1,2,3];

// alert (`${ntnMUltiple(array)}`);


// for (let i = 0; i < array.length; i++){
//     if(i==1){
//         alert (`here = ${array[i]}`);
//     }
//     else{
//         console.log(`here = ${array[i]}`);
//     }

// }

// function arrayToConsole(arr){
//     for (let i = 0; i < arr.length; i++){
//             console.log(`index is ${i},value is ${arr[i]}`);
    
//     }
// };
// arrayToConsole(array);



// var array = [1,2,3];

// function sumOfNumber(arr){
//     var sum = 0;
//         for (let i = 0; i < arr.length; i++){
//                 sum += arr[i];
//         }
//         return sum;
//     };
//     console.log(`Total sum = ${sumOfNumber(array)}`);
// };


// function sumOfNumber(arr){
//     var sum = 0;
//     let i = 0;
//     while(i < arr.length){    
//         sum += arr[i];
//         i++;
//     }
//     return sum;
// };
//     console.log(`Total sum = ${sumOfNumber(array)}`);






 

var userInputSize = parseInt(prompt("Enter total data size:"));

function input(userInputSize){
    var arr = [];
       
    for(let i = 0; i < userInputSize; i++){
        arr[i] = prompt(`Enter data ${i+1}`);
        
        if(isNaN(arr[i])){
            alert("Invalid Input");
            return ;
        }
    };
    
    return arr;
    
}

function sumOfNumber(userIn){
    var a = input(userIn);
    var sum = 0;
    let i = 0;
    if(Array.isArray(a)){
        while(i < a.length){    
            sum += Number(a[i]);
            i++;
        }
    }
    
    return sum;
};
console.log(`Total input number = ${userInputSize}`);

alert(`Total sum = ${sumOfNumber(userInputSize)}`);
