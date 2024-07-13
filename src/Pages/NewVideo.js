// src/pages/NewVideo.js
import React, { useState } from 'react';
import Header from '../Components/Header';

const NewVideo = () => {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    image: '',
    video: '',
    description: ''
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Aquí puedes añadir la lógica para guardar el nuevo video
    console.log('New video data:', formData);
    // Opcionalmente puedes usar localStorage
    const videos = JSON.parse(localStorage.getItem('videos')) || [];
    videos.push(formData);
    localStorage.setItem('videos', JSON.stringify(videos));
  };

  return (
    <div>
      <Header />
      <form onSubmit={handleSubmit}>
        <label>Título</label>
        <input type="text" name="title" value={formData.title} onChange={handleChange} required />
        <label>Categoría</label>
        <select name="category" value={formData.category} onChange={handleChange} required>
          <option value="">Escoja una categoría</option>
          <option value="Front-End">Front-End</option>
          <option value="Back-End">Back-End</option>
          <option value="Innovación y Gestión">Innovación y Gestión</option>
        </select>
        <label>Imagen (URL)</label>
        <input type="url" name="image" value={formData.image} onChange={handleChange} required />
        <label>Video (URL)</label>
        <input type="url" name="video" value={formData.video} onChange={handleChange} required />
        <label>Descripción</label>
        <textarea name="description" value={formData.description} onChange={handleChange} required></textarea>
        <button type="submit">Guardar</button>
        <button type="reset">Limpiar</button>
      </form>
    </div>
  );
};

export default NewVideo;
