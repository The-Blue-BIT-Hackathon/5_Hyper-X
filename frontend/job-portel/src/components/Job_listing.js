import React from 'react'
import Footer from './Footer'
import './Job_listing.css'
import Navbar from './Navbar'

const Job_listing = () => {
  return (
    <>

    <Navbar/>

        <div class="container">
  <div class="row justify-content-center">
  <div class="col-md-5">
   <div class="card">
     <h2 class="card-title text-center">Post Job Opening</h2>
      <div class="card-body py-md-4">
       <form _lpchecked="1" >
          {/* <div class="form-group">
             <input type="text" class="form-control" id="name" placeholder="Enter Company Name" required/>
        </div> */}
        <div class="form-group">
             <input type="text" class="form-control" id="position" placeholder="Position"/>
        </div>
                            
                          
   <div class="form-group">
     {/* <input type="text" class="form-control" id="location" placeholder="Location" required/> */}
     <label htmlFor="location">Select Location</label>
      <select name="location" id="job-type" required>
          <option value="remote">Remote</option>
          <option value="on-site">on-site</option>
          <option value="hybrid">Hobrid</option>
      </select>
   </div>
   <div class="form-group">
      <input type="text" class="form-control" id="experience" placeholder="Experience (in years)" required/>
   </div>
   <div class="form-group">
      <input type="text" class="form-control" id="payroll" placeholder="Payroll" required/>
   </div>
   <div class="form-group ">
      <label htmlFor="Job_Type">Select Job Type</label>
      <select name="Job_Type" id="job-type">
          <option value="full_time">Full Time</option>
          <option value="internship">Internship</option>
      </select>
   </div>
   <div class="d-flex flex-row align-items-center justify-content-between">
         <button class="btn btn-primary posting-btn">POST</button>
          </div>
       </form>
     </div>
  </div>
</div>
</div>
</div>


<Footer/>

    </>
  )
}

export default Job_listing