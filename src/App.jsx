import React, { useState, useEffect } from 'react';
import './App.css';
import ProfileList from './components/ProfileList';
import MapComponent from './components/MapComponent';
import axios from 'axios';

function App() {
  const [profiles, setProfiles] = useState([]);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    async function fetchProfiles() {
      try {

        const response = await axios.get('/profiles.json');
        setProfiles(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching profiles:", error);
        setLoading(false);
      }
    }
    fetchProfiles();
  }, []);

  const handleSummaryClick = (profile) => {
    setSelectedProfile(profile);
  };

  const handleBackClick = () => {
    setSelectedProfile(null);
  };

  return (
    <div className="App">
      <h1>Profile Mapper</h1>
      {loading ? (
        <p>Loading profiles...</p>
      ) : selectedProfile ? (
        <div>
          <MapComponent location={selectedProfile.location} />
          <button className="back-button" onClick={handleBackClick}>
            Back to Profiles
          </button>
        </div>
      ) : (
        <ProfileList profiles={profiles} onSummaryClick={handleSummaryClick} />
      )}
    </div>
  );
}

export default App;
