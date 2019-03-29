var form = document.querySelectorAll('form');

form[0].onsubmit = ()=>{
    event.preventDefault();
    var formData = document.querySelector('textarea');
    // console.log(formData.value);
    // document.getElementById('textList').innerText += formData.value; 
    var paragraph = document.createElement('p');
    paragraph.innerText = formData.value;
    document.getElementById('textList').appendChild(paragraph); 
    // console.log(document.getElementById('textList').innerText);

    formData.value = '';
}




form[1].onsubmit = ()=>{
    event.preventDefault();
    var searchWord = document.querySelectorAll('input');
    var textArr = document.getElementById('textList').children;
    // console.log(searchWord[1].value);
    for (let index = 0; index < textArr.length; index++) {
        var text = textArr[1].innerText;
        text = text.split(" ",10);
        var x = text.include(searchWord[1].value);
        // index of
        // include

        console.log(text);
    }


}