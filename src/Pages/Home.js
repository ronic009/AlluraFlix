import React, { useState } from 'react';
import Header from '../Components/Header';
import Banner from '../Components/Banner';
import VideoCard from '../Components/VideoCard';
import Modal from '../Components/Modal';
import videosData from '../data/videosData';

const Home = () => {
  const [videos, setVideos] = useState(videosData);
  const [showModal, setShowModal] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);

  const handleDelete = (category, title) => {
    setVideos(prevVideos => {
      const updatedCategory = prevVideos[category].filter(video => video.title !== title);
      return { ...prevVideos, [category]: updatedCategory };
    });
  };

  const handleEdit = (category, title) => {
    const videoToEdit = videos[category].find(video => video.title === title);
    setCurrentVideo({ ...videoToEdit, category });
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentVideo(null);
  };

  const handleSaveChanges = (e) => {
    e.preventDefault();
    const updatedVideo = {
      title: e.target.title.value,
      description: e.target.description.value,
      thumbnail: e.target.thumbnail.value,
      category: currentVideo.category
    };

    setVideos(prevVideos => {
      const updatedCategory = prevVideos[currentVideo.category].map(video =>
        video.title === currentVideo.title ? updatedVideo : video
      );
      return { ...prevVideos, [currentVideo.category]: updatedCategory };
    });
    handleCloseModal();
  };

  return (
    <div>
      <Header />
      <Banner />
      {Object.keys(videos).map(category => (
        <section key={category}>
          <h2>{category}</h2>
          <div className="video-list">
            {videos[category].map(video => (
              <VideoCard 
                key={video.title} 
                {...video} 
                onDelete={() => handleDelete(category, video.title)} 
                onEdit={() => handleEdit(category, video.title)}
              />
            ))}
          </div>
        </section>
      ))}
      <Modal show={showModal} handleClose={handleCloseModal}>
        {currentVideo && (
          <div>
            <h2>Edit Video</h2>
            <form onSubmit={handleSaveChanges}>
              <label>
                Title:
                <input type="text" name="title" defaultValue={currentVideo.title} required />
              </label>
              <label>
                Description:
                <input type="text" name="description" defaultValue={currentVideo.description} required />
              </label>
              <label>
                Thumbnail URL:
                <input type="text" name="thumbnail" defaultValue={currentVideo.thumbnail} required />
              </label>
              <button type="submit">Save</button>
            </form>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Home;