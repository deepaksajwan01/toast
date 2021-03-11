import React, { useState, useEffect, useRef } from "react"
import "./alert.css"
import warninngIcon from "../static/images/warning.svg"
import Toast from "./Toast"

function Alert({ close, showPopup }) {
  const [popup, setPopup] = useState(false)
  const popupRef = useRef(null)

  useEffect(() => {
    document.addEventListener("mousedown", handleClickForPopup)
    return () => {
      document.removeEventListener("mousedown", handleClickForPopup)
    }
  }, [popup])

  const handleClickForPopup = (event) => {
    const { current } = popupRef

    if (showPopup && current && !current.contains(event.target)) {
      close()
    }
  }

  return (
    <div className='alert-wrap'>
      <div className='alert-container' ref={popupRef}>
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
          <div className='close-alert' onClick={() => close()}>
            <p>Cancel</p>
          </div>
          <div className='confirm-alert'>
            <p>Confirm</p>
          </div>
        </div>
      </div>
      {/* <Toast /> */}
    </div>
  )
}

export default Alert
