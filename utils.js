function separador() {
    console.log("#####################################################################################");
}

function separadorBarra() {
    console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
}

function superDivisor(num1, num2){
    return num1/num2;
}

module.exports = { 
    separador: separador,
    separadorBarra: separadorBarra,
    superDivisor: superDivisor
}