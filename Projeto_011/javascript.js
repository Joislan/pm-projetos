"use strict";

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
}