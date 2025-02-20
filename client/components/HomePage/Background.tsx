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
        <div className="flex h-full items-center justify-center">
          {showPopup && (
            <button
              className="flex animate-bounce items-center gap-2 rounded-lg bg-yellow-500 px-6 py-3 text-lg font-semibold text-black shadow-lg transition-transform hover:scale-110 hover:bg-yellow-600"
              onClick={handlePopupClick}
              aria-label="Close notification"
            >
              <AiOutlineWarning className="text-2xl" />
              <span>Our Services are Free!</span>
            </button>
          )}
        </div>
      </section>
    </div>
  )
}

export default Background
