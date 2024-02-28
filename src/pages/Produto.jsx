import React from 'react';
import { useCarrinho } from './CarrinhoProvider';

const Produto = ({ produto }) => {
  const { adicionarProduto } = useCarrinho();

  return (
    <div>
      <p>
        {produto.nome} - R$ {produto.preco}
      </p>
      <button onClick={() => adicionarProduto(produto)}>
        Adicionar ao Carrinho
      </button>
    </div>
  );
};

export default Produto;
