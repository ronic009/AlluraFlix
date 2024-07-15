// src/components/VideoCard.js

import React from 'react';
import '../styles/VideoCard.css';

const VideoCard = ({ id, title, description, image, onDelete, onEdit }) => (
  <div className="video-card">
    <img src={image} alt={title} />
    <h3>{title}</h3>
    <p>{description}</p>
    <button onClick={() => { console.log("Edit button clicked for", title); onEdit(); }}>Editar</button>
    <button onClick={() => { console.log("Delete button clicked for", title); onDelete(); }}>Borrar</button>
  </div>
);

export default VideoCard;

