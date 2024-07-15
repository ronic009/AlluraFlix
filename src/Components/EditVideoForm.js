// src/Components/EditVideoForm.js
import React, { useState, useEffect } from 'react';

const EditVideoForm = ({ video, onSave, onClose }) => {
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
    onSave(formData);
  };

  return (
    <div>
      <h2>Edit Video</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" name="title" value={formData.title} onChange={handleChange} />
        </label>
        <label>
          Category:
          <input type="text" name="category" value={formData.category} onChange={handleChange} />
        </label>
        <label>
          Image:
          <input type="text" name="image" value={formData.image} onChange={handleChange} />
        </label>
        <label>
          Video:
          <input type="text" name="video" value={formData.video} onChange={handleChange} />
        </label>
        <label>
          Description:
          <textarea name="description" value={formData.description} onChange={handleChange}></textarea>
        </label>
        <button type="submit">Save</button>
        <button type="button" onClick={onClose}>Close</button>
      </form>
    </div>
  );
};

export default EditVideoForm;
