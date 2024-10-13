import React from 'react';
import './Profile.css';

const Profile = ({ profile, onSummaryClick }) => {
  return (
    <div className="profile-card">
      <img src={profile.image} alt={profile.name} className="profile-image" />
      <h2 className="profile-name">{profile.name}</h2>
      <p className="profile-description">{profile.description}</p>
      <button className="summary-btn" onClick={() => onSummaryClick(profile)}>
        View Location
      </button>
    </div>
  );
};

export default Profile;