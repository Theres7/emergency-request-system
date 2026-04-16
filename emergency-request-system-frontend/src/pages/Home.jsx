import React from 'react'
import '../styles/Home.css'
import EmergencyRequestForm from '../components/EmergencyRequestForm';

function Home() {
  return (
    <>
        <div className="home-heads">
           <div className="title-box">
              <h2 id="title">Emergency Request System</h2>
           </div>

            <h1 className="main-title">ResQFast - Get Help Fast </h1>
            <p className="info">Submit your emergency request in seconds. </p>
        </div>
        <div>
          <EmergencyRequestForm/>
        </div>
    </>
  )
}

export default Home