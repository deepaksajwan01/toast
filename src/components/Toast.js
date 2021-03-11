import React from "react"
import "./toast.css"
import warninngIcon from "../static/images/warning.svg"
function Toast() {
  return (
    <div className='toast-wrap'>
      <div className='toast-content'>
        <div className='toast-icon'>
          <img src={warninngIcon} alt='' />
        </div>
        <div className='toast-message'>
          <p>New project 00001 created succesfully.</p>
        </div>
      </div>
    </div>
  )
}

export default Toast
