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
        <div className="h-64 w-full md:h-80 lg:h-96 xl:h-[40vh] 2xl:h-[65vh]">
          {showPopup && (
            <button
              className="popup-message absolute left-1/2 top-10 z-10 flex -translate-x-1/2 transform items-center rounded-lg bg-white p-4 shadow-lg"
              onClick={handlePopupClick}
              aria-label="Close notification"
            >
              <AiOutlineWarning className="popup-icon text-yellow-600" />
              <span className="popup-text ml-2 text-sm md:text-lg">
                Our Services are Free!
              </span>
            </button>
          )}
        </div>
      </section>
    </div>
  )
}

export default Background
