
// Função para adicionar números
function adicionarNumeros() {

    // Pega os números que o usuário digitou, salva na variável numeroEscolhido.
    let numeroEscolhidos = document.getElementById('pegarNumero').value;

    // Converter os números em inteiro
    let numeroInteiro = parseInt(numeroEscolhidos);

        // Validar se é um número válido, se está preenchido e se é maior que Zero.
        if (!numeroInteiro || isNaN(numeroInteiro) || parseInt(numeroInteiro) < 0) {

            // Exibi uma janela avisando que está errado
            Swal.fire({
                icon: 'error',
                title: 'Erro!',
                text: 'Por favor, digite um número válido e maior que zero.',
                customClass: {
                    popup: 'custom-swal-font',
                },
            }).then((result) => {
                // Se o botão "OK" for clicado, reinicie a página
                if (result.isConfirmed) {
                    location.reload(true);
                }
            });

        } else {

            // Exibe o número na tela para o usuário
            document.getElementById('exibirNumerosSorteio').textContent = ' Escolha um número de 0 a igual ou menor que ' + numeroInteiro;

            // Vai ocultar a Div, Para mostrar o número escolhido pelo usuário.
            ocultarDiv('divPegarNumero');
        }

    // Retorna o número adicionado pelo usuário, pra ser usado em outra parte do código.
    return numeroInteiro;
}


// Função para ocultar a div depois de ter pegado o número
function ocultarDiv(idDiv) {

    // Salva na variável, esse comando para não mostrar a Div.
    var div = document.getElementById(idDiv);
    if (div) {

        // coloca esse estilo na div, fazendo ela sumir.
        div.style.display = 'none';

    }    
}        

    // Função para gerar um número aleatório entre 0 ao numero escolhido pelo usuário
    function gerarNumeroAleatorio() {

        // Chama a função adicionarNumeros() para obter o número adicionado pelo usuário e salva na variável numeroAdicionado
        let numeroAdicionado = adicionarNumeros();

        // Gera um número aleatório de 0 ao número adicionado pelo usuário.
        let numeroGerado = Math.floor(Math.random() * numeroAdicionado);

        // Retorna o número gerado
        return numeroGerado;
    
    }

    // Função que realiza o sorteio
    function sorteio(){

        //salva o número gerado e salva na variável 
        const numeroSorteado = gerarNumeroAleatorio();

        // pegar o número digitado pelo usuário
        let usuarioNumero = document.getElementById('numeroUsuario').value;

        // Converte o input do usuário para número
        const numeroEscolhido = parseInt(usuarioNumero);

        if (isNaN(numeroEscolhido)) {

            // Janela que irá exibir o erro
            Swal.fire({
                icon: 'error',
                title: 'Erro!',
                text: 'Por favor, digite um número válido.',
                customClass: {
                    popup: 'custom-swal-font',
                },
            }).then((result) => {
                // Se o botão "OK" for clicado, reinicie a página
                if (result.isConfirmed) {
                    location.reload(true);
                }
            });

            return;
        }

        // verifica se o numero para o sorteio é menor ou maior que os números escolhidos
        if(adicionarNumeros() < numeroEscolhido){

            // Janela que irá exibir o erro
            Swal.fire({
                icon: 'error',
                title: 'Erro!',
                text: 'O número deve ser menor! ',
                customClass: {
                    popup: 'custom-swal-font',
                },
            }).then((result) => {
                // Se o botão "OK" for clicado, reinicie a página
                if (result.isConfirmed) {
                    location.reload(true);
                }
            });


            // Adiciona um botão para reiniciar o jogo
            // Pegar o que está na tag com id "mensagem reniciar"
            const reiniciar = document.getElementById('mensagem_reniciar');

            // Adiciona esse texto na tag 
            reiniciar.innerHTML = "Reiniciar o jogo";

            // cria um evento de click acionando a função "reiniciarJogo()"
            reiniciar.addEventListener('click', reiniciarJogo);


        } else {

            // Verifica se o número escolhido é igual ao número sorteado
            if (numeroEscolhido === numeroSorteado) {

                // vai colocar esse texto e mudar a cor do background, na tag com a id 'resultadoSorteio'
                resultadoSorteio.innerHTML = "Parabéns! Você acertou o número sorteado.";
                resultadoSorteio.style.backgroundColor = "#aaffaa"; 

                // Adiciona um botão para reiniciar o jogo
                // Pegar o que está na tag com id "mensagem reniciar"
                const reiniciar = document.getElementById('mensagem_reniciar');

                // Adiciona esse texto na tag 
                reiniciar.innerHTML = "Reiniciar o jogo";

                // cria um evento de click acionando a função "reiniciarJogo()"
                reiniciar.addEventListener('click', reiniciarJogo);

            
            } else {

                // vai colocar esse texto e mudar a cor do background, na tag com a id 'resultadoSorteio'
                resultadoSorteio.innerHTML = `Você escolheu o número ${numeroEscolhido}, mas o número sorteado foi ${numeroSorteado}. Tente novamente!`;
                resultadoSorteio.style.backgroundColor = "#ffaaaa";


                // Adiciona um botão para reiniciar o jogo
                // Pegar o que está na tag com id "mensagem reniciar"
                const reiniciar = document.getElementById('mensagem_reniciar');

                // Adiciona esse texto na tag 
                reiniciar.innerHTML = "Reiniciar o jogo";

                // cria um evento de click acionando a função "reiniciarJogo()"
                reiniciar.addEventListener('click', reiniciarJogo);

            }

        }

    }

    function reiniciarJogo() {

        // Para limpar o número escolhido pelo usuário
        document.getElementById('numeroUsuario').value = '';

        // Para limpar o número sorteado
        document.getElementById('resultadoSorteio').innerHTML = '';

        // Limpa a cor de fundo
        document.getElementById('resultadoSorteio').style.backgroundColor = ""; 

        // reiniciar tudo
        location.reload(true);

    }
