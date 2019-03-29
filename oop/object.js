// var product1 = {
//     title : "Acer",
//     model : "E15",
//     price : 40000,
//     prd1Detail: function(){
//         return title+' '+model;
//     }
// };

// var product2 = {
//     title : "Acer",
//     model : "F15",
//     price : 70000,
//     prd2Detail: function(){
//         return title+' '+model;
//     }
// };

// var product3 = {
//     title : "HP",
//     model : "H187G",
//     price : 50000,
//     prd3Detail: function(){
//         return title+' '+model;
//     }
// };



// var cart = [];

// function addProduct(item){
//     cart.push(item);
//     alert('a product is added');
// };


// function cartStatus(){
//     for(let i = 0; i<cart.length;i++){
//         const a = cart[i];
//         document.getElementById('crt').innerHTML += `${a.title},${a.model}<br>`;
//     }

// };





// function colorChange(){
//     // var a,b,g;
//     // a=Math.random();
//     // b=Math.random();
//     // c=Math.random();
//     // console.log(a);
//     document.getElementById('cC').style=`background: rgba(${Math.floor(Math.random()*225)},${Math.floor(Math.random()*225)},${Math.floor(Math.random()*225),1});`
// };






// function move(){

// };


// // document.bidy.style.border = .....
// // var random = (num)=>{
// //     return Math.floor(Math.random()*num);
// // };


// function cCC(){
//     // document.getElementById('cCC').style=`background: rgba(${Math.floor(Math.random()*225)},${Math.floor(Math.random()*225)},${Math.floor(Math.random()*225),1});`
//     document.body.style=`background: rgba(${Math.floor(Math.random()*225)},${Math.floor(Math.random()*225)},${Math.floor(Math.random()*225),1});`

// };

// setInterval(()=>{
//     colorChange();
//     cCC();
// },5000);

// var m=0;
// function move(position){
//     document.getElementById("mv").style = `margin-left:${position}px`;
// };
// var interval = setInterval(()=>{
//     var maxValue = 1000;
//     if(m > 500){
//         move(maxValue - m);

//         if(m === maxValue){
//             clearInterval(interval);
//         }
//     }else{
//         move(m);
//     }
//     m++;
    
// },10);

// setTimeout(()=>{
//     move();
// },50);


//setInterval(function(){
    //statement;
//},5000);

var btn = document.querySelectorAll('button');

btn[5].onmouseenter = ()=>{
    document.body.style.background = `rgba(${Math.floor(Math.random()*225)},${Math.floor(Math.random()*225)},${Math.floor(Math.random()*225),1})`;
};



var btn1 = document.getElementsByTagName('button');

btn1[6].onclick = ()=>{
    document.getElementById('move').classList.add('left');
};
btn1[7].onclick = ()=>{
    document.getElementById('move').classList.add('right');
};
// btn1[8].onclick = ()=>{
//     document.getElementById('move').classList.add('');
// };

// btn1[9].onclick = ()=>{
//     document.getElementById('move').classList.add('');

// };
