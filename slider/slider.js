
//-------Variables
var pstn = 0;
var imgName = ['./images/bob.jpg','./images/narayan.jpg','./images/rabinSharma.png'];

//-------onClick functions
var button = document.querySelectorAll('button');
button[0].onclick =() => {
    if(pstn==0)alert('This is the First image on DB.')
    if(pstn>0)pstn = pstn-1;
    document.querySelector('div').innerHTML = `<img src="${imgName[pstn]}" alt="Smiley face" height="600" width="720">`
};

button[1].onclick =() => {
    if(pstn==2)alert('This is the last image on DB.')
    if(pstn<2)pstn = pstn+1;
    document.querySelector('div').innerHTML = `<img src="${imgName[pstn]}" alt="Smiley face" height="600" width="720">`
};



//-------ondragend
var onDragEnd = (event)=>{

}


window.addEventListener("ondragend",onDragEnd);