// Método simples: usando innerHTML
document.getElementById('titulo').innerHTML = 'Bem-vindo à Loja de Produtos';

// Método complexo: criando elementos de forma programática
const produtoContainer = document.getElementById('produto');

const nomeProduto = document.createElement('h2');
nomeProduto.textContent = 'Bíblia de Estudo Pentecostal';

const descricaoProduto = document.createElement('p');
descricaoProduto.textContent = 'Esta é uma das melhores Bíblias de Estudo do Mercado!';

const precoProduto = document.createElement('p');
precoProduto.textContent = 'Preço Promocional: R$ 149,99';

const imagemProduto = document.createElement('img');
imagemProduto.src = 'imagem-do-produto.jpg';
imagemProduto.alt = 'Produto Indispensável';

produtoContainer.appendChild(nomeProduto);
produtoContainer.appendChild(descricaoProduto);
produtoContainer.appendChild(precoProduto);
produtoContainer.appendChild(imagemProduto);
