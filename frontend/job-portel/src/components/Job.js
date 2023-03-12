import React ,{useState} from 'react'
import './Job.css'
import JobData from '../API/JobData'

const Job = () => {
    const [data,setData] = useState(JobData)
  return (
    <>
       
       {
        data.map((elem)=>{
            return(
                <div className='job-container  ' key={elem.id}>
            <h3>{elem.category}</h3>
            <h4 style={{color:'#2F58CD'}}>{elem.companey}</h4>
            <p>Type(Work from home)</p>
            <div className='row'>
                <div className='col-lg-4 col-md-4 col-sm-6'>
                    <p>DURATION</p>
                    <p>5 months</p>
                </div>
                <div className='col-lg-4 col-md-4 col-sm-6'> 
                    <p>START DATE</p>
                    <p>5 JAN 2023</p>
                 </div>
                <div className='col-lg-4 col-md-4 col-sm-6'>
                    <p>STIPEND</p>
                    <p>5,000/-</p>
                </div>
                <div>
                    <a href="" className='job-btns-container'>view details</a>
                    <button className='btn btn-primary'>APPLY</button>
                </div>
            </div>
        </div>
            )
        })
       }

    </>
  )
}

export default Job