import React from 'react';
import { useCarrinho } from './CarrinhoProvider';

const Carrinho = () => {
  const { produtos, removerProduto, valorTotal } = useCarrinho();

  return (
    <div>
      <h2>Carrinho de Compras</h2>
      {produtos.map((produto) => (
        <div key={produto.id}>
          <p>
            {produto.nome} - R$ {produto.preco}
          </p>
          <button onClick={() => removerProduto(produto)}>
            Remover do Carrinho
          </button>
        </div>
      ))}
      <p>Valor Total: R$ {valorTotal}</p>
    </div>
  );
};

export default Carrinho;
