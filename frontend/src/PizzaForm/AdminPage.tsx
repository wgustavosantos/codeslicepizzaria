import React from 'react';
import { Link } from 'react-router-dom';
import './AdminPage.css';

function AdminPage() {
  return (
    <div className="admin-container">
      <h1>Área de Admin</h1>
      <div className="admin-actions">
        <Link to="/admin/cadastro-pizza" className="admin-btn">
          Cadastro de Pizza
        </Link>
        <Link to="/admin/lista-pedidos" className="admin-btn">
          Lista de Pedidos
        </Link>
      </div>
    </div>
  );
}

export default AdminPage;