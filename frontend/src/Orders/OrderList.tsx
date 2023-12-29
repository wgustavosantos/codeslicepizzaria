import React, { useEffect, useState } from 'react';
import { fetchOrders, updateOrderStatus } from '../api';
import {OrderDTO} from './types'
import './OrderList.css';
interface OrderListProps {
}

const OrderList: React.FC<OrderListProps> = () => {
  const [orders, setOrders] = useState<OrderDTO[]>([]);

  useEffect(() => {
    const fetchOrdersData = async () => {
      try {
        const response = await fetchOrders();
        setOrders(response.data.map((order: any) => ({ ...order, onStatusChange: handleStatusChange })));
      } catch (error) {
        console.error('Erro ao buscar os pedidos', error);
      }
    };

    fetchOrdersData();
  }, []);

  const handleStatusChange = async (orderId: number, newStatus: string) => {
    try {
      const response = await updateOrderStatus(orderId, newStatus);
      setOrders(prevOrders =>
        prevOrders.map(order =>
          order.id === orderId ? { ...order, status: response.data.status } : order
        )
      );
    } catch (error) {
      console.error('Erro ao atualizar o status do pedido', error);
    }
  };

  return (
    <div className="order-list-container">
      <h1>Lista de Pedidos</h1>
      <ul>
        {orders.map(order => (
          <li key={order.id} className="order-item">
            <div>
              <strong>Pedido #{order.id}</strong>
            </div>
            <div>Endereço: {order.address}</div>
            <div
              className={`order-status ${
                order.status === 'PENDING'
                  ? 'order-status-pending'
                  : 'order-status-delivered'
              }`}
            >
              Status: {order.status}
            </div>
            <div>Total: R$ {order.total.toFixed(2)}</div>
            <div className="order-products">
              <h3>Produtos:</h3>
              <ul>
                {order.products.map(product => (
                  <li key={product.id} className="product-item">
                    {product.name} - R$ {product.price.toFixed(2)}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <button
                onClick={() => order.onStatusChange(order.id)}
                className="change-status-btn"
              >
                Alterar Status
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderList;