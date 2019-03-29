window.onscroll = ()=>{
    var eventE = event.path[1].scrollY;
    if(eventE<100){
        document.getElementsByClassName('bg')[0].style = 'background : grey';
    }
    if(eventE==0){
        document.getElementsByClassName('bg')[0].style = 'background : white';
    }
    

}


scroll();
// var onscroll1 = ()=>{

// }
// window.onscroll = onscroll1;