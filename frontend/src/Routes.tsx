import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import Orders from './Orders';
import CadastroPizzaPage from './PizzaForm';

function Routes() {
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/orders" exact>
            <Orders />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/cadastro" exact>
            <CadastroPizzaPage />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }

export default Routes;
