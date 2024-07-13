import React, { useState } from 'react';

function VideoForm() {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    imageUrl: '',
    videoUrl: '',
    description: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para guardar el video
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="Título" onChange={handleChange} />
      <input type="text" name="category" placeholder="Categoría" onChange={handleChange} />
      <input type="text" name="imageUrl" placeholder="URL de la imagen" onChange={handleChange} />
      <input type="text" name="videoUrl" placeholder="URL del video" onChange={handleChange} />
      <textarea name="description" placeholder="Descripción" onChange={handleChange}></textarea>
      <button type="submit">Guardar</button>
      <button type="reset">Limpiar</button>
    </form>
    </div>
  );
}

export default VideoForm;