import React from 'react';
import './App.css'; // CSS file for styling
import photo1 from './photos/eufy.jpg'

const Activities = () => {
  return (
    <div>
      <div className="Activities-section">
        <div className="activities-grid">
        <div className="activity">
            <div className="activity-content">
            <a href="#">
              <img src={photo1} alt="Learn" />
            </a> 
              <div>
                <h1>IoT Exploitation</h1>
                <p>Exploit IoT devices to learn penetration testing and embedded system programming.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Activities;
