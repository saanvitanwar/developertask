import React, { useState } from 'react';
import "./Footer.css";
import { IoSend } from "react-icons/io5";
import { MdTravelExplore } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { TbArrowForward } from "react-icons/tb";
import footer from "../../projectimg/footer.jpg"

const Footer = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phoneNumber: "",
    query: ""
  });

  const whatsappNumber = '+918700939452';
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};

    if (!formData.firstName) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    }

    if (!formData.phoneNumber) {
      newErrors.phoneNumber = "Phone number is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const isValid = validateForm();
    if (isValid) {
      const formattedMessage = `Hi, I am ${formData.firstName}, Email: ${formData.email}, Phone No.: ${formData.phoneNumber}, Query: ${formData.query}`;
      const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(formattedMessage)}`;
      window.open(whatsappURL, '_blank');
    } else {
      console.log('Form Validation Failed');
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <section className='footer'>
      <div className='seccontent container' >
        <div className='contactdiv flex'>

          {/* <div className='image'>
            <img src={footer}></img>
          </div> */}
          <div className='text' id='form'>
            <h1>Travel with us Again</h1>
            <small>For Queries</small>
          </div>

          <div className='inputdiv flex'>
            <form className="carddiv"  onSubmit={handleSubmit}>
              <div className='nameinput'>
                <label>Name:</label>
                <div className='input flex'>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    placeholder="Enter your name..."
                    onChange={handleChange}
                  />
                  {errors.firstName && <div className="error">{errors.firstName}</div>}
                </div>
              </div>

              <div className='emailinput'>
                <label>Email:</label>
                <div className='input flex'>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    placeholder="Enter your email...."
                    onChange={handleChange}
                  />
                  {errors.email && <div className="error">{errors.email}</div>}
                </div>
              </div>

              <div className='forminput'>
                <label>Phone Number:</label>
                <div className='input flex'>
                  <input
                    type="text"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    placeholder="Enter your phone number...."
                    onChange={handleChange}
                  />
                  {errors.phoneNumber && <div className="error">{errors.phoneNumber}</div>}
                </div>
              </div>

              <div className='queryinput'>
                <label>Query:</label>
                <div className='input flex'>
                  <textarea
                    type="text"
                    name="query"
                    value={formData.query}
                    placeholder="Enter your query...."
                    onChange={handleChange}
                  />
                </div>
              </div>

              <button className="btn flex" type="submit">Submit <IoSend className="icon" /> </button>
            </form>
          </div>
        </div>

        <div className='footercard flex' id='about'>
          <div className='footerinto flex'>
            <div className='logodiv'>
              <a href='#' className='logo flex'>
                <MdTravelExplore className='icon' />TravelEasy.....
              </a>
            </div>
            <div className='footersocial flex'>
              <FaInstagram className='icon' />
              <IoIosMail className='icon' />
              <FaYoutube className='icon' />
            </div>
          </div>

          <div className='footerlinks grid'>
            <div className='linkgroup'>
              <span className='grptitle'>OUR AGENCY</span>
              <li className='footerlist flex'>
                <TbArrowForward />
                Services
              </li>
              <li className='footerlist flex'>
                <TbArrowForward />
                Payments
              </li>
              <li className='footerlist flex'>
                <TbArrowForward />
                Tourism
              </li>
              <li className='footerlist flex'>
                <TbArrowForward />
                Agency
              </li>
            </div>

            <div className='linkgroup'>
              <span className='grptitle'>PARTNERS</span>
              <li className='footerlist flex'>
                <TbArrowForward />
                Booking
              </li>
              <li className='footerlist flex'>
                <TbArrowForward />
                Renting
              </li>
              <li className='footerlist flex'>
                <TbArrowForward />
                Hotels
              </li>
              <li className='footerlist flex'>
                <TbArrowForward />
                Guides
              </li>
            </div>

            <div className='linkgroup'>
              <span className='grptitle'>PLACES</span>
              <li className='footerlist flex'>
                <TbArrowForward />
                London
              </li>
              <li className='footerlist flex'>
                <TbArrowForward />
                India
              </li>
              <li className='footerlist flex'>
                <TbArrowForward />
                USA
              </li>
              <li className='footerlist flex'>
                <TbArrowForward />
                New York
              </li>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
