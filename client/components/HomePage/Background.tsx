import React, { useEffect, useState } from 'react'
import { AiOutlineWarning } from 'react-icons/ai'
import cover from '../public/cover.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'
import '../main.scss'

const Background: React.FC = () => {
  const [showPopup, setShowPopup] = useState(true)

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  const handlePopupClick = () => {
    setShowPopup(false)
  }

  return (
    <div className="mt-16">
      <section
        className="background-section"
        style={{
          backgroundImage: `url(${cover})`,
        }}
      >
        {/* Content */}
        <div className="w-full">
          {showPopup && (
            <button
              className="popup-message"
              onClick={handlePopupClick}
              aria-label="Close notification"
            >
              <AiOutlineWarning className="popup-icon" />
              <span className="popup-text">Our Services are Free!</span>
            </button>
          )}
        </div>
      </section>
    </div>
  )
}

export default Background
