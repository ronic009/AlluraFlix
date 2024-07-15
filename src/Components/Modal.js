import React from 'react';
import '../styles/modal.css';

const Modal = ({ show, handleClose, handleSave, currentVideo }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={handleClose}>&times;</span>
        <h2>Editar CARD:</h2>
        <form onSubmit={handleSave}>
          <div className="form-group">
            <label>Título:</label>
            <input type="text" name="title" defaultValue={currentVideo.title} required />
          </div>
          <div className="form-group">
            <label>Categoría:</label>
            <select name="category" defaultValue={currentVideo.category} required>
              <option value="Front-End">Front-End</option>
              <option value="Back-End">Back-End</option>
              <option value="Innovación y Gestión">Innovación y Gestión</option>
            </select>
          </div>
          <div className="form-group">
            <label>Imagen:</label>
            <input type="text" name="thumbnail" defaultValue={currentVideo.image} required />
          </div>
          <div className="form-group">
            <label>Video:</label>
            <input type="text" name="video" defaultValue={currentVideo.video} required />
          </div>
          <div className="form-group">
            <label>Descripción:</label>
            <textarea name="description" defaultValue={currentVideo.description} required />
          </div>
          <button type="submit">Guardar</button>
          <button type="button" onClick={handleClose}>Limpiar</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
