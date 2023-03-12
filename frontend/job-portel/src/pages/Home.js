import React from 'react'
import Navbar from '../components/Navbar'
import Filters from '../components/Filters'
import Job from '../components/Job'
import './Home.css'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
        <Navbar/>

        <div className='row jobs-main-container'>
           <div className='col-lg-4  '>
             <Filters/>
           </div>
           <div className='col-lg-7 listed-job-container'>
              <Job/>
           </div>
        </div>

        <Footer/>
    </>
  )
}

export default Home