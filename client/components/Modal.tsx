// Modal.tsx
import React from 'react'

interface ModalProps {
  showModal: boolean
  handleClose: () => void
  children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ showModal, handleClose, children }) => {
  if (!showModal) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-full max-w-lg rounded-lg bg-white p-6">
        <button
          className="absolute right-0 top-0 mr-2 mt-2 text-gray-600 hover:text-gray-900"
          onClick={handleClose}
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  )
}

export default Modal
