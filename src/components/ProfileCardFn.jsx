import React from 'react';
import './ProfileCard.css';
import reactLogo from '../assets/react.svg';

function ProfileCardFn() {
    return (
        <div className="profile-card">
            <img src={reactLogo} alt="Profile Avatar" className="profile-avatar" />
            <h2 className="profile-name">Rahul Sharma</h2>
            <p className="profile-bio">
                Full Stack Developer from Bangalore. Specialized in React and Node.js.
                Building scalable tech solutions for modern India.
            </p>
        </div>
    );
}

export default ProfileCardFn;
