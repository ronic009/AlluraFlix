// src/components/VideoCard.js
import React from 'react';
import '../styles/styles.css';

const VideoCard = ({ title, category, image, videoUrl, description, onEdit, onDelete }) => {
  return (
    <div className="video-card" >
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
        <button onClick={onEdit}>Editar</button>
        <button onClick={onDelete}>Eliminar</button>
    </div>
  );
};

export default VideoCard;
