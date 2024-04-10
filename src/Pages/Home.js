import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PlayerCard from '../Components/PlayerCard';

function Home() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await axios.get('https://chess.sulla.hu/chess');
        setPlayers(response.data);
      } catch (error) {
        console.error('Error fetching players: ', error);
      }
    };

    fetchPlayers();
  }, []);

  const handleDeletePlayer = async playerId => {
    try {
      await axios.delete(`https://chess.sulla.hu/chess/${playerId}`);
      setPlayers(prevPlayers => prevPlayers.filter(player => player.id !== playerId));
    } catch (error) {
      console.error('Error deleting player: ', error);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Chess Players</h2>
      <div className="row">
        {players.map(player => (
          <div key={player.id} className="col-md-4 mb-4">
            <PlayerCard player={player} onDelete={handleDeletePlayer} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;