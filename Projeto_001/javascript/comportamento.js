/*

function calcularIMC() {

    var altura = document.getElementById("altura").value;

    var peso = document.getElementById("peso").value;

    if (altura == false) {
        document.getElementById("altura").focus("altura");
    } else if (peso == false) {
        document.getElementById("peso").focus("peso");
    } else if (altura == false && peso == false) {
        document.getElementById("altura").focus("altura");
    } else {

        var resultado = peso / (altura * altura);

        if (resultado < 16.0) {
            var status = "magreza grave";
        } else if (resultado >= 16, 0 && resultado < 17.0) {
            var status = "magreza moderada";
        } else if (resultado >= 17.0 && resultado < 18.5) {
            var status = "magreza leve";
        } else if (resultado >= 18.5 && resultado < 25.0) {
            var status = "saldável";
        } else if (resultado >= 25.0 && resultado < 30.0) {
            var status = "sobrepeso";
        } else if (resultado >= 30.0 && resultado < 35.0) {
            var status = "obesidade";
        } else if (resultado >= 35.0 && resultado < 40.0) {
            var status = "obesidade severa";
        } else {
            var status = "obesidade mórbida";
        }

        document.getElementById('resultado').value = resultado.toFixed(1);

        document.getElementById('status').value = status;

        $('#botao').addClass('hidden');
        $('#englobaResultado').removeClass('hidden');
        document.getElementById('campoResultado').addClass('displayResultado');
    }
}

function voltar() {
    window.location.reload();
} */

function $(elemento){
    return document.querySelector(elemento);
}

function calculo(altura, peso){
    return peso / (altura * altura);
}

function descricaoImc(imc){
    if (imc < 16) {
            return "magreza grave";
        } else if (imc >= 16 && imc < 17) {
            return "magreza moderada";
        } else if (imc >= 17 && imc < 18.5) {
            return "magreza leve";
        } else if (imc >= 18.5 && imc < 25) {
            return "saldável";
        } else if (imc >= 25 && imc < 30) {
            return "sobrepeso";
        } else if (imc >= 30 && imc < 35) {
            return "obesidade";
        } else if (imc >= 35 && imc < 40) {
            return "obesidade severa";
        } else {
            return "obesidade mórbida";
        }
}

function calcularImc(){
    const imc = calculo($("#altura").value, $("#peso").value);
    $(".imcValor").innerHTML = imc.toLocaleString("pt-BR", {maximumFractionDigits: 2});
    $(".imcDiagnostico").innerHTML = descricaoImc(imc);
}



function mostrarResultado(){
    $(".resultadoIMC").classList.remove("hidden");
    $(".botaoIMC").classList.add("hidden");
}

function mostrarBotãoImc(){
    $(".resultadoIMC").classList.add("hidden");
    $(".botaoIMC").classList.remove("hidden");
}

$(".botaoIMC").addEventListener("click", function(){
    const altura = $("#altura");
    const peso = $("#peso");
    if (altura.value == false){
        altura.focus();
    } else if (peso.value == false){
        peso.focus();
    } else if (altura.value == false && peso.value == false){
        altura.focus();
    } else {
        calcularImc();
        mostrarResultado();
    }
    
});

$(".voltar").addEventListener("click", function(){
    mostrarBotãoImc();
});

