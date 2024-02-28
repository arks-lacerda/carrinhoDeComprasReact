import React, { createContext, useContext, useReducer } from 'react';

const CarrinhoContext = createContext();

const carrinhoReducer = (state, action) => {
  switch (action.type) {
    case 'ADICIONAR_PRODUTO':
      return {
        ...state,
        produtos: [...state.produtos, action.produto],
      };
    case 'REMOVER_PRODUTO':
      return {
        ...state,
        produtos: state.produtos.filter(
          (produto) => produto.id !== action.produto.id
        ),
      };
    default:
      return state;
  }
};

export const CarrinhoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(carrinhoReducer, { produtos: [] });

  const adicionarProduto = (produto) => {
    dispatch({ type: 'ADICIONAR_PRODUTO', produto });
  };

  const removerProduto = (produto) => {
    dispatch({ type: 'REMOVER_PRODUTO', produto });
  };

  const valorTotal = state.produtos.reduce(
    (total, produto) => total + produto.preco,
    0
  );

  return (
    <CarrinhoContext.Provider
      value={{
        produtos: state.produtos,
        adicionarProduto,
        removerProduto,
        valorTotal,
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
};

export const useCarrinho = () => {
  return useContext(CarrinhoContext);
};
