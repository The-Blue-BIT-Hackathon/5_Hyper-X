import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './About.css'

const About = () => {
  return (
    <>
      <Navbar/>

      <div className='about-main-container' >
         <h3><span className='about-start'> <span className='about-end'>Ab</span>out</span> JobHive</h3>
         <div className='about-jobhive'>
          <h4>"Welcome to Jobhive, a startup focused on connecting students with job and internship opportunities."</h4>
         </div>

         <div className='about-inside-container'>
            <p>
            Our mission is to bridge the gap between companies and students, creating a platform where businesses can easily share their job and internship listings and students can apply for them effortlessly. We understand that finding the right job or internship can be a daunting task, and we want to simplify the process for both parties.
            </p>
          </div>

          <div className='about-inside-container'>
            <p>
            Our platform is user-friendly and easy to navigate. Companies can create job and internship listings, and students can filter through them by location, industry, job type, and more. Once a student finds a job or internship they are interested in, they can apply directly through the platform.      
           </p>
          </div>

          <div className='about-inside-container'>
            <p>
            We understand that companies are looking for the best and brightest candidates, and we believe that every student deserves an equal opportunity to showcase their skills and talents. That's why we encourage companies to provide detailed job and internship descriptions, outlining the necessary qualifications, skills, and experience required for the role.
           </p>          
           </div>

          <div className='about-inside-container'>
            <p>
            At Jobhive, we are committed to providing a seamless experience for both companies and students. Whether you are a business looking for top talent or a student looking for a career opportunity, we are here to help. Join us today and discover the endless possibilities that await you.
           </p>
          </div>


      </div>

     <Footer/>
     
    </>
  )
}

export default About