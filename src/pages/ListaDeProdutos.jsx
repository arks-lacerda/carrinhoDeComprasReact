import React from 'react';
import Produto from './Produto';

const produtos = [
  { id: 1, nome: 'Óculos Astronauta', preco: 20000 },
  { id: 2, nome: 'Notebook Dell G7', preco: 3000 },
  // ... outros produtos
];

const ListaDeProdutos = () => {
  return (
    <div>
      <h2>Produtos Disponíveis</h2>
      {produtos.map((produto) => (
        <Produto key={produto.id} produto={produto} />
      ))}
    </div>
  );
};

export default ListaDeProdutos;
