// cria um array vazio
let itens = [];

// função para adicionar item
function adicionarItem() {

    // pega o valor do id 'itemInput' e salva na variável itemInput
    const itemInput = document.getElementById('itemInput');

    // pega o valor do id 'listaCompras'que onde será exibida, e salva na variável listaCompras
    const listaCompras = document.getElementById('listaCompras');

    // pega o valor do itemInput e salva na variável 'valorItem'
    const valorItem = itemInput.value;

    // Se o valor não estiver vazio
    if (valorItem.trim() !== '') {

        // vai adicionar novo objeto no array itens
        itens.push({

            // recebe o valor do item inserido pelo usuário (valorItem).
            nome: valorItem,
            // inicializado como false, indicando que o item ainda não foi comprado.
            comprado: false
        });

        // limpa o campo após o usuário adicionar um item à lista
        itemInput.value = '';

        // Chama a função atualizarLista e passa o elemento listaCompras como argumento.
        atualizarLista(listaCompras);
    }
}

// Função atualizar lista
function atualizarLista(listaCompras) {

    // Limpa o conteúdo atual da lista de compras
    listaCompras.innerHTML = '';

    // Itera sobre cada item no array "itens"
    itens.forEach((item, index) => {

        // Cria um novo elemento <li> para representar o item na lista
        const li = document.createElement('li');

        // Define o conteúdo HTML do <li> com informações sobre o item
        li.innerHTML = `
            <span>${item.nome}</span>
            <button class="delete-btn" onclick="removerItem(${index})">Remover</button>
            <input type="checkbox" onchange="marcarComoComprado(${index})" ${item.comprado ? 'checked' : ''}>
        `;

        // Adiciona o <li> à lista de compras no DOM
        listaCompras.appendChild(li);
    });
}

function removerItem(index) {

    // Remove o item do array "itens" na posição indicada pelo índice
    itens.splice(index, 1);

    // Obtém uma referência ao elemento com o ID 'listaCompras'
    const listaCompras = document.getElementById('listaCompras');

    // Chama a função para atualizar visualmente a lista de compras
    atualizarLista(listaCompras);
}

function marcarComoComprado(index) {

    // Inverte o valor da propriedade "comprado" do item no array "itens"
    itens[index].comprado = !itens[index].comprado;

    // Obtém uma referência ao elemento com o ID 'listaCompras'
    const listaCompras = document.getElementById('listaCompras');

    // Chama a função para atualizar visualmente a lista de compras
    atualizarLista(listaCompras);
}