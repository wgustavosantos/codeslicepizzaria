  import { addProducts, addPhoto } from '../api';
  import './styles.css';
  import React, { useState } from 'react';
  import { useHistory } from 'react-router-dom';
  import { PhotoPizza } from '../Orders/types';

  interface PizzaFormProps {
    onSubmit: (pizzaData: PizzaData) => void;
  }

  interface PizzaData {
    name: string;
    price: number;
    description: string;
    imageUri: string;
  }


  const PizzaForm: React.FC<PizzaFormProps> = ({ onSubmit }) => {
    const history = useHistory();
    const [formData, setFormData] = useState<PizzaData>({
      name: '',
      price: 0,
      description: '',
      imageUri: '',
    });

    const [photoFormData, setPhotoFormData] = useState<PhotoPizza>({
      photo: null as any
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files && e.target.files[0];
  
      if (file) {
        setPhotoFormData({
          photo: file,
        });
      }

    };

    const handleCancel = () => {
      history.goBack();
    }

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      try {
        const response = await addProducts(formData); 
        console.log(response.data)
        if (response.status === 200) {
          onSubmit(formData);
          await addPhoto(response.data.id, photoFormData.photo);
          setFormData({
            name: '',
            price: 0,
            description: '',
            imageUri: '',
          });
          

        } else {
          console.error('Failed to add pizza. Server responded with:', response.status);
        }
      } catch (error) {
        console.error('Error adding pizza:');
      }
      
    };

    return (
      <form  className="product-form" onSubmit={handleSubmit}>
        <label>
          <span className='titles'>Nome:</span>
          <br />
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder='Ex: Pizza de Peperoni'/>
        </label>
        <br />
        <label>
          <span className='titles'>Preço:</span>
          <br />
          <input id='price' type="number" name="price" value={formData.price} onChange={handleInputChange} placeholder='12,55'/>
        </label>
        <br />
        <label>
          <span className='titles'>Descrição:</span>
          <br />
          <textarea name="description" id='descricao' value={formData.description} onChange={handleInputChange} placeholder='Risoto Funghi feito com ingredientes finos e o toque especial do chef.' />
        </label>
        <br />
        <label>
          <span id='file-pizza'>Selecione a imgem da pizza</span> 
          <input type="file" name="imageUri" onChange={handleFileChange} />
        </label>
        <br />
        <button type="submit" className='btn-success'>Cadastrar</button>
        <button type="reset" className='btn-danger' onClick={handleCancel}>Cancelar</button>
      </form>
    );
  };

  export default PizzaForm;
