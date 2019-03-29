//-------resizeWindowEvent
const resizeWindow = (event)=>{
    var windowInnerHeight = event.path[0].innerHeight;
    var windowInnerWidth = event.path[0].innerWidth;

    //-------forHeight
    if(windowInnerHeight > 500){
        document.querySelector('div').style = `background: rgba(${Math.floor(Math.random()*225)},${Math.floor(Math.random()*225)},${Math.floor(Math.random()*225),1})`;
    }

    if(windowInnerHeight > 600){
        document.querySelector('div').style = 'background: grey';
        }
    
    //-------forWidth
    if(windowInnerWidth < 700){
        document.querySelector('form').style.background = `rgba(${Math.floor(Math.random()*225)},${Math.floor(Math.random()*225)},${Math.floor(Math.random()*225),1})`;
    }

    if(windowInnerWidth > 700){
        document.querySelector('form').style = 'background: blue';
    }

    console.log(`windowInnerWidth: ${windowInnerWidth} -- windowInnerWidth: ${windowInnerWidth}`);

}

window.addEventListener('resize',resizeWindow);
//--------------------------------------------------------



//-------keyupEvent
var s = 1;
var input = document.querySelector('input');

var onKeyPress = (event)=>{
    if(event.keyCode == 17){
        s += 0.3;
        document.querySelector('form').style = `transform: scale(${s})`;
    }
    if(event.keyCode == 18){
        event.preventDefault();
        if(s > 0.5){
            s -= 0.3;
        document.querySelector('form').style = `transform: scale(${s})`;
        }
        
    }
    console.log(event);
}
input.addEventListener('keyup',onKeyPress);










