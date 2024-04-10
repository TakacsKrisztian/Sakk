import React, { useState } from 'react';
import axios from 'axios';

function PlayerCard({ player, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(player);

  const handleDelete = async () => {
    try {
      await axios.delete(`https://chess.sulla.hu/chess/${player.id}`);
      onDelete(player.id);
    } catch (error) {
      console.error('Error deleting player: ', error);
    }
  };

  const handleModify = async () => {
    try {
      await axios.put(`https://chess.sulla.hu/chess/${player.id}`, formData);
      setIsEditing(false);
    } catch (error) {
      console.error('Error modifying player: ', error);
    }
  };

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCancel = () => {
    setFormData(player);
    setIsEditing(false);
  };

  return (
    <div className="card">
      <img src={formData.image_url} alt={formData.name} />
      <div className="card-details">
        {isEditing ? (
          <>
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
            <input type="date" name="birth_date" value={formData.birth_date} onChange={handleChange} />
            <input type="number" name="world_ch_won" value={formData.world_ch_won} onChange={handleChange} />
            <input type="text" name="profile_url" value={formData.profile_url} onChange={handleChange} />
            <input type="text" name="image_url" value={formData.image_url} onChange={handleChange} />
            <br></br>
            <button class="btn btn-success" onClick={handleModify}><i class="bi bi-floppy-fill"></i>Save</button>
            <button class="btn btn-danger" onClick={handleCancel}><i class="bi bi-x-octagon-fill"></i>Cancel</button>
          </>
        ) : (
          <>
            <h2>{formData.name}</h2>
            <p>Birth Date: {formData.birth_date}</p>
            <p>World Championships Won: {formData.world_ch_won}</p>
            <a href={formData.profile_url} target="_blank" rel="noopener noreferrer">Profile Link</a>
            <button class="btn btn-warning" onClick={() => setIsEditing(true)}><i class="bi bi-arrow-left-right"></i>Modify</button>
            <button class="btn btn-danger" onClick={handleDelete}><i class="bi bi-trash"></i>Delete</button>
          </>
        )}
      </div>
    </div>
  );
}

export default PlayerCard;