

// Função que pega os valores, já adicionados no html
function botoes(value){
    
    // pega o valor e coloca no display como texto
    document.getElementById('display').value += value;
}

// Função para limpar o display
function limparDisplay(){

    // adiciona o valor '' no display
    document.getElementById('display').value = '';
}

// Função que vai calcular os valores adicionados
function calcularResultado(){
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (error) {
        document.getElementById('display').value = 'Erro';
    }
}

