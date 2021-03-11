import React from "react"
import "./alert.css"
import warninngIcon from "../static/images/warning.svg"
import Toast from "./Toast"

function Alert() {
  return (
    <div className='alert-wrap'>
      <div className='alert-container'>
        <div className='alert-box-wrap'>
          <div className='alert-icon'>
            <img src={warninngIcon} alt='' />
          </div>
          <div className='alert-warning'>
            <p className='alert-text'>Do you really want to cancel?</p>
          </div>
          <div className='alert-message'>
            <p className='alert-message-text'>All the data will be discarded</p>
          </div>
        </div>
        <div className='alert-confirm'>
          <div className='close-alert'>
            <p>Cancel</p>
          </div>
          <div className='confirm-alert'>
            <p>Confirm</p>
          </div>
        </div>
      </div>
      <Toast />
    </div>
  )
}

export default Alert
