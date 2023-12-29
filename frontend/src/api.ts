import axios from "axios";
import { OrderPayload, PizzaData, OrderDTO } from './Orders/types';

const API_URL = "http://localhost:8080";
const mapboxToken = "pk.eyJ1IjoiZ3VzcG9udG9jb20iLCJhIjoiY2w3Y2MydzlvMHU0MDN5cGZhYXljem5vMyJ9.mlKfYDGpAqLBS9eFs03Cxg";

export function fetchProducts() {
    return axios(`${API_URL}/products`)
}

export function fetchOrders() {
    return axios.get(`${API_URL}/orders`);
}

export function updateOrderStatus(orderId: number, newStatus: string) {
    return axios.put<OrderDTO>(`${API_URL}/orders/${orderId}/delivered`, null, {
        params: { id: orderId, status: newStatus },
    });
}

export function addProducts(PizzaData: PizzaData) {
    return axios.post(`${API_URL}/products`, PizzaData);
}

export function addPhoto(productId: string, photo: File) {
    const formData = new FormData();
    formData.append('photo', photo);

    return axios.post(`${API_URL}/products/${productId}/photo`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
}

export function fetchLocalMapBox(local: string) {
    return axios(`https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?access_token=${mapboxToken}`)
}

export function saveOrder(payload: OrderPayload) {
    return axios.post(`${API_URL}/orders`, payload)
}