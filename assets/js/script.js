/*Variables*/
var qty = document.getElementById('quantity').value;
var vle = document.getElementById('price').getAttribute('value');
var clr = document.getElementById('color').value;


function calculo () {
var qty = document.getElementById('quantity').value;
var vle = document.getElementById('price').getAttribute('value');
var clr = document.getElementById('color').value;
var result = qty * vle;

document.getElementById('total').innerHTML = result.toLocaleString('es-CL', {style:'currency', currency: 'CLP'});
document.getElementById('finalQuantity').innerHTML = qty;
document.getElementById('chooseColor').style.backgroundColor = clr;
}