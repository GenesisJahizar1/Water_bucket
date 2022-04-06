 //*** Este Codigo permite Validar que sea un campo Numerico
 function onlyNumbers(val){
    number=parseInt(val);
    if (isNaN(number)){
        return "";
    }
    return number;
}
function valNumber(Control){
    Control.value=onlyNumbers(Control.value);
}
