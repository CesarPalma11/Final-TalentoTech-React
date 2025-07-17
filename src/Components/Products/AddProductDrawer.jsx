
import React, { useState } from 'react';
import { Offcanvas, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { toast } from 'react-toastify';

const AddProductDrawer = ({ show, onClose, onProductAdded }) => {
  const [form, setForm] = useState({
    nombre: '',
    precio: '',
    desc: '',
    image: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddProduct = async () => {
    try {
      await axios.post('https://686d213dc9090c495385500c.mockapi.io/ecommerce/productos', form);
      toast.success("Producto agregado con éxito");
      onProductAdded(); 
      onClose();
    } catch (error) {
      toast.error(`Error al agregar producto: ${error.message}`);
    }
  };

  return (
    <Offcanvas show={show} onHide={onClose} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Agregar Producto</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" name="nombre" value={form.nombre} onChange={handleChange} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Precio</Form.Label>
            <Form.Control type="number" name="precio" value={form.precio} onChange={handleChange} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Descripción</Form.Label>
            <Form.Control as="textarea" name="desc" value={form.desc} onChange={handleChange} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Imagen URL</Form.Label>
            <Form.Control type="text" name="image" value={form.image} onChange={handleChange} />
          </Form.Group>
          <Button variant="primary" onClick={handleAddProduct}>Agregar</Button>
        </Form>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default AddProductDrawer;
