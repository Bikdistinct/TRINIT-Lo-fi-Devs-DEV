import React from 'react';
import './UserProfile.css'

const UserProfile = () => {
  return (
    <div className="user-profile">
      <div className="user-info">
        <img
          src="https://via.placeholder.com/150x150"
          alt="User avatar"
          className="avatar"
        />
        <h3 className="username">John Doe</h3>
        <p className="user-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="user-details">
        <div className="detail">
          <p className="detail-title">Location</p>
          <p className="detail-value">San Francisco, CA</p>
        </div>
        <div className="detail">
          <p className="detail-title">Website</p>
          <p className="detail-value">
            <a href="https://example.com">example.com</a>
          </p>
        </div>
        <div className="detail">
          <p className="detail-title">Member since</p>
          <p className="detail-value">January 2020</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
