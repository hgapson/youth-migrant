import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { Program } from './Models'

interface ProgramModalProps {
  isOpen: boolean
  onClose: () => void
  program: Program | null
}

const ProgramModal: React.FC<ProgramModalProps> = ({
  isOpen,
  onClose,
  program,
}) => {
  if (!isOpen || !program) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div
        className="relative overflow-hidden rounded-lg bg-white shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          <FaTimes size={24} />
        </button>
        <img
          src={program.image}
          alt={program.title}
          className="h-64 w-full object-cover"
        />
        <div className="p-6">
          <h2 className="mb-4 text-3xl font-bold">{program.title}</h2>
          <p className="mb-4 text-gray-700">{program.details}</p>
          <p className="mb-4 text-gray-700">{program.additionalInfo}</p>
          <p className="text-gray-700">{program.description}</p>
        </div>
      </div>
    </div>
  )
}

export default ProgramModal
