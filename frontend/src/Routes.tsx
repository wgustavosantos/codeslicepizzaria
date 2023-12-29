import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import Orders from './Orders';
import CadastroPizzaPage from './PizzaForm';
import AdminPage from './PizzaForm/AdminPage';
import OrderList from './Orders/OrderList';

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
          <Route path="/admin/cadastro-pizza" exact>
            <CadastroPizzaPage />
          </Route>
          <Route path="/admin/lista-pedidos" exact>
            <OrderList/>
          </Route>
          <Route path="/admin" exact>
            <AdminPage/>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }

export default Routes;
