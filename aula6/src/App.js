import {BrowserRouter} from 'react-router-dom';
import Nav from './components/Nav';
import RouterNavigation from './router';

function App() {
  return (
    /* As rotas ficam aqui dentro do BrowserRouter */
      <BrowserRouter>
      <Nav />
      <RouterNavigation />
      </BrowserRouter>
  );
};

export default App;
