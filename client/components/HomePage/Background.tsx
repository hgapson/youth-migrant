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
        className="relative flex w-full items-center justify-center overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `url(${cover})`,
        }}
      >
        {/* Responsive Height */}
        <div className="xsm:h-64 h-64 w-full sm:h-72 md:h-80 lg:h-96 xl:h-[60vh] 2xl:h-[65vh]">
          {/* Popup message */}
          {showPopup && (
            <button
              className="popup-message absolute left-1/2 top-10 z-10 flex -translate-x-1/2 transform items-center rounded-lg bg-white p-3 shadow-lg sm:p-4 md:p-5 lg:p-6"
              onClick={handlePopupClick}
              aria-label="Close notification"
            >
              <AiOutlineWarning className="popup-icon text-xl text-yellow-600 sm:text-2xl lg:text-3xl" />
              <span className="popup-text ml-2 text-xs sm:text-sm md:text-lg lg:text-xl">
                Free !
              </span>
            </button>
          )}
        </div>
      </section>
    </div>
  )
}

export default Background
