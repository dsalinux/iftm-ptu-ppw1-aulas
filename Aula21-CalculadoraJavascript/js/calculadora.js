//ler o click
//verificar o valor do click
//se for um numero, armazenar o valor do click
//se for um operador, armazenar o valor do click
//se for o sinal de igual, realizar a operação
//se for o sinal de limpar, limpar a tela
//se for o sinal de apagar, apagar o ultimo numero
document.querySelectorAll('.tecla').forEach(function (botao){
    let tecla = botao.attributes['calc-tecla'].value;
    botao.addEventListener('click', registra(tecla));
});

document.addEventListener('keydown', function(event){
    let tecla = event.key;
    registra(tecla);
    console.log(tecla);
});


var calculo = "";
var valor1 = "";
var valor2 = "";
var operacao = "";
var historico_operacao = "";
var historico_resultado = "";

atualizaPainel();

function registra(tecla) {
    
    if(!isNaN(tecla)){
        calculo += tecla;
        if(operacao === "") {
            valor1 += tecla;
        } else {
            valor2 += tecla;
        }
    }
    if(isNaN(tecla) && operacao === ""){
        switch (tecla) {
            case "*": 
                operacao = "*"; 
                calculo += tecla; 
                break;
            case "/": 
                operacao = "/";
                calculo += tecla;
                break;
            case "+": 
                operacao = "+";
                calculo += tecla;
                break;
            case "-": 
                operacao = "-";
                calculo += tecla;
                break;
            case "limpar": limpar(); break;
        }
    }
    if(tecla === "="){
        let resultado = 0;
        switch (operacao) {
            case "*": 
                resultado = valor1 * valor2;
                break;
            case "/":
                resultado = valor1 / valor2;
                break;
            case "+":
                resultado = parseInt(valor1) + parseInt(valor2);
                break;
            case "-":
                resultado = valor1 - valor2;
                break;
        }
        
        historico_resultado = resultado;
        historico_operacao = calculo;
        calculo = "";
        valor1 = "";
        valor2 = "";
        operacao = "";
    }
    atualizaPainel();
}

function limpar() {
    calculo = "";
    valor1 = "";
    valor2 = "";
    operacao = "";
    historico_operacao = "";
    historico_resultado = "";
}

//exibir o resultado na tela - Atulizar o valor da tela
function atualizaPainel() {
    var tagoperacao = document.querySelector('.operacao');
    var tagresultado = document.querySelector('.resultado');
    var tagcalculo = document.querySelector('.calculo');
    tagoperacao.innerHTML = historico_operacao;
    tagresultado.innerHTML = historico_resultado;
    tagcalculo.innerHTML = calculo;
}