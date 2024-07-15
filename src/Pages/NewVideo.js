// src/pages/NewVideo.js
import React, { useState } from 'react';
import Header from '../Components/Header';
import videosData from '../data/videosData';  // Añadir esta línea
import '../styles/NewVideo.css';

const NewVideo = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const [video, setVideo] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí manejas el guardado de datos del nuevo video
    const newVideo = {
      id: Date.now(),
      title,
      category,
      image,
      video,
      description
    };

    const storedVideos = JSON.parse(localStorage.getItem('videos')) || videosData;
    if (!storedVideos[category]) {
      storedVideos[category] = [];
    }
    storedVideos[category].push(newVideo);
    localStorage.setItem('videos', JSON.stringify(storedVideos));

    // Limpiar formulario después de guardar
    setTitle('');
    setCategory('');
    setImage('');
    setVideo('');
    setDescription('');
  };

  const handleClear = () => {
    setTitle('');
    setCategory('');
    setImage('');
    setVideo('');
    setDescription('');
  };

  return (
    <div>
      <Header />
      <h1>Nuevo Video</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Título:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Categoría:</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)} required>
            <option value="">Selecciona una categoría</option>
            <option value="Front-End">Front-End</option>
            <option value="Back-End">Back-End</option>
            <option value="Innovación y Gestión">Innovación y Gestión</option>
          </select>
        </div>
        <div className="form-group">
          <label>Imagen:</label>
          <input type="text" value={image} onChange={(e) => setImage(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Video:</label>
          <input type="text" value={video} onChange={(e) => setVideo(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Descripción:</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
        </div>
        <button type="submit">Guardar</button>
        <button type="button" onClick={handleClear}>Limpiar</button>
      </form>
    </div>
  );
};

export default NewVideo;