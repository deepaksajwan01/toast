import React, { useState, useEffect, useRef } from "react"
import Alert from "./components/Alert"
import Toast from "./components/Toast"
import "./App.css"
function App() {
  const [showPopup, setShoePopup] = useState(false)
  const popupRef = useRef(null)

  const closeModalHandler = () => setShoePopup(false)

  // useEffect(() => {
  //   document.addEventListener("mousedown", handleClickForPopup)
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickForPopup)
  //   }
  // }, [showPopup])

  // const handleClickForPopup = (event) => {
  //   console.log("outside")

  //   if (popupRef.current.contains(event.target)) {
  //     return
  //   }
  //   setShoePopup(false)

  //   const { current } = popupRef
  //   console.log("target", event.target)
  //   console.log("current", current)
  //   console.log(showPopup)

  //   if (showPopup && current && !current.contains(event.target)) {
  //     console.log("outside")
  //     setShoePopup(false)
  //   }
  // }

  return (
    <div>
      <button onClick={() => setShoePopup(!showPopup)}>Cancel</button>
      {showPopup && (
        <div>
          <Alert
            close={closeModalHandler}
            ref={popupRef}
            showPopup={showPopup}
          />
        </div>
      )}
    </div>
  )
}

export default App
