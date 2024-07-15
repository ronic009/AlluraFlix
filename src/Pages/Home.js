import React, { useState, useEffect } from 'react';
import Header from '../Components/Header';
import Banner from '../Components/Banner';
import VideoCard from '../Components/VideoCard';
import Modal from '../Components/Modal';
import videosData from '../data/videosData';

const Home = () => {
  const [videos, setVideos] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);

  useEffect(() => {
    const storedVideos = JSON.parse(localStorage.getItem('videos')) || videosData;
    setVideos(storedVideos);
  }, []);

  const handleDelete = (category, title) => {
    setVideos(prevVideos => {
      const updatedCategory = prevVideos[category].filter(video => video.title !== title);
      const updatedVideos = { ...prevVideos, [category]: updatedCategory };
      localStorage.setItem('videos', JSON.stringify(updatedVideos));
      return updatedVideos;
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
      image: e.target.image.value,
      video: e.target.video.value,
      category: currentVideo.category
    };

    setVideos(prevVideos => {
      const updatedCategory = prevVideos[currentVideo.category].map(video =>
        video.title === currentVideo.title ? updatedVideo : video
      );
      const updatedVideos = { ...prevVideos, [currentVideo.category]: updatedCategory };
      localStorage.setItem('videos', JSON.stringify(updatedVideos));
      return updatedVideos;
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
                Image URL:
                <input type="text" name="image" defaultValue={currentVideo.image} required />
              </label>
              <label>
                Video URL:
                <input type="text" name="video" defaultValue={currentVideo.video} required />
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
