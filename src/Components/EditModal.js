// src/Components/EditModal.js
import React from 'react';
import './styles.css';

const EditModal = ({ isOpen, onClose, onSubmit, video }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <Form onSubmit={onSubmit} video={video} />
      </div>
    </div>
  );
};

export default EditModal;
