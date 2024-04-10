import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddPlayer() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    birth_date: '',
    world_ch_won: 0,
    profile_url: '',
    image_url: ''
  });

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('https://chess.sulla.hu/chess', formData);
      navigate('/');
    } catch (error) {
      console.error('Error adding player: ', error);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Add Player</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name:</label>
          <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="birth_date" className="form-label">Birth Date:</label>
          <input type="date" className="form-control" id="birth_date" name="birth_date" value={formData.birth_date} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="world_ch_won" className="form-label">World Championships Won:</label>
          <input type="number" className="form-control" id="world_ch_won" name="world_ch_won" value={formData.world_ch_won} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="profile_url" className="form-label">Profile URL:</label>
          <input type="text" className="form-control" id="profile_url" name="profile_url" value={formData.profile_url} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="image_url" className="form-label">Image URL:</label>
          <input type="text" className="form-control" id="image_url" name="image_url" value={formData.image_url} onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary">Add Player</button>
      </form>
    </div>
  );
}

export default AddPlayer;