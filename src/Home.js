import React from 'react';
import './App.css'; // CSS file for styling
import photo1 from './photos/eufy.jpg'
import photo2 from './photos/petlibro.jpg'

const Home = () => {
  return (
    <div>
      <div className="welcome-message">
        <h1>AREA 7 at Pima East Campus</h1>
      </div>
      <div className="about-makerspace">
        <h1>DEVELOP. HACK. MAKE.</h1>
        <p>AREA 7 at Pima East Campus IoT makerspace where devices, networking, hacking, and engineering collide! 
            Created by the Pima IT TechEX Iternship team, AREA 7 is a hub for getting hands-on with the world of IoT.
            <br>
            </br>
            <br></br>
            At AREA 7, all students can learn about IoT, collaborate on projects, and more through making. By using state-of-the-art devices, laptops, and attemping the
            activties, students will have the chance to perform real world work! 
        </p>
        
        <h1> WHAT CAN YOU DO AT AREA 7?</h1>
      </div>

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

export default Home;
