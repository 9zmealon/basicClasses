
//-------every 5sec add div->p->text:100 prgh stop.-----------
var c = 0;
function add(){
    c++;
    var paragraph = document.createElement('p');
    var div = document.createElement('div');
    paragraph.innerText = `This is paragraph ${c}`;
    
    div.classList.add('greybg');
    div.appendChild(paragraph);

    // document.getElementsByClassName()
    // document.body.innerHTML += `${div.innerHTML}`;
    document.querySelector('.loop').appendChild(div);

};



var interval = setInterval(()=>{
    var maxValue = 100;
    if(c<=maxValue){
        add();
    }
    if(c==maxValue){
        clearInterval(interval);
    }
    m++;
},500);
//-------------------------------------------------------------