import ListaDeProdutos from './pages/ListaDeProdutos';
import Carrinho from './pages/Carrinho';
import { CarrinhoProvider } from './pages/CarrinhoProvider';

const App = () => {
  return (
    <CarrinhoProvider>
      <div>
        <ListaDeProdutos />
        <Carrinho />
      </div>
    </CarrinhoProvider>
  );
};

export default App;
