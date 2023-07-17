import React from 'react'
import "./Zoom.css"
function Zoom(props) {
  return (
    <div className='Z-wapper'>
        <div className="Z-container">
            <img src={props.src} alt=""/>
         <p>{props.details}</p>
         <button className='cross'>X</button>
        </div>
    </div>
  )
}

export default Zoom