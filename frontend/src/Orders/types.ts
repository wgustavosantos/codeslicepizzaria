export type Product = {
    id: number;
    name: string;
    price: number;
    description: string;
    imageUri: string;
}

export type OrderLocationData = {
    latitude: number;
    longitude: number;
    address: string;
}

type ProductId = {
    id: number;
}

export type OrderPayload = {
    products: ProductId[];
} & OrderLocationData;

export type PizzaData = {
    name: string;
    price: number;
    description: string;
    imageUri: string;
  }

export type PhotoPizza = {
    photo: File;
}

export type OrderDTO =  {
    id: number;
    address: string;
    latitude: number;
    longitude: number;
    moment: string;
    status: string;
    total: number;
    products: ProductDTO[];
    onStatusChange: (orderId: number) => Promise<void>;

  }
  
  export type ProductDTO = {
    id: number;
    name: string;
    price: number;
    description: string;
    imageUri: string;
  }
