import React, { ReactNode } from 'react'
import { FaTimes } from 'react-icons/fa'

interface ModalProps {
  showModal: boolean
  handleClose: () => void
  children: ReactNode
}

const Modal: React.FC<ModalProps> = ({ showModal, handleClose, children }) => {
  if (!showModal) {
    return null
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-full max-w-lg rounded bg-white p-6 shadow-lg">
        <button
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
          onClick={handleClose}
        >
          <FaTimes />
        </button>
        {children}
      </div>
    </div>
  )
}

export default Modal
