import React from 'react'
import "./Main.css"
import img1 from "../../projectimg/img1.png"
import img2 from "../../projectimg/img2.png"
import img3 from "../../projectimg/img3.png"
import img4 from "../../projectimg/img4.png"
import img5 from "../../projectimg/img5.png"
import img6 from "../../projectimg/img6.png"
import { FaSearchLocation } from "react-icons/fa";


const Data = [
  {
    id: 1,
    imgsrc: img1,
    title: "Great Wall of China",
    location: "China",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, aspernatur doloremque tempore doloribus enim, sunt voluptatum maxime corrupti eaque cumque assumenda repellat ducimus necessitatibus cupiditate tempora veritatis perferendis obcaecati. Quod."
  },

  {
    id: 2,
    imgsrc: img2,
    title: "Chichén Itzá",
    location: "Mexico",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, aspernatur doloremque tempore doloribus enim, sunt voluptatum maxime corrupti eaque cumque assumenda repellat ducimus necessitatibus cupiditate tempora veritatis perferendis obcaecati. Quod."
  },

  {
    id: 3,
    imgsrc: img3,
    title: "Petra",
    location: "Jordan",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, aspernatur doloremque tempore doloribus enim, sunt voluptatum maxime corrupti eaque cumque assumenda repellat ducimus necessitatibus cupiditate tempora veritatis perferendis obcaecati. Quod."
  },

  {
    id: 4,
    imgsrc: img4,
    title: "Machu Picchu",
    location: "Peru",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, aspernatur doloremque tempore doloribus enim, sunt voluptatum maxime corrupti eaque cumque assumenda repellat ducimus necessitatibus cupiditate tempora veritatis perferendis obcaecati. Quod."
  },

  {
    id: 5,
    imgsrc: img5,
    title: "Machu Colosseum",
    location: "Rome",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, aspernatur doloremque tempore doloribus enim, sunt voluptatum maxime corrupti eaque cumque assumenda repellat ducimus necessitatibus cupiditate tempora veritatis perferendis obcaecati. Quod."
  },

  {
    id: 6,
    imgsrc: img6,
    title: "Taj Mahal",
    location: "India",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, aspernatur doloremque tempore doloribus enim, sunt voluptatum maxime corrupti eaque cumque assumenda repellat ducimus necessitatibus cupiditate tempora veritatis perferendis obcaecati. Quod."
  }




];

const Main = () => {
  return (

    <section className='main container section'>

      <div className='sectitle'>
        <h3 className='title'>Most Frequently visited</h3>
      </div>

      <div className='seccontent grid'>

        {
          Data.map(({id,imgsrc,title,location,desc}) => {

            return(
              <div key={id} className='singledestination'>

                <div className='imagediv'>
                  <img src={imgsrc} alt={title}></img>
                </div>

                <div className='cardinfo'>
                  <h4 className='desttitle'>{title}</h4>
                  <span className='continent flex'><FaSearchLocation  className="icon"/>
                  <span className='name'>{location}</span>
                  </span>
                </div>


                <div className='desc'>
                  <p>{desc}</p>
                </div>
              </div>
            )

            
          })
        }

      </div>
    </section>
  )
}

export default Main
