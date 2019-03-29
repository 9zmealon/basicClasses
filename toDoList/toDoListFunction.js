var c = 0;
var list;
//-------allRemoveButton-------------------------------------------------------

// button[bNum].onclick = ()=>{
//     // document.querySelectorAll('div#list')[0].children[bNum].innerHTML = 
// };

var remove = function(a){
    a.parentElement.remove();
    // list = document.querySelectorAll('div#list')[0].children;
    // document.querySelectorAll('div#list')[0].removeChild(list[a-1]);
    // for (a; a < list.length; a++) {
    //     if(a==list.length-1){
    //         // list.pop();
    //         list[a]=null;
    //     }

    //     else{
    //         list[a]=list[a+1];
    //     }
    // }

    // for (let i = 1; i < list.length; i++) {
    //     if(i==1){
    //         document.querySelectorAll('div#list')[0].innerHTML = `${list[i].innerHTML}`;
    //         document.getElementsByTagName('div')[i].innerHTML=`<button onclick="remove(${i})">Remove</button>`;
    //     }
    //     else{
    //         document.querySelectorAll('div#list')[0].innerHTML +=`${list[i].innerHTML}`;
    //         document.getElementsByTagName('div')[i].innerHTML=`<button onclick="remove(${i})">Remove</button>`;
    //     }
    // }
    // c--;
};


//-------ToDoButton---------------------------------------------------------
var button = document.querySelectorAll('button');
button[0].onclick = ()=>{
    if(c<8){
        c++;
    }
    if(c<=7){
        var userInput = prompt(`Enter the TO DO.`);

        if(isNaN(userInput)){
                // var rmvButton = document.createElement('button');
            // var paragraph = document.createElement('p');
                // var div = document.createElement('div');
            // paragraph.innerHTML = `<p>${c}.${userInput}:</p><div><button onclick="remove(${c})">Remove</button></div>`;
            // paragraph.innerHTML = `<p>${c}.${userInput}:</p><div><button>Remove</button></div>`;
                    
                    //-------alternate---------------------------
                    var paragraph = document.createElement('p');
                    var button = document.createElement('button');
                    var div = document.createElement('div');
                    // var attribute = document.createAttribute('onclick',);
                    button.setAttribute('onclick','remove(this)');

                    // attribute.value=`remove(${c})`;
                    button.innerText='remove';
                    paragraph.innerText = userInput;

                    // div.setAttributeNode(attribute);
                    
                    div.appendChild(paragraph);
                    div.appendChild(button);
                    document.getElementById('list').appendChild(div);//--addtodo is class name.
                    //--------------------------------------------

                // rmvButton.innerText = 'Remove';
                // paragraph.appendChild(rmvButton);
                // div.appendChild(rmvButton);
            // document.querySelectorAll('div#list')[0].appendChild(paragraph);
        }
    }
    if(c==7){
        alert(`List's maximum size reached.`);
    };
};

//---------------------------------------------------------------------------

//-------removeButtonAlternet------------------------------------------------
// button[1].onclick = ()=>{
//     list = document.querySelectorAll('div#list')[0].children;
//     // document.getElementsByTagName('div')[1]
// };


