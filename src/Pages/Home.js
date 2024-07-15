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
      ...currentVideo,
      title: e.target.title.value,
      category: e.target.category.value,
      image: e.target.thumbnail.value,
      video: e.target.video.value,
      description: e.target.description.value,
    };

    setVideos(prevVideos => {
      const updatedCategory = prevVideos[currentVideo.category].map(video =>
        video.title === currentVideo.title ? updatedVideo : video
      );
      const newVideos = { ...prevVideos, [currentVideo.category]: updatedCategory };
      localStorage.setItem('videos', JSON.stringify(newVideos));
      return newVideos;
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
      <Modal show={showModal} handleClose={handleCloseModal} handleSave={handleSaveChanges} currentVideo={currentVideo} />
    </div>
  );
};

export default Home;