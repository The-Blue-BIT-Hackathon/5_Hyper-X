import React from 'react'
import './Filter.css'

const Filters = () => {
  return (
    <>
        
        <form action="" className='filter-form '>
            <label htmlFor="category" className='filter-lable'>Category</label>
            <input type="text" name='category' className='filter-input' />
            <label htmlFor="location" className='filter-lable'>Location</label>
            <input type="text" name='location' className='filter-input' />
            <input type="checkbox"  name="WFH" value="WFH" className='WFH-checkbox'/>
            <label for="WFH"> Work from home</label>
        </form>

    </>
  )
}

export default Filters