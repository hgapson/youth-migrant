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
        className="relative flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${cover})`,
          height: '50npm run devvh', // Use viewport height for responsiveness
          minHeight: '300px', // Set a minimum height for small screens
        }}
      >
        {showPopup && (
          <button
            className="popup-message"
            onClick={handlePopupClick}
            aria-label="Close notification"
          >
            <div className="popup-content">
              <AiOutlineWarning className="popup-icon" />
              <span className="popup-text">Our Services are Free!</span>
            </div>
          </button>
        )}
      </section>
    </div>
  )
}

export default Background
