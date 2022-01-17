//Embora eu possa "Otimizar" o sistema colocado as funções diretamente no HTML, por questões de organização e treinamento decidi colocar todas as funcionalidades no JavaScript diretamente.

//Não sei se são boas práticas, mas decidi fazer desse modo

//======================Questões de organização========================
const inputResultado = document.getElementById('input-resultado'); //Inserido
const btnC = document.getElementById('btn-c'); //Inserido
const btnMenorQue = document.getElementById('btn-menorque');
const btnDividir = document.getElementById('btn-dividir'); //Inserido
const btnMultiplicacao = document.getElementById('btn-multiplicacao');
const btn7 = document.getElementById('btn-7'); //Inserido
const btn8 = document.getElementById('btn-8'); //Inserido
const btn9 = document.getElementById('btn-9'); //Inserido
const btnMenos = document.getElementById('btn-menos'); //Inserido
const btn4 = document.getElementById('btn-4'); //Inserido
const btn5 = document.getElementById('btn-5'); //Inserido
const btn6 = document.getElementById('btn-6'); //Inserido
const btnMais = document.getElementById('btn-mais'); //Inserido
const btn1 = document.getElementById('btn-1'); //Inserido
const btn2 = document.getElementById('btn-2'); //Inserido
const btn3 = document.getElementById('btn-3'); //Inserido
const btnIgual = document.getElementById('btn-igual');
const btn0 = document.getElementById('btn-0'); //Inserido
const btnPonto = document.getElementById('btn-ponto'); //Inserido
//=====================================================================

//================EVENT LISTENERS================
//Numeros
btn0.addEventListener('click', () => {inserir('0')});
btn1.addEventListener('click', () => {inserir('1')});
btn2.addEventListener('click', () => {inserir('2')});
btn3.addEventListener('click', () => {inserir('3')});
btn4.addEventListener('click', () => {inserir('4')});
btn5.addEventListener('click', () => {inserir('5')});
btn6.addEventListener('click', () => {inserir('6')});
btn7.addEventListener('click', () => {inserir('7')});
btn8.addEventListener('click', () => {inserir('8')});
btn9.addEventListener('click', () => {inserir('9')});

//Operações
btnDividir.addEventListener('click', () => {inserir(' / ')});
btnMais.addEventListener('click', () => {inserir(' + ')});
btnMenos.addEventListener('click', () => {inserir(' - ')});
btnMultiplicacao.addEventListener('click', () => {inserir(' * ')})

//Outros botões
btnPonto.addEventListener('click', () => {inserir('.')});
btnC.addEventListener('click', limpar)
btnIgual.addEventListener('click', calcular)




//=====================FUNÇÕES====================
function inserir(num){
    inputResultado.value += num;
    console.log('Inserindo')
}

function limpar(){
    inputResultado.value = '';
    console.log('Limpando')
}

//Talvez tenha como melhorar a lógica
function calcular(){
    let resultado = eval(inputResultado.value);
    inputResultado.value = resultado;
    console.log('Calculando');
}

function remover(){
    console.log('Removendo')
}
