// src/Components/Modal.js
import React from 'react';

const Modal = ({ show, handleClose, children }) => {
  return (
    <div className="modal" style={{ display: show ? 'block' : 'none' }}>
      <div className="modal-content">
        <span className="close" onClick={handleClose}>&times;</span>
        {children}
      </div>
    </div>
  );
};

export default Modal;
