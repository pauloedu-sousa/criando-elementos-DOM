// Método simples: usando innerHTML
document.getElementById('titulo').innerHTML = 'Bem-vindo à Loja de Produtos';

// Método complexo: criando elementos de forma programática
const produtoContainer = document.getElementById('produto');

const nomeProduto = document.createElement('h2');
nomeProduto.textContent = 'Bíblia de Estudo Pentecostal Grande Luxo Preta Edição Global';

const descricaoProduto = document.createElement('p');
descricaoProduto.textContent = 'Esta é uma das melhores Bíblias de Estudo do Mercado!';

const precoProduto = document.createElement('p');
precoProduto.textContent = 'Preço Promocional: R$ 149,99';

const imagemProduto = document.createElement('img');
imagemProduto.src = '/img/Bíblia_Estudo_Pentecostal.jpg';
imagemProduto.alt = 'Produto Indispensável';

produtoContainer.appendChild(nomeProduto);
produtoContainer.appendChild(descricaoProduto);
produtoContainer.appendChild(precoProduto);
produtoContainer.appendChild(imagemProduto);

let resumo1 = document.createElement('main');
resumo.innerHTML = `
<h2> As características especiais da Bíblia de Estudo Pentecostal: Edição Global, as quais são projetadas para ajudá-lo a entender melhor e aplicar a Palavra de Deus à sua vida, são as seguintes:
</h2>
    <img src="/img/Banner.jpg" alt="Banner">
    <ul>
        <li>Projeto Gráfico exclusivo em duas cores.</li>
        <li>Texto Almeida Revista e Corrigida. 4.ª Edição (2009).</li>
        <li>Materiais de Estudo Reformulados e Ampliados</li>
    </ul>
`;