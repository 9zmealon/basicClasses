//-------ask_Question------------------------------------------------

function inputNum(userInputSize){
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

//--------------------------------------------------------------------

function sumOfNumber(){

    var userInputSize = parseInt(prompt("Enter total data size:"));

    var a = inputNum(userInputSize);
    var sum = 0;
    let i = 0;
    if(Array.isArray(a)){
        while(i < a.length){    
            sum += Number(a[i]);
            i++;
        }
    }

//--------------------------------------------------------------------
    // alert(`Total input number : ${userInputSize}`);
    // alert(`Total sum of all input data : ${sum}`);
//--------------------------------------------------------------------

    var element = document.getElementsByClassName('cl1');
        element[0].innerHTML = `<p>Total input number : ${userInputSize}</p>
                                <p>Total sum of all input data : ${sum}</p>
                                <p>Input Data : ${a}</p>`;
};


//-----------------------------------------------------------------------
var change = function(){
    document.getElementById('form').style='background:grey;';
};
//-----------------------------------------------------------------------

//-------border--------------------------------------------------------------
function addBorder(){
    document.getElementsByClassName('here')[0].children[0].classList.add('border');
};


function removeBorder(){
    document.getElementsByClassName('here')[0].children[0].classList.remove('border');
};

//---------------------------------------------------------------------------------