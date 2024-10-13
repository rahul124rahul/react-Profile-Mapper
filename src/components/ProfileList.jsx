import React from 'react';
import Profile from './Profile';

const ProfileList = ({ profiles, onSummaryClick }) => {
  return (
    <div className="profile-list">
      {profiles.map((profile) => (
        <Profile key={profile.id} profile={profile} onSummaryClick={onSummaryClick} />
      ))}
    </div>
  );
};

export default ProfileList;
