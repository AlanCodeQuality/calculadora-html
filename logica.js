function soma(n1, n2) {
    return n1 + n2;
}
function subtracao(n1, n2){
    return n1 - n2;
}
function multiplicacao(n1, n2){
    return n1 * n2;
}
function divisao(n1, n2) {
    return n1 / n2;
}

function trataCliqueSoma() {
    let n1 = Number(document.getElementById('n1').value);
    let n2 = Number(document.getElementById('n2').value);
    let s = soma(n1, n2);
    document.getElementById('resultado').innerHTML = 'Resultado: ' + s;
}

function trataCliqueSubtracao() {
    let n1 = Number(document.getElementById('n1').value);
    let n2 = Number(document.getElementById('n2').value);
    let su = subtracao(n1, n2);
    document.getElementById('resultado').innerHTML = 'Resultado: ' + su;
}

function trataCliqueMultiplicacao() {
    let n1 = Number(document.getElementById('n1').value);
    let n2 = Number(document.getElementById('n2').value);
    let m = multiplicacao(n1, n2);
    document.getElementById('resultado').innerHTML = 'Resultado: ' + m;
}

function trataCliqueDivisao() {
    let n1 = Number(document.getElementById('n1').value);
    let n2 = Number(document.getElementById('n2').value);
    if (n2 !== 0) {
        let d = divisao(n1, n2);
        document.getElementById('resultado').innerHTML = 'Resultado: ' + d;
    } else {
        document.getElementById('resultado').innerHTML = 'Erro: Divisão por zero';
    }
}
