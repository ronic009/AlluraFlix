// src/Components/EditModal.js
import React, { useState, useEffect } from 'react';
import '../styles/modal.css';

const EditModal = ({ isOpen, onClose, onSubmit, video }) => {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    image: '',
    video: '',
    description: ''
  });

  useEffect(() => {
    if (video) {
      setFormData(video);
    }
  }, [video]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  const handleReset = () => {
    setFormData({
      title: '',
      category: '',
      image: '',
      video: '',
      description: ''
    });
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>EDITAR CARD:</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Título
            <input type="text" name="title" value={formData.title} onChange={handleChange} required />
          </label>
          <label>
            Categoría
            <select name="category" value={formData.category} onChange={handleChange} required>
              <option value="">Escoja una categoría</option>
              <option value="Front-End">Front-End</option>
              <option value="Back-End">Back-End</option>
              <option value="Innovación y Gestión">Innovación y Gestión</option>
            </select>
          </label>
          <label>
            Imagen
            <input type="url" name="image" value={formData.image} onChange={handleChange} required />
          </label>
          <label>
            Video
            <input type="url" name="video" value={formData.video} onChange={handleChange} required />
          </label>
          <label>
            Descripción
            <textarea name="description" value={formData.description} onChange={handleChange} required></textarea>
          </label>
          <button type="submit">GUARDAR</button>
          <button type="button" onClick={handleReset}>LIMPIAR</button>
        </form>
      </div>
    </div>
  );
};

export default EditModal;

