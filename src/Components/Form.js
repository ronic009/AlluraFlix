// src/Components/Form.js
import React, { useState } from 'react';

const Form = ({ onSubmit, video = {} }) => {
  const [title, setTitle] = useState(video.title || '');
  const [description, setDescription] = useState(video.description || '');
  const [url, setUrl] = useState(video.url || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description && url) {
      onSubmit({ title, description, url });
    } else {
      alert('All fields are required!');
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>{video.id ? 'Edit Video' : 'Add New Video'}</h2>
      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>URL</label>
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <button type="submit">{video.id ? 'Update Video' : 'Add Video'}</button>
      </div>
    </form>
  );
};

export default Form;
