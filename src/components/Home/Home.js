import React from 'react';
import "./Home.css"
import video from "../../projectimg/video.mp4"

const Home = () => {
  return (
    <section className='home'>
      <div className='overlay'>

        <video src={video} autoPlay loop muted type='video/mp4'></video>

        <div className='homecontent container'>
          
          <div className='textdiv'>
            <span className='smalltext'>
              TravelEasy
            </span>

            <h1 className='hometitle'>Explore Beyond the Horizon – Your Adventure Awaits!</h1>


            <span className='smalltext'>
            <button className='btn'><a href="#form">For Queries.....</a></button>
            </span>
            
          </div>

        </div>

      </div>
    </section>
  )
}

export default Home
