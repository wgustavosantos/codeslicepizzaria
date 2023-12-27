import React from 'react';
import { useHistory } from 'react-router-dom';
import PizzaForm from './PizzaForm';
import { PizzaData } from '../Orders/types';
import './styles.css';

function CadastroPizzaPage() {
  const history = useHistory();
  console.log("foi renderizado")
  const handlePizzaSubmit = (pizzaData: PizzaData) => {
    console.log('Pizza Data:', pizzaData);

    history.push('/orders');
  };

  return (
    <div className='container'>
      <h2 className='title'>Cadastro de Pizza</h2>
      <PizzaForm onSubmit={handlePizzaSubmit} />
    </div>
  );
};

export default CadastroPizzaPage;
