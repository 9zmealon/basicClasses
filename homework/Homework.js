var firstname = prompt('enter the firstname'),
lastname = prompt('enter the lastname');
alert("fullname = " + firstname+ " "+ lastname);
var gender = prompt('select your gender');
var age = prompt('enter age');
if(gender=="male")
{
    alert(firstname + ' ' + lastname + ' is a male of age '+ age);
}
else{
    alert(firstname + ' ' + lastname + ' is a female of age '+ age);

}