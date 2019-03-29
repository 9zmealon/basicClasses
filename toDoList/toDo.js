var form= document.querySelector('form');

form.onsubmit = (event) =>{
    event.preventDefault();
    var formData = document.querySelector('input');


                    var paragraph = document.createElement('p');
                    var button = document.createElement('button');
                    var div = document.createElement('div');
                    button.setAttribute('onclick','remove1(this)')

                    button.innerText='remove';
                    paragraph.innerText = formData.value;

                    
                    div.appendChild(paragraph);
                    div.appendChild(button);
                    document.getElementById('list').appendChild(div);
                    formData.value = ''
};



var remove1 = (r)=>{
    r.parentElement.remove();
};