function clk(){
    var inp1=document.getElementById("email").value
    var inp2=document.getElementById("password").value
    alert("Email id is :"+email +"\n" + "Password is :"+password);
}
function updateCSSClass(a, b) {

}
function checkfnlname(field) {
curr = document.getElementById(field).value;
if (curr.length > 0) {
updateCSSClass(field, 1);
return true;
} else {
updateCSSClass(field, 0);
return false;
}
}
window.onload = function () {
var btnSubmit = document.getElementById('submit');
btnSubmit.setAttribute('disabled', 'disabled');

[].slice.call(document.querySelectorAll('form input:not([type="submit"])')).forEach(function (element, index) {
element.addEventListener('keyup', function (e) {
var invalidFields = [].slice.call(document.querySelectorAll('form input:not([type="submit"])')).filter(function (element, index) {
return !checkfnlname(element.id);
});
if (invalidFields.length == 0) {
btnSubmit.removeAttribute('disabled');
} else {
btnSubmit.setAttribute('disabled', 'disabled');
}
}, false);
});
}

