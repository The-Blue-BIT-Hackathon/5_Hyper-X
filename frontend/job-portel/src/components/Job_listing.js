import React, {useContext, useState} from 'react'
import Footer from './Footer'
import './Job_listing.css'
import Navbar from './Navbar';
import {Navigate, redirect, useNavigate} from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import axios from 'axios';


const Job_listing = () => {
  const { authState } = useContext(AuthContext);
  const [position, setPosition] = useState("");
  const [location, setLocation] = useState("");
  const [experience, setExperience] = useState(0);
  const [payroll, setPayroll] = useState("");
  const [jobType, setJobType] = useState("");
  const navigate = useNavigate();
  
  if (!authState.authenticated) {
    alert("Not Logged In. Please Login Again");
    return(
      <Navigate to="/company/login" replace={true}/>
    ) 
  }

  const handleSubmit = () => {
        let pay = parseInt(payroll);
        if (pay == NaN) {
          alert("Enter Valid Pay");
          return;
        }
        axios({
            method: 'post',
            url: 'http://localhost:8000/company/job',
            data: {
              company_id : authState.id,
              title : position,
              location : location,
              experience : experience,
              payroll : pay,
              jobType : jobType,
              skills : [],
              description : ""
            }
        }).then( (response) => {console.log(response); alert("Job added Successfully") })
          .catch( (error) => alert(error));
  }

  return (
    <>

    <Navbar/>

        <div class="container">
  <div class="row justify-content-center">
  <div class="col-md-5">
   <div class="card">
     <h2 class="card-title text-center">Post Job Opening</h2>
      <div class="card-body py-md-4">
       <div _lpchecked="1" >
          {/* <div class="form-group">
             <input type="text" class="form-control" id="name" placeholder="Enter Company Name" required/>
        </div> */}
        <div class="form-group">
             <input type="text" class="form-control" id="position" onChange={(e)=>setPosition(e.target.value)} placeholder="Position"/>
        </div>
                            
                          
   <div class="form-group">
     {/* <input type="text" class="form-control" id="location" placeholder="Location" required/> */}
     <label htmlFor="location" className=''>Select Location</label>
      <select name="location" id="job-type" required onChange={(e) => setLocation(e.target.value)}>
          <option value="remote">Remote</option>
          <option value="on-site">on-site</option>
          <option value="hybrid">Hobrid</option>
      </select>
   </div>
   <div class="form-group">
      <input type="number" class="form-control" id="experience" placeholder="Experience (in years)" onChange={(e) => setExperience(e.target.value) } required/>
   </div>
   <div class="form-group">
      <input type="text" class="form-control" id="payroll" placeholder="Payroll" required onChange={(e)=> setPayroll(e.target.value)}/>
   </div>
   <div class="form-group ">
      <label htmlFor="Job_Type">Select Job Type</label>
      <select name="Job_Type" id="job-type" onChange={(e)=> setJobType(e.target.value)}>
          <option value="full_time">Full Time</option>
          <option value="internship">Internship</option>
      </select>
   </div>
   <div class="" style={{display:'flex', justifyContent:'center'}}>
        <div> <button class="btn btn-primary posting-btn" onClick={()=>{alert("Added Job Successfully"); navigate("/")}}>POST</button> </div>
    </div>
       </div>
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
