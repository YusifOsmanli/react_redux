import React from 'react'
import "./AddForm.css"

const AddForm = () => {
  return (
    <div>
        <div>
            <input type="text" placeholder='Note Title'/>
        </div>
        <div>
            <textarea className='textarea'  cols="30" rows="10" placeholder='Write note...'></textarea>
        </div>
        <div className='color'>
            <div className='pink'></div>
            <div className='purple'></div>
            <div className='blue'></div>
            <div className='yellow'></div>
            <div className='green'></div>
            <div>
                <button className='saveBtn'>Save ✓</button>
            </div>
        </div>
       
    </div>
  )
}

export default AddForm